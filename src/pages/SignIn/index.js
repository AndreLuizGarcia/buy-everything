import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Container, Content, AnimationContainer, Background } from './styles';

function SignIn() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    if(username === 'cliente' && password === '123456') {
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