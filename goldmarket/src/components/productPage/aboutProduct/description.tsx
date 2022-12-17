import React from 'react';
import { ProductsTypes, DiamondTypes } from "src/data/products";

interface  DescriptionProps {
    infoProduct: ProductsTypes
}
const Description = ({infoProduct}: DescriptionProps ) => {
    const {carat, color, clarity, cut, pcs,}:DiamondTypes = infoProduct.diamond
    const {name, material, fineness, weight} = infoProduct
    return (
        <div>
            <span style={{color:"#1D3865", fontSize:'28px', fontWeight:"bold"}}>Description</span>
            <table style={{width:"100%"}}>
                <tr style={{color:"#A0A0A0"}}>
                    <th>NAME</th>
                    <th>CONDITION</th>
                    <th>ORIGIN</th>
                    <th>material</th>
                    <th>fineness</th>
                    <th>weight</th>
                </tr>
                <tr >
                    <td>{name}</td>
                    <td>NEW</td>
                    <td>ARMENIA</td>
                    <td>{material}</td>
                    <td>{fineness}</td>
                    //FIXME:
                    {/*<th>{weight[indexweight]}</th>*/}
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
                    <td>{carat}CT</td>
                    <td>26</td>
                    <td>{color}</td>
                    <td>{clarity}</td>
                    <td>{cut}</td>
                </tr>
                <tr>
                    <td>2 DIAMOND</td>
                    <td>{carat}CT</td>
                    <td>26</td>
                    <td>{color}</td>
                    <td>{clarity}</td>
                    <td>{cut}</td>
                </tr>
                <tr>
                    <th style={{color:"#A0A0A0"}}>TOTAL</th>
                    <th>{carat + carat} CT</th>
                    <th>52</th>
                </tr>
            </table>
        </div>
    );
};

export  {Description};