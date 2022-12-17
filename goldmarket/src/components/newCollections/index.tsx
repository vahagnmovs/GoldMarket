import React from "react";
// import {useAppSelector} from "src/hooks/redux-hooks";

import {products} from "src/data/products";
import ProductBadge from "../productBadge";

const newProducts = products.filter(product => product.newProduct)
if (newProducts.length > 8) {
    newProducts.length = 8
}

const Collections = () => {
    // const products = useAppSelector(state => state.products)


    return (
        <div>
            <h3>New Collection</h3>
            {
                newProducts.map(product => <ProductBadge {...product} />)
            }
            <button
                // onClick={}
            >EXPLORE ALL NEW COLLECTIONS {">"}</button>
        </div>
    );
};

export default Collections;