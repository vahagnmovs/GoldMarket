import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav id={'side-bar'}>
            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/shoppingregions'}>ShoppingCenters</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;