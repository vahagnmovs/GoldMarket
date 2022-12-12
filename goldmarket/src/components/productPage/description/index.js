import React from 'react';

const Description = ({info}) => {
    const {CARAT, PCS, COLOR, CLARITY, CUT} = info.DIAMOND
    const {NAME, MATERIAL, FINENESS} = info
    return (
        <div>
            <span style={{color:"#1D3865", fontSize:'28px', fontWeight:"bold"}}>Description</span>
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
                    <th>{NAME}</th>
                    <th>NEW</th>
                    <th>ARMENIA</th>
                    <th>{MATERIAL}</th>
                    <th>{FINENESS}</th>
                    {/*<th>{Weight[indexWeight]}</th>*/}
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
                    <th>{CARAT}CT</th>
                    <th>26</th>
                    <th>{COLOR}</th>
                    <th>{CLARITY}</th>
                    <th>{CUT}</th>
                </tr>
                <tr>
                    <th>2 DIAMOND</th>
                    <th>{CARAT}CT</th>
                    <th>26</th>
                    <th>{COLOR}</th>
                    <th>{CLARITY}</th>
                    <th>{CUT}</th>
                </tr>
                <tr>
                    <th style={{color:"#A0A0A0"}}>TOTAL</th>
                    <th>{CARAT + CARAT} CT</th>
                    <th>52</th>
                </tr>
            </table>
        </div>
    );
};

export default Description;