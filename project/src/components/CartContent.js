import '../styles/CartContent.scss';

export default function CartContent(props){
  return(
    <div className="cartContent">
      <p>{props.name}</p>
      <p>{props.fee[props.refNum]+`원`}</p>
      <button onClick={()=>{
        let copy_pick = [...props.pick];
        copy_pick.splice(props.refNum,1);
        props.setPick(copy_pick);
        let copy_fee = [...props.fee];
        props.setPay(props.pay - props.fee[props.refNum]);
        copy_fee.splice(props.refNum,1);
        props.setFee(copy_fee);
        // 최종 결제금액 : props.pay
      }}>삭제</button>
    </div>
  )
}