import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Swal from 'sweetalert2'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { actions as actionsCart } from '../../store/actions/cart'

import Header from '../../components/Header'
import ProductInCart from '../../components/ProductInCart'

import { Container, Main, Footer } from './styles'

function Cart() {
  const isLogged = useSelector(state => state.isLogged)
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    AOS.init({
      duration : 2000
    })
  }, [])

  function handleSendCart() {
    if(!isLogged) {
      Swal.fire({
        title: 'Para concluir seu pedido é necessário entrar na sua conta.',
        showCancelButton: true,
        confirmButtonText: `OK`,
        icon: 'warning',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/signin')
        } return
      })
    } else {
      Swal.fire(
        'Parabéns',
        'Compra realizada com sucesso!',
        'success'
      )
      dispatch(actionsCart.removeAll())
    }
  }

  return (
    <Container>
      <Header />
      <Main>
        <div>
          <h1 data-aos="fade-up">Produtos no meu carrinho</h1>
          <div data-aos="fade-right">
            {
              products.length === 0 ? <h1 style={{flex: 1}}>Não há itens no carrinho</h1> :
              products.map((product) => (
                <ProductInCart
                  key={product.id + Math.random()}
                  id={product.id}
                  name={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                  quantity={product.quantity}
                />
              ))
            }
          </div>
        </div>
      </Main>
      {
        products.length !== 0 ? 
        <Footer>
          <button onClick={handleSendCart}>Enviar pedido</button>
        </Footer> : null
      }

    </Container>
  )
}

export default Cart