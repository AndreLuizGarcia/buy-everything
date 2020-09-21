import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './routes'

import WelcomePage from '../pages/WelcomePage'
import SignIn from '../pages/SignIn'
import ProductList from '../pages/ProductList'
import ProductDescription from '../pages/ProductDescription'
import MyCart from '../pages/MyCart'
import NotFound from '../pages/NotFound'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/productlist" component={ProductList} />
        <Route path="/:id/productdescription" component={ProductDescription} />
        <PrivateRoute path="/mycart" component={MyCart} isPrivate />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes