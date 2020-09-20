import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
import { Container, Main, Section, Wrapper } from './styles'

function WelcomePage() {
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome
    
    AOS.init({
      duration : 2000
    })

    getProducts()
  }, [])

  async function getProducts() {
    try {
      const { data } = await FakeStoreAPI.get('/products')
      setProducts(data)
    } catch (error) {
      alert('Não foi possível carregar os produtos. Verifique sua conexão com a internet')
    }
  }

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
          <Carousel arrows itemWidth={300} infinite>
            {
              products === null ? <ShimmerCarouselCard /> :
              products.map(product => (
                <CarouselCard 
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
    </Container>
  )
}

export default WelcomePage