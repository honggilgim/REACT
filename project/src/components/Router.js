import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Qr_code from './Qrcode';


const Router = () => {
    return(
      <div>
        <BrowserRouter>
           <Routes>
               <Route path="/QR" component={Qr_code}></Route>
           </Routes>
        </BrowserRouter>
      </div>
    );
 }

 export default Router;