import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../../components/Header'
import ProductInCart from '../../components/ProductInCart'

import { Container, Main, Footer } from './styles'

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0)

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome,

    AOS.init({
      duration : 2000
    })
  }, [])

  return (
    <Container>
      <Header />
      <Main>
        <div>
          <h1 data-aos="fade-up">Produtos no meu carrinho</h1>
          <div data-aos="fade-right">
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
          </div>
        </div>
      </Main>
      <Footer>
        <button>Enviar pedido</button>
      </Footer>
    </Container>
  )
}

export default Cart