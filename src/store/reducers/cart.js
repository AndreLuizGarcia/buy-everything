import { types } from '../types/cart'

const initialState = []

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD_PRODUCT:
      return state.findIndex(item => item.id === action.payload.id) === -1 ? 
        state = [...state, action.payload] : 
        state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item)
    case types.CART_DECREASE_PRODUCT:
      return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)
    case types.CART_REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload.id)
    case types.CART_REMOVE_ALL:
      return state = []
    default:
      return [...state]
  }
}

export { cart }