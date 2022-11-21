import React from 'react';
import {Link} from "react-router-dom";

const ShoppingRegions = () => {
    return (
        <div>
            <div>this is shoppingregions</div>
            <Link to = {'/shoppingregions/cities'}>Cities</Link>
        </div>
    );
};

export default ShoppingRegions;