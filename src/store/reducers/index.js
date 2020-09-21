import { combineReducers } from 'redux'
import { cart } from './cart'
import { isLogged } from './isLogged'

const reducers = combineReducers({
  cart,
  isLogged
})

export { reducers }