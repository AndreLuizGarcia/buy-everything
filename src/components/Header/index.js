import React from 'react'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import { Container, LeftSide, CartButton, Button } from './styles'

function Header() {
  const isLogged = false
  const history = useHistory()

  return (
    <Container>
      <img src={logo} alt="Buy everything" onClick={() => history.push('/')} role="button" />
      { isLogged ?
        <LeftSide>
          <span>Olá, <strong>Cliente</strong></span>
          <CartButton>
            <img src={cart} alt="Cart" />
            <span>5</span>
          </CartButton>
          <Button onClick={() => history.push('/logout')}>
            SAIR
          </Button>
        </LeftSide> : <Button onClick={() => history.push('/signin')}>ENTRAR</Button>
      }
    </Container>
  )
}

export default Header