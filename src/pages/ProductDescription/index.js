import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../../components/Header'
import ShimmerDescriptionCard from '../../components/ShimmerDescriptionCard'

import FakeStoreAPI from '../../services/FakeStoreAPI'
import { Container, Main, CTA, Control, AddCart } from './styles'

function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProduct()

    window.scrollTo(0, 0)

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome

    AOS.init({
      duration : 2000
    })
  })

  async function getProduct() {
    try {
      const { data } = await FakeStoreAPI.get(`/products/${id}`)
      setProduct(data)
    } catch (error) {
      alert('Não foi possível carregar as informações do produto. Verifique sua conexão com a internet')
    }
  }

  return (
    <Container>
      <Header />
      <Main>
        {
          product === null ? <ShimmerDescriptionCard /> :
          <>
            <h1 data-aos="fade-up">{product.title}</h1>
            <div data-aos="fade-right">
              <img src={product.image} alt={product.title} />
              <div style={{ display: "flex",  flexDirection: "column", justifyContent: "space-around" }}>
                <p>{product.description}</p>
                <CTA>
                  <span>R$ {product.price}</span>
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
          </>
        }
        </Main>



    </Container>
  )
}

export default ProductDescription;