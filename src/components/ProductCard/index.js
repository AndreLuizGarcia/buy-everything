import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Button } from './styles'

function ProductCard({ id, name, price, description, image }) {
  const history = useHistory()

  return (
    <Container>
      <img src={image} alt={name} />
      <div style={{ flex: 1 }}>
        <span>{name}</span>
        <p>{description}</p>
      </div>

      <div>
        <span>R$ {price}</span>
        <Button backgroundColor='#2297ea'>
          Adicionar ao carrinho
        </Button>
        <Button backgroundColor='#fc5e2f' onClick={() => history.push(`/${id}/productdescription`)}>
          Ver detalhes
        </Button>
      </div>
    </Container>
  )
}

export default ProductCard