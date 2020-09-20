import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'

import { Container, Main } from './styles'

function ProductList() {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome

    AOS.init({
      duration : 2000
    })
  }, [])

  return (
    <Container>
      <Header />
      <Main>
        <div>
          <h1 data-aos="fade-up">Todos seus produtos em um único lugar</h1>
          <input data-aos="fade-up" type='text' placeholder='Digite um produto ou id do produto' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          <div data-aos="fade-right">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Main>
    </Container>
  )
}

export default ProductList