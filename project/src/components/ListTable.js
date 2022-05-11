import '../styles/ListTable.scss';
import Content from './Content';
import TourDB from '../TourDB.js';
import HotelDB from '../HotelDB.js';

import { Routes, Route, Link} from 'react-router-dom'

export default function ListTable(props){
  return(
    <div className="listTable">
      <div className="contentsBox">
        <Routes>
          <Route path="/touristSpot" element={
            TourDB.map((target, index)=>{
              return(
                <Content name={target.name} hometown={target.hometown} age={target.age} price={target.price} pick={props.pick} setPick={props.setPick}  fee={props.fee} setFee={props.setFee} pay={props.pay} setPay={props.setPay} index={index}></Content>
              )
            })
          }/>
          <Route path="/Hotel" element={
            HotelDB.map((target, index)=>{
              return(
                <Content name={target.name} hometown={target.hometown} age={target.age} price={target.price} pick={props.pick} setPick={props.setPick}  fee={props.fee} setFee={props.setFee} pay={props.pay} setPay={props.setPay} index={index}></Content>
              )
            })
          }/>
          <Route path="/traffic" element={
            <p>준비중입니다.</p>
          }/>
          <Route path="/etc" element={
            <p>준비중입니다.</p>
          }/>
        </Routes>  
      </div>
    </div>
  )
}