import { types } from '../types/cart'

const cart = (state = [], action) => {
  switch (action.type) {
    case types.CART_ADD_PRODUCT:
      return [
        ...state,
        action.payload
      ]
    case types.CART_DECREASE_PRODUCT:
      let product = state.indexOf(action.payload.id)
      if (product >= 0) {
        return [ ...state.splice(product, 1)]
      }
      break;
    case types.CART_REMOVE_PRODUCT:
      return [
        ...state.filter(product => product.id !== action.payload.id)
      ]  
    default:
      return [...state]
  }
}

export { cart }