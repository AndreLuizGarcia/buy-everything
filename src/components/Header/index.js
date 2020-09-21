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
  const totalOfProducts = products.reduce((a, b) => a + (b['quantity'] || 0), 0)

  function handleLogout() {
    dispatch(actionsLogin.isLoggedFalse(false))
    history.push('/')
  }

  return (
    <Container>
      <img src={logo} alt="Buy everything" onClick={() => history.push('/')} role="button" />
        <LeftSide>
          <span style={{ visibility: isLogged ? 'unset' : 'hidden'  }}>Olá, <strong>Cliente</strong></span>
          <CartButton onClick={() => history.push('/mycart')}>
            <img src={cart} alt="Cart" />
            <span>{totalOfProducts}</span>
          </CartButton>
        { isLogged ?
          <Button onClick={handleLogout}>
            SAIR
          </Button> : <Button onClick={() => history.push('/signin')}>ENTRAR</Button>
        } 
      </LeftSide> 
    </Container>
  )
}

export default Header