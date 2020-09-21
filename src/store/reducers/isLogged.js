import { types } from '../types/isLogged'

const isLogged = (state = false, action) => {
  switch (action.type) {
    case types.isLogged_TRUE:
      return state = action.payload
    case types.isLogged_FALSE:
      return state = action.payload
    default:
      return state
  }
}

export { isLogged }