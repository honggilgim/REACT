import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import '../styles/Qr.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BarcodeQrCode } from '@grapecity/wijmo.react.barcode.common';

class QR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theValue: 'sit:15A, 15'
        };
    }
    render() {
        return <div className="container-fluid">
            <div>QR code</div>
            <BarcodeQrCode value={this.state.theValue}/>
        </div>;
    }
}
ReactDOM.render(<QR />, document.getElementById('app'));
