import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../../components/Header'

import tShirtMock from '../../assets/t-shirt-mock.jpg'
import { Container, Main, CTA, Control, AddCart } from './styles'

function ProductDescription() {
  useEffect(() => {
    window.scrollTo(0, 0)

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome

    AOS.init({
      duration : 2000
    })
  }, [])

  return (
    <Container>
      <Header />
      <Main>
        <h1 data-aos="fade-up">Mens Casual Premium Slim Fit T-Shirts</h1>
        <div data-aos="fade-right">
          <img src={tShirtMock} alt="T-shirt mock" />
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <CTA>
              <span>R$ 22,30</span>
              <Control>
                <button>-</button>
                  <span>3</span>
                <button>+</button>
              </Control>
              <AddCart>
                Adicionar ao carrinho
                <span>R$66,90</span>
              </AddCart>
            </CTA>
          </div>
        </div>
      </Main>
    </Container>
  )
}

export default ProductDescription;