import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isLogged = true /// verificar no redux if the user is logged

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

export default PrivateRoute
