import React from 'react';
import { ProductsTypes, DiamondTypes } from "../../../data/products";

interface  DescriptionProps {
    infoProduct: ProductsTypes
}

const Description = ({infoProduct}: DescriptionProps ) => {
    const {CARAT, COLOR, CLARITY, CUT, PCS,}:DiamondTypes = infoProduct.DIAMOND
    const {NAME, MATERIAL, FINENESS, WEIGHT} = infoProduct
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
                    <td>{NAME}</td>
                    <td>NEW</td>
                    <td>ARMENIA</td>
                    <td>{MATERIAL}</td>
                    <td>{FINENESS}</td>
                    {/*<th>{Weight[indexWeight]}</th>*/}
                </tr>
                <tr style={{color:"#A0A0A0"}}>
                    <td>STONE</td>
                    <td>CARAT</td>
                    <td>PCS</td>
                    <td>COLOR</td>
                    <td>CLARITY</td>
                    <td>CUT</td>
                </tr>
                <tr>
                    <td>DIAMOND</td>
                    <td>{CARAT}CT</td>
                    <td>26</td>
                    <td>{COLOR}</td>
                    <td>{CLARITY}</td>
                    <td>{CUT}</td>
                </tr>
                <tr>
                    <td>2 DIAMOND</td>
                    <td>{CARAT}CT</td>
                    <td>26</td>
                    <td>{COLOR}</td>
                    <td>{CLARITY}</td>
                    <td>{CUT}</td>
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

export  {Description};