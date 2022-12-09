import React from "react";
import Product from "../product/product";

const MostViewed = () => {
    return (
        <div>
            <div>
                <h3>Most Viewed</h3>
                <button>Dzax</button>
                <button>Aj</button>
            </div>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default MostViewed;