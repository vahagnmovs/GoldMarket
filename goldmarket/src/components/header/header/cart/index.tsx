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
			<li className={'cart_content flex align-center'} onClick={toggleIsShowCart}>
				<span>CART</span>
				<img className={'icon_card'} src={basket} alt='icon_card'/>
				<span>({cart.length})</span>
			</li>
			{
				isShowCarts
					&&
				<div>
					{
						cart.length
							?
							cart.map((product: ProductsTypes) => <div key={product.productID} ref={ref}>{product.name}</div>)
							:
							<span ref={ref}>Looks like you are not watching any items yet.</span>
					}
				</div>

			}
		</>
	);
};

export default Cart;
