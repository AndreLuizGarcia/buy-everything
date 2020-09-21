import { types } from '../types/cart'

const addProduct = product => ({
  type: types.CART_ADD_PRODUCT,
  payload: product
})

const decreaseProduct = product => ({
  type: types.CART_DECREASE_PRODUCT,
  payload: product
})

const removeProduct = product => ({
  type: types.CART_REMOVE_PRODUCT,
  payload: product
})

const removeAll = product => ({
  type: types.CART_REMOVE_ALL,
  payload: null
})

const actions = {
  addProduct,
  decreaseProduct,
  removeProduct,
  removeAll
}

export { actions }