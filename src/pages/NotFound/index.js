import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import notFoundImg from '../../assets/404.png'
import { Container } from './styles'

function NotFound() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    })
  }, [])

  return (
    <Container data-aos="zoom-in">
      <img src={notFoundImg} alt="404 - Page not found" />

      <Link to='/'>Voltar para tela inicial</Link>
    </Container>
  )
}

export default NotFound