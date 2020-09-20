import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Route from './routes'

import WelcomePage from '../pages/WelcomePage'
import SignIn from '../pages/SignIn'
import ProductList from '../pages/ProductList'
import ProductDescription from '../pages/ProductDescription'
import MyCart from '../pages/Cart'
import NotFound from '../pages/NotFound'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/productlist" component={ProductList} />
        <Route path="/productdescription" component={ProductDescription} />
        <Route path="/mycart" component={MyCart} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes