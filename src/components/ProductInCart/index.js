import React from 'react'

import { Container, Control, DeleteFromCart } from './styles'

function ProductInCart({ id, name, price, description, image }) {
  return (
    <Container>
      <img src={image} alt={name} />
      <div>
        <span>{name}</span>
        <p>{description}</p>
      </div>

      <div>
        <Control>
          <button>-</button>
            <span>3</span>
          <button>+</button>
        </Control>
        <DeleteFromCart>Remover do carrinho</DeleteFromCart>
        <span>R$ {price}</span>
      </div>
    </Container>
  )
}

export default ProductInCart