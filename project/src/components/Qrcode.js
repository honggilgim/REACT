import React from "react";
import {QRCodeSVG} from "qrcode.react";

import "../styles/Qr.scss";

export default function Qr_code() {
  return (
    <div className="App">
      <h1>티켓</h1>
      <div>
        <QRCodeSVG value="ticket : 김홍길, 홍길, 홍길" />,
      </div>
    </div>
  );
}