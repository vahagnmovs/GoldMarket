import React from 'react';

import {useSelector} from "react-redux";
import ImageSlice from "./imageSlice";
import Sizes from "./size";
import Weights from "./weight";

const ProductInformation = () => {
    const seller = useSelector(state => state.sellerStore)
    const {STAR, LIKES} = seller;
    const imageInfo = useSelector(state => state.sellerStore.IMAGESINFORMATION);

    const {NAME, FINENESS, NEWPRICES, OLDPRICES, CODE, COUNT} = imageInfo;
    return (
        <div>
            <div>
                <h2>{NAME}</h2>
                <div>
                    <ul style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                        <li>{STAR}</li>
                        <li>(${LIKES} reviews)</li>
                        <li>Add to Watchlist</li>
                    </ul>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div>
                    <ImageSlice/>
                </div>
                <div>
                    <div style={{textAlign: "right"}}>
                        <p style={{color: "#9F9F9F"}}>
                            Product code:
                            <span style={{fontWeight: "bold", color: "black"}}>
                            {CODE}
                        </span>
                        </p>
                    </div>
                    <h2>Seller:</h2>
                    <h2>BRILLIANT EXPRESSIONS </h2>
                    <p>METALL COLOR:</p>
                    <div
                        style={{height: "30px", width: "30px", borderRadius: "50px", backgroundColor: "#FBBC04"}}>
                    </div>
                    <p style={{textAlign: "center"}}>(!) FINENESS: {FINENESS}</p>
                    <Sizes/>
                    <Weights/>
                    <div style={{display: "flex", flexDirection: "row", gap: "15px"}}>
                        <p style={{fontWeight: "bold", fontSize: "30px", color: "#1D3865"}}> {NEWPRICES} </p>
                        <p style={{
                            fontWeight: "bold",
                            fontSize: "22px",
                            color: "#C7C7C7",
                            textDecoration: "line-through"
                        }}> {OLDPRICES}</p>
                    </div>
                    <button disabled={!COUNT} style={{
                        // backgroundColor: "#1D3865",
                        // color: "white",
                        // height: "60px",
                        // width: "250px",
                        // fontSize: "18px"
                    }}>ADD TO CART
                    </button>
                    <div style={{maxWidth: "550px"}}>
                        <p>DESCRIPTION:</p>
                        <span>
                                This vertical crescent moon diamond pendant
                                is an fashionable and gorgeous piece of jewelry.
                                The celestial necklace is perfect accompanyment to
                                any outfit and makes a great gift. With diamond accents
                                on a 925 sterling silver 18" chain this necklace is
                                custom made to sparkle for the perfect present for a
                                friend, daughter, partner, or self.
                            </span>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default ProductInformation;