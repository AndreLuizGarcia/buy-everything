import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../../store/actions/isLogged'

import { Container, Content, AnimationContainer, Background } from './styles';

function SignIn() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if(username === 'cliente' && password === '123456') {
      dispatch(actions.isLoggedTrue(true))
      history.push('/')
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit}>
            <h1>Faça seu Login</h1>
            <input name="username" placeholder="E-mail" value={username} onChange={e => setUsername(e.target.value)} />
            <input name="password" type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
          </form>

          <Link to="/">
            Voltar para tela principal
          </Link>
        </AnimationContainer>
      </Content>

    </Container>
  )
}

export default SignIn