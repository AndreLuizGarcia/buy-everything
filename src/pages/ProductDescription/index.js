import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { actions as actionsCart } from '../../store/actions/cart'

import Header from '../../components/Header'
import ShimmerDescriptionCard from '../../components/ShimmerDescriptionCard'

import FakeStoreAPI from '../../services/FakeStoreAPI'
import { Container, Main, CTA, Control, AddCart } from './styles'

function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()



  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    getProduct()

    async function getProduct() {
      try {
        const { data } = await FakeStoreAPI.get(`/products/${id}`, {
          cancelToken: ourRequest.token,
        })
        data['quantity'] = 1

        setProduct(data)
      } catch (error) {
        if (!axios.isCancel(error)) {
          alert('Não foi possível carregar as informações do produto. Verifique sua conexão com a internet')
        }
      }
    }

    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    AOS.init({
      duration : 2000
    })

    return () => {
      ourRequest.cancel()
    }
  })

  function handleAddProduct() {
    dispatch(actionsCart.addProduct(product))
    setProduct({ ...product, quantity: 1})
  }

  return (
    <Container>
      <Header />
      <Main>
        {
          product.length === 0  ? <ShimmerDescriptionCard /> :
          <>
            <h1 data-aos="fade-up">{product.title}</h1>
            <div data-aos="fade-right">
              <img src={product.image} alt={product.title} />
              <div style={{ display: "flex",  flexDirection: "column", justifyContent: "space-around" }}>
                <p>{product.description}</p>
                <CTA>
                  <span>R$ {product.price}</span>
                  <Control>
                    <button onClick={ () => product.quantity > 1 ? setProduct({ ...product, quantity: product.quantity - 1}) : null}>-</button>
                      <span>{product.quantity}</span>
                    <button onClick={ () => { setProduct({ ...product, quantity: product.quantity + 1})} }>+</button>
                  </Control>
                  <AddCart onClick={handleAddProduct}>
                    Adicionar ao carrinho
                    <span>R$ {(product.price * product.quantity).toFixed(2)}</span>
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