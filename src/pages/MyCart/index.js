import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../../components/Header'
import ProductInCart from '../../components/ProductInCart'

import { Container, Main, Footer } from './styles'

function Cart() {
  const products = useSelector(state => state.cart)
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
            {
              products.length === 0 ? <h1 style={{flex: 1}}>Não há itens no carrinho</h1> :
              products.map((product, index) => (
                <ProductInCart
                  key={product.id + index}
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
      {
        products.length !== 0 ? 
        <Footer>
          <button>Enviar pedido</button>
        </Footer> : null
      }

    </Container>
  )
}

export default Cart