import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Route from './routes'

import WelcomePage from '../pages/WelcomePage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WelcomePage} isPrivate />


        {/* <Route path="/private" component={privatePage} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes