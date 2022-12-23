import React, {Component} from 'react';
import frame from "src/style/Icons/Frame.png";
import cd from 'src/style/Icons/checd.png'

class ProductColor extends Component {
    render() {
        return (

            <div className={'metal_collor'}>
                <p> Metall color:</p>
                <div className={'collor flex  align-center justify-center'}>
                    <img src={cd}/>
                </div>
                <div className={'fines  flex  align-center justify-center'}>
                    <img src={frame}/>Fineness: 585 - 14k
                </div>
            </div>
        );
    }
}

export {ProductColor};