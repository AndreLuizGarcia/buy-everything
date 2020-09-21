import { types } from '../types/cart'

const initialState = localStorage.getItem('@BUY_EVERYTHING') ? JSON.parse(localStorage.getItem('@BUY_EVERYTHING')) : null
let newState = []

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD_PRODUCT:
      newState = state.findIndex(item => item.id === action.payload.id) === -1 ? 
      state = [...state, action.payload] : 
      state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item)

      localStorage.setItem('@BUY_EVERYTHING', JSON.stringify(newState))

      return state = newState
    case types.CART_DECREASE_PRODUCT:
      newState = state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)

      localStorage.setItem('@BUY_EVERYTHING', JSON.stringify(newState))

      return state = newState
    case types.CART_REMOVE_PRODUCT:
      newState = state.filter(product => product.id !== action.payload.id)

      localStorage.setItem('@BUY_EVERYTHING', JSON.stringify(newState))

      return state = newState
    case types.CART_REMOVE_ALL:
      newState = []
      localStorage.setItem('@BUY_EVERYTHING', JSON.stringify(newState))

      return state = newState
    default:
      return [...state]
  }
}

export { cart }