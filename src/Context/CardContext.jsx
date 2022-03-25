import React, { useReducer } from 'react';
import {createContext} from 'react'
import {products} from "../Components/ProductList"
import reducer from "../reducer/Reducer"

export const ContextItem = createContext()

const initialState={
    item:products,
    totalAmount:0,
    totalItems:0,
}


function CardContext(props) {
   
    const [state,dispatch]=useReducer(reducer,initialState)
    
    return (
        <>
          <ContextItem.Provider value= {{...state,dispatch}}>
              {props.children}
          </ContextItem.Provider>  
        </>
    );
}

export default CardContext;