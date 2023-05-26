import React, { useReducer } from 'react'
import { CartReducer, CartContext } from './CartContext.js';
import { sumItems } from './CartContext.js';

const storage = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[];

const CartState = ({children}) => {

    const INITIAL_STATE = {
        cartItems:storage,
        ...sumItems(storage),
        checkout:false,
    };

    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    <CartContext.Provider
    value={{
        addToCart,
        increase,
        decrease,
        removeFromCart,
        clearCart,
        handleCheckout,
        cartItems:state.cartItems,
        dispatch,
        ...state,
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartState;