import { types } from '../types/isLogged'

const isLoggedTrue = (payload) => ({
  type: types.isLogged_TRUE,
  payload
})

const isLoggedFalse = (payload) => ({
  type: types.isLogged_TRUE,
  payload
})

const actions = {
  isLoggedTrue,
  isLoggedFalse
}

export { actions }