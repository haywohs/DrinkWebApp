import {createContext, useEffect, useReducer} from "react"
import {ADD_TO_CART, REMOVE_ITEM, INCREASE, DECREASE, CLEAR, CHECKOUT} from "../constants/cartActionTypes.js"

export const CartContext = createContext();

const Storage = (cartItems)=>{
    localStorage.setItem("cartItems",
    JSON.stringify(cartItems.length>0? cartItems:[]));
}

export const sumItems = (cartItems)=>{
    Storage(cartItems);
    let countItem = cartItems.reduce(
        (total, product) =>total+product.quantity,
        0
    );
    let total = cartItems.reduce(
        (total, product)=> total+product.price * product.quantity,
        0
    ).toFixed(2);
    return{countItem, total};

}
export const CartReducer = (state, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            if(!state.cartItems.find((item=>item.id===action.payload.id))){
                state.cartItems.push({
                    ...action.payload,
                    quantity:1,
                });
            }
            return{
                ...state,
                ...sumItems(state.cartItems),
               cartItems:[...state.cartItems],
            };
        case REMOVE_ITEM:
            return{
                ...state,
                ...sumItems(state.cartItems.filter(item=> item.id!==action.payload.id)),
                cartItems:[...state.cartItems.filter(item=>item.id!==action.payload.id),]
            };
        case INCREASE:
            state.cartItems[state.cartItems.findIndex(item=>item.id===action.payload.id)].quantity++;
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems:[...state.cartItems],
            };
        case DECREASE:
            state.cartItems[state.cartItems.findIndex(item=>item.id===action.payload.id)].quantity--;
            return{
                ...state,
                ...sumItems(state.cartItems),
                cartItems:[...state.cartItems],
            };
        case CHECKOUT:
            return{
                cartItems:[],
                checkout:true,
                ...sumItems([])
            }
        case CLEAR:
            return {
                cartItems:[],
                ...sumItems([]),
            };
        default:
            return state;
    }
}

