import React, {useState} from "react";
import {ProductsTypes} from "src/data/products";
// FIXME:
// import {useAppSelector} from "src/hooks/redux-hooks";

const Product = (props: ProductsTypes) => {
    // FIXME:
    // const users = useAppSelector(state => state.seller)
    const {name, productID, discount, newProduct, images, prices, sellerID} = props
    const [lovedFlag, setLovedFlag] = useState(false);
    // FIXME:
    // const user = users.find(user => user.id === sellerID)

    const toggleLoved = () => {
        setLovedFlag(!lovedFlag)
        // FIXME:
        // dispatch(addToWishList(productID))
    }

    return (
        <div>
            <div>
                <img src={images[0]} alt="product main image"/>
                <div>
                    {newProduct ? <span>NEW</span> : <span></span>}
                    {discount ? <span>-{discount}%</span>: <span></span>}
                    {/*FIXME: ADD TOGGLE AND SRC*/}
                    <img
                        src={lovedFlag ? "" : ""}
                        alt=""
                        onClick={toggleLoved}
                    />
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <span>{prices.currentPrice}$</span>
                        <span>{prices.oldPrice}$</span>
                    </div>
                    <span>
                        {/*FIXME: after having norm seller data will change this to normal seller name*/}
                        {/*user.name*/}
                        {sellerID.split("-")[0]}
                    </span>
                </div>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Product;