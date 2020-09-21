import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

import FakeStoreAPI from '../../services/FakeStoreAPI'

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'

import { Container, Main } from './styles'

import ShimmerProductList from '../../components/ShimmerProductList'

function ProductList() {
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState(null)

  let filteredProducts = products && products.filter((product) => {
    return  product.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
            product.id.toString().indexOf(searchValue) !== -1
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    AOS.init({
      duration : 2000
    })

    const ourRequest = axios.CancelToken.source()
    getProducts()

    async function getProducts() {
      try {
        const { data } = await FakeStoreAPI.get('/products', {
          cancelToken: ourRequest.token,
        })
        setProducts(data)
      } catch (error) {
        if (!axios.isCancel(error)) {
          alert('Não foi possível carregar as informações do produto. Verifique sua conexão com a internet')
        }
      }
    }

    return () => {
      ourRequest.cancel()
    }
  }, [])



  return (
    <Container>
      <Header />
      <Main>
        <div>
          <h1 data-aos="fade-up">Todos seus produtos em um único lugar</h1>
          <input data-aos="fade-up" type='text' placeholder='Digite um produto ou id do produto' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          <div data-aos="fade-right">
          {
            products === null ? <ShimmerProductList /> :
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))
          }
          </div>
        </div>
      </Main>
    </Container>
  )
}

export default ProductList