import React from 'react'
import { useDispatch } from 'react-redux'

import { actions as actionsCart } from '../../store/actions/cart'

import { Container, Control, DeleteFromCart } from './styles'

function ProductInCart({ id, name, price, description, image, quantity }) {
  const dispatch = useDispatch()

  const product = {
    id,
    name,
    price,
    description,
    image,
    quantity
  }

  return (
    <Container>
      <img src={image} alt={name} />
      <div style={{ flex: 1 }}>
        <span>{name}</span>
        <p>{description}</p>
      </div>

      <div>
        <Control>
          <button onClick={ () => quantity > 1 ? dispatch(actionsCart.decreaseProduct(product)) : null}>-</button>
          <span>{quantity}</span>
          <button onClick={ () => dispatch(actionsCart.addProduct({...product, quantity: 1}))}>+</button>
        </Control>
        <DeleteFromCart onClick={ () => dispatch(actionsCart.removeProduct(product))}>Remover do carrinho</DeleteFromCart>
        <span>R$ {(quantity * price).toFixed(2)}</span>
      </div>
    </Container>
  )
}

export default ProductInCart