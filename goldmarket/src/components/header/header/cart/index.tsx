import React from 'react';
import basket from 'src/style/Icons/basket.png';

const Cart = () => {
	return (
		<li className={'cart_content flex align-center'}>
			<span>CART</span>
			<img className={'icon_card'} src={basket} alt="icon_card"/>
			<span>(0)</span>
		</li>
	);
};

export default Cart;
