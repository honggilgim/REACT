import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Qr_code from './Qrcode';


const Router = () => {
    return(
      <div style={style}>
        <BrowserRouter>
           <Switch>
               <Route path="/QR" component={Qr_code}></Route>
           </Switch>
        </BrowserRouter>
      </div>
    );
 }