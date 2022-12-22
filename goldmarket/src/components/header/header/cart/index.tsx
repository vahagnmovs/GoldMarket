import React, {useState} from 'react';
import basket from 'src/style/Icons/basket.png';
import {useAppSelector} from '../../../../hooks/redux-hooks';
import {ProductsTypes} from '../../../../data/products';

const Cart = () => {
	const cart = useAppSelector(state => state.users.cart);
	const [isShowCarts, setIsShowCarts] = useState(true);

	return (
		<>
			{
				isShowCarts
					?
					<li className={'cart_content flex align-center'} onClick={() => setIsShowCarts(false)}>
						<span>CART</span>
						<img className={'icon_card'} src={basket} alt='icon_card'/>
						<span>({cart.length})</span>
					</li>
					:
					cart.map((product: ProductsTypes)=> <div key={product.productID}>{product.name}</div>)
			}
		</>
	);
};

export default Cart;
