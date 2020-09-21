import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import FakeStoreAPI from '../../services/FakeStoreAPI'

import Header from '../../components/Header'
import CarouselCard from '../../components/CarouselCard'
import ShimmerCarouselCard from '../../components/ShimmerCarouselCard'

import shopBackground from '../../assets/shopBackground.png'
import './styles.css'
import { Container, Main, Section, Wrapper, SnackNotification } from './styles'

function WelcomePage() {
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState(null)
  const [snackNotificationVisibility, setSnackNotificationVisibility] = useState(false)

  let filteredProducts = products && products.filter((product) => {
    return product.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
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
          setSnackNotificationVisibility(true)
          setTimeout(() => setSnackNotificationVisibility(false), 3000)  
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
        <Section>
          <div data-aos="fade-up">
            <h1>Todos seus produtos em um único lugar</h1>
            <input type='text' placeholder='Digite um produto ou id do produto' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          </div>
          <img src={shopBackground} alt="Shop Background" data-aos="fade-up" />
        </Section>

        <Wrapper data-aos="zoom-in">
          <Carousel arrows itemWidth={300} infinite={!products}>
            {
              products === null ? <ShimmerCarouselCard /> :
              filteredProducts.map(product => (
                <CarouselCard 
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              ))
            }
          </Carousel>
          <Link to='/productlist'>Ver todos os produtos</Link>
        </Wrapper>
      </Main>
      <SnackNotification visible={snackNotificationVisibility}>
        <span>Não foi possível carregar as informações dos produtos. Verifique sua conexão com a internet.</span>
        <button onClick={() => setSnackNotificationVisibility(false)}>X</button>
      </SnackNotification>
    </Container>
  )
}

export default WelcomePage