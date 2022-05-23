import React from "react";
import { render } from "react-dom";
import QRCode from "qrcode.react";

import "./styles.css";

function Qr_code() {
  return (
    <div className="App">
      <h1>Hello QR</h1>
      <div>
        <QRCode
          value="https://p3d.in"
          renderAs="svg"
          style={{
            width: "80vmin",
            height: "80vmin"
          }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<Qr_code />, rootElement);