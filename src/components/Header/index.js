import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { actions as actionsLogin } from '../../store/actions/isLogged'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import { Container, LeftSide, CartButton, Button } from './styles'

function Header() {
  const isLogged = useSelector(state => state.isLogged)
  const history = useHistory()
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)

  function handleLogout() {
    dispatch(actionsLogin.isLoggedFalse(false))
    history.push('/')
  }

  return (
    <Container>
      <img src={logo} alt="Buy everything" onClick={() => history.push('/')} role="button" />
      { isLogged ?
        <LeftSide>
          <span>Olá, <strong>Cliente</strong></span>
          <CartButton onClick={() => history.push('mycart')}>
            <img src={cart} alt="Cart" />
            <span>{products ? products.length : 0}</span>
          </CartButton>
          <Button onClick={handleLogout}>
            SAIR
          </Button>
        </LeftSide> : <Button onClick={() => history.push('/signin')}>ENTRAR</Button>
      }
    </Container>
  )
}

export default Header