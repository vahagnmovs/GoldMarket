import React from 'react';

import { useSelector } from "react-redux";
const Description = () => {
    const weight = useSelector(state=> state.sellerStore)
    const weightArr = useSelector(state=> state.sellerStore.IMAGESINFORMATION)
    const { WEIGHT } = weightArr;
    const { indexWeight } = weight;
    return (
        <div>
            <p style={{color:"#1D3865", fontSize:'28px', fontWeight:"bold"}}>Description</p>
            <table style={{width:"100%"}}>
                <tr style={{color:"#A0A0A0"}}>
                    <th>NAME</th>
                    <th>CONDITION</th>
                    <th>ORIGIN</th>
                    <th>MATERIAL</th>
                    <th>FINENESS</th>
                    <th>WEIGHT</th>
                </tr>
                <tr >
                    <th>RING</th>
                    <th>NEW</th>
                    <th>ARMENIA</th>
                    <th>GOLD</th>
                    <th>585</th>
                    <th>{WEIGHT[indexWeight]}</th>
                </tr>
                <tr style={{color:"#A0A0A0"}}>
                    <th>STONE</th>
                    <th>CARAT</th>
                    <th>PCS</th>
                    <th>COLOR</th>
                    <th>CLARITY</th>
                    <th>CUT</th>
                </tr>
                <tr>
                    <th>DIAMOND</th>
                    <th>0.60CT</th>
                    <th>26</th>
                    <th>H</th>
                    <th>VS/SI</th>
                </tr>
                <tr>
                    <th>2 DIAMOND</th>
                    <th>0.60CT</th>
                    <th>26</th>
                    <th>H</th>
                    <th>VS/SI</th>
                </tr>
                <tr>
                    <th style={{color:"#A0A0A0"}}>TOTAL</th>
                    <th>1.20CT</th>
                    <th>52</th>
                </tr>
            </table>
        </div>
    );
};

export default Description;