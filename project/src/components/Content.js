import '../styles/Content.scss';

export default function Content(props){
  return(
    <div className="content">
      <h1>{props.name}</h1>
      <p>{props.price + `원`}</p>
      <button className="btnPay" onClick={()=>{
        let copy_name = [...props.pick];
        copy_name.push(props.name);
        props.setPick(copy_name);
        let copy_fee = [...props.fee];
        copy_fee.push(props.price);
        props.setFee(copy_fee);
        props.setPay(props.pay + props.price);
      }}>장바구니</button>
    </div>
  )
}