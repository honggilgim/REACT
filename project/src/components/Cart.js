import '../styles/Cart.scss';
import { useState } from 'react';
import CartContent from './CartContent';

export default function Cart(props){
  return(
    <div className="cartBox">
      <div className="cartArea">
        {
        props.pick.map((target, refNum)=>{
          return(
            <CartContent pick={props.pick} setPick={props.setPick} refNum ={refNum} name={target} fee={props.fee} setFee={props.setFee} pay={props.pay} setPay={props.setPay}></CartContent>
          )
        })
        }
      </div>
      <div className="payBox">
        <h1>결제 금액</h1>
        <h2>{props.pay}</h2>
        <button>결제하기</button>
        <button onClick={()=>{props.setPick([]); props.setFee([]); props.setPay(0)}}>비우기</button>

      </div> 
    </div>  
  
  )
}