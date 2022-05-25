import './styles/App.scss';
import Router from './components/Router';
import Header from './components/Header.js';
import Cart from './components/Cart';
import Nav from './components/Nav';
import ListTable from './components/ListTable';
import { useState } from 'react';
import Qrcode from './components/Qrcode'

export default function App() {
  let [pick, setPick] = useState([]);
  let [fee, setFee] = useState([]);
  let [pay, setPay] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Nav></Nav>
        <ListTable pick={pick} setPick={setPick} fee={fee} setFee={setFee} pay={pay} setPay={setPay}></ListTable>
        <Cart pick={pick} setPick={setPick} fee={fee} setFee={setFee} pay={pay} setPay={setPay}></Cart>
        <Qrcode></Qrcode>

      </main>
    </div>
  );
}


