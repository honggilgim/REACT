import '../styles/Cart.scss';
import { useState } from 'react';
import CartContent from './CartContent';
import BootPay from "bootpay-js"
import {QRCodeSVG} from "qrcode.react";
import "../styles/Qr.scss";


export default function Cart(props){


  function pay_Request(money) {
    BootPay.request({
      price: money, //실제 결제되는 가격
      application_id: "627bbe542701800023f6b473",
      name: '여행상품', //결제창에서 보여질 이름
      pg: 'kcp',
      method: 'card', //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
      show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
      items: [
        {
          item_name: '여행상품', //상품명
          qty: 1, //수량
          unique: '123', //해당 상품을 구분짓는 primary key
          price: 1000, //상품 단가
        }
      ],
      user_info: {
        username: '사용자 이름',
        email: '사용자 이메일',
        addr: '사용자 주소',
        phone: '010-1234-4567'
      },
      order_id: '12345', //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
      params: { callback1: 'A', callback2: 'B', customvar1234: 'C' },
      account_expire_at: '2023-10-25', // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
      extra: {
      raw_data: 1 // 오류 확인용
    }
    }).error(function (data) {
      //결제 진행시 에러가 발생하면 수행됩니다.
      console.log(data);
    }).cancel(function (data) {
      //결제가 취소되면 수행됩니다.
      console.log(data);
    }).ready(function (data) {
      // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수입니다.
      console.log(data);
    }).confirm(function (data) {
      //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
      //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
      console.log(data);
      var enable = true; // 재고 수량 관리 로직 혹은 다른 처리
      if (enable) {
        BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
      } else {
        BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
      }
    }).close(function (data) {
      // 결제창이 닫힐때 수행됩니다. (성공,실패,취소에 상관없이 모두 수행됨)
      console.log(data);
    }).done(function (data) {
      // 결제 성공시 qr 코드 생성
      Qr('sss')

      console.log(data);
    });
  }

  function Qr(name) {
      return (
        <div className="App">
          <h1>티켓</h1>
          <div>
            <QRCodeSVG value={name} />,
          </div>
        </div>
      );
  }

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
        <button onClick={() => pay_Request(props.pay)}>결제하기</button>
        <button onClick={()=>{props.setPick([]); props.setFee([]); props.setPay(0)}}>비우기</button>

      </div> 
    </div>  
  
  )
}