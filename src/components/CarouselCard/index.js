import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Buttons, Button } from './styles'

function CarouselCard({ id, name, price, description, image }) {
  const history = useHistory()

  return (
    <Container>
      <img src={image} alt={name} />
      <span>{name}</span>
      <span>R$ {price}</span>
      <p>{description}</p>
      <Buttons>
        <Button backgroundColor='#2297ea'>
          Adicionar ao carrinho
        </Button>
        <Button backgroundColor='#fc5e2f' onClick={() => history.push(`/${id}/productdescription`)}>
          Ver detalhes
        </Button>
      </Buttons>
    </Container>
  )
}

export default CarouselCard