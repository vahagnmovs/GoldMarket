import React, {useRef, useState} from 'react';
import basket from 'src/style/Icons/basket.png';
import {useAppSelector} from '../../../../hooks/redux-hooks';
import {ProductsTypes} from '../../../../data/products';
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

const Cart = () => {
	const cart = useAppSelector(state => state.users.cart);
	const [isShowCarts, setIsShowCarts] = useState(false);
	const ref = useRef<null>(null);


	const toggleIsShowCart = () => {
		setIsShowCarts(!isShowCarts)
	}
	useOnClickOutside(ref, () => setIsShowCarts(false));

	return (
		<>
			<li className={'cart_content flex align-center'} ref={ref} onClick={toggleIsShowCart}>
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
