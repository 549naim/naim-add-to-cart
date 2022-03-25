import React from "react";
import {Button} from "react-bootstrap"
import { FcLeft } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import Item from "./Item";
import {useEffect} from "react"

import { useContext } from "react";
import {ContextItem} from "../Context/CardContext" 
function Cart() {
    const {item,totalItems,dispatch,totalAmount} = useContext(ContextItem)
   
    const clearAll= ()=>{
      return dispatch({
          type:"CLEAR_ALL"
      })
  }

  useEffect(()=>{
    dispatch({
        type:"TOTAL_QUANTITY"
    },[item]);
})

  return (
    <div>
      <section className="container">
        <header className=" section1">
          <div className="shoping">
            <span>
              <FcLeft size={50} />
            </span>
            <span className="continue"> Continue shoping</span>
          </div>
          <div className="cart-icon">
            
              <BsFillCartFill size={50}/><div className="logo-text" >{totalItems}</div>
            
          </div>
        </header>
        <hr />

        <section className="main-cart-section">
          <div className="text1">
            <h3>Shoping cart</h3>
            <p className="cart-item-text">
              You have <span>{totalItems}</span> item in cart
            </p>
          </div>
          <div className="cart-item">
              {
                  item.map((curItem)=>{
                      return <Item key={curItem.id} {...curItem} />
                  })
              }
            
          </div>
        </section>
        <div className="total">
          <h4>
            Total : <span>{totalAmount}</span>
          </h4>
          <Button className="btn-cheakout" variant="primary">Cheak Out</Button>
          <Button onClick={()=>clearAll()} className="btn-clear" variant="danger">Clear Cart</Button>
        </div>
      </section>
    </div>
  );
}

export default Cart;
