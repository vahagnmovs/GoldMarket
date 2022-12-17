import React from "react";
// import {useAppSelector} from "src/hooks/redux-hooks";

import { products } from "src/data/products";
import ProductBadge from "../productBadge";

const newProducts = products.filter(product => product.newProduct)
if (newProducts.length > 8) {
    newProducts.length = 8
}

const Collections = () => {
    // const products = useAppSelector(state => state.products)

    return (
        <div className="bg_grey">
            <div className="container">
                <div className="collection flex dir-col">
                    <h3>New Collection</h3>
                    <div className="badge_collection flex flex-wrap">
                        {
                            newProducts.map(product => <ProductBadge {...product} />)
                        }
                    </div>
                    <button
                    // onClick={}
                    >EXPLORE ALL NEW COLLECTIONS {">"}</button>
                </div>
            </div>
        </div>
    );
};

export default Collections;