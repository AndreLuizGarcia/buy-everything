import React from 'react'

import tShirtMock from '../../assets/t-shirt-mock.jpg'
import { Container, Button } from './styles'

function ProductCard() {
  return (
    <Container>
      <img src={tShirtMock} alt="T-shirt mock" />
      <div>
        <span>Mens Casual Premium Slim Fit T-Shirts</span>
        <p>        
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div>
        <span>R$ 22,30</span>
        <Button backgroundColor='#2297ea'>
          Adicionar ao carrinho
        </Button>
        <Button backgroundColor='#fc5e2f'>
          Ver detalhes
        </Button>
      </div>
    </Container>
  )
}

export default ProductCard