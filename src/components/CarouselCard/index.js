import React from 'react'

import { Container, Buttons, Button } from './styles'

function CarouselCard({ id, name, price, description, image }) {
  return (
    <Container>
      <img src={image} alt="T-shirt mock" />
      <span>{name}</span>
      <span>{price}</span>
      <p>{description}</p>
      <Buttons>
        <Button backgroundColor='#2297ea'>
          Adicionar ao carrinho
        </Button>
        <Button backgroundColor='#fc5e2f'>
          Ver detalhes
        </Button>
      </Buttons>
    </Container>
  )
}

export default CarouselCard