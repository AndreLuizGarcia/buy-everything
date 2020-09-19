import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
