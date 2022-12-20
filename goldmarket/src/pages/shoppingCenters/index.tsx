import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const ShoppingCenters = () => {
	return (
		<div>
			{'this is shoppingcenters'}
			<br/>
			<Link to={'/shoppingcenters/products'}>Products</Link>
			<Outlet />
		</div>
	);
};

export default ShoppingCenters;