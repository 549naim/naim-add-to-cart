import React from 'react';
import { FcMinus } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";
import {ContextItem} from "../Context/CardContext" 



function Item({id,title,description,price,img,quantity}) {

    const {dispatch}= useContext(ContextItem)
   
    const removeItem = (id)=>{
     
      return dispatch({
          type : "DELETE_ITEM",
          payload : id,           
      });
  };

  const incrementItem=(id)=>{
      return dispatch({
          type:"INCREMENT",
          itemId:id, 
      })
  } 

  const decrementItem=(id)=>{
      
      return dispatch({
          type:"DECREMENT",
          itemId:id, 
      }
     
      )
     
  } 

    return (
        <div>
            <div className="cart-item-container">
              <div className="container">
                <div className="item-info">
                  <div className="row r1">
                    <div className="image-cart col-12 col-sm-4 col-md-4">
                      <img
                        className=" "
                        src={img}
                        alt=""
                      />
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 c-des">
                      <h4 className="">{title}</h4>
                      <p>{description}</p>
                      <p>product id:{id}</p>
                    </div>
                    <div className="quantity col-12 col-sm-4 col-md-4">
                      <div  onClick={()=>decrementItem(id)}>
                        <FcMinus size={25} />
                      </div>
                      <span>
                        {" "}
                        <input
                          className="q-num"
                          type="text"
                          placeholder="0"
                          value={quantity}
                        />{" "}
                      </span>
                      <span>
                        <div onClick={()=>incrementItem(id)}  >
                          <FcPlus size={25}  />
                        </div>
                      </span>
                      <div className="price">
                        <h3>
                          <span>Price: $ {
                        price*quantity
                          }</span>
                        </h3>
                      </div>
                      <div onClick={()=>removeItem(id)}>
                        <BsFillTrashFill size={20}  />
                      </div>
                      

                    </div>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
        </div>
    );
}

export default Item;