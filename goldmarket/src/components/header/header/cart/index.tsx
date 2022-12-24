import React, {useState} from 'react';
import basket from 'src/style/Icons/basket.png';
import {useAppSelector} from '../../../../hooks/redux-hooks';
import {ProductsTypes} from '../../../../data/products';

const Cart = () => {
	const cart = useAppSelector(state => state.users.cart);
	const [isShowCarts, setIsShowCarts] = useState(false);

	const toggleIsShowCart = () => {
		setIsShowCarts(!isShowCarts)
	}

	return (
		<>
			<li className={'cart_content flex align-center'} onClick={toggleIsShowCart}>
				<span>CART</span>
				<img className={'icon_card'} src={basket} alt='icon_card'/>
				<span>({cart.length})</span>
			</li>
			{
				isShowCarts
					&&
				(cart.length
					?
					cart.map((product: ProductsTypes) => <div key={product.productID}>{product.name}</div>)
					:
					<span>Looks like you are not watching any items yet.</span>)
			}
		</>
	);
};

export default Cart;
