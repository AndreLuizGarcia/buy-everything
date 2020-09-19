import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isLogged = true /// verificar no redux if the user is logged

const Routes = ({ isPrivate = false, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isPrivate === isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

export default Routes
