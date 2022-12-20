import React, { useState } from 'react';
import { ProductsTypes } from 'src/data/products';
// FIXME:
// import {useAppSelector} from "src/hooks/redux-hooks";

const Product = (props: ProductsTypes) => {
	// FIXME:
	// const users = useAppSelector(state => state.seller)
	const { name, productID, discount, newProduct, images, prices, sellerID } = props;
	const [lovedFlag, setLovedFlag] = useState(false);
	// FIXME:
	// const user = users.find(user => user.id === sellerID)

	const toggleLoved = () => {
		setLovedFlag(!lovedFlag);
		// FIXME:
		// dispatch(addToWishList(productID))
	};

	return (
		<div className="badge_item">
			<div className="relative">
				<img src={images[0]} alt="list_item" />
				<div className="badge_item_top flex  absolute">
					{newProduct ? <span className="new">NEW</span> : <span></span>}
					{discount ? <span className="discount">-{discount}%</span> : <span></span>}
					{/*FIXME: ADD TOGGLE AND SRC*/}
					<img
						src={lovedFlag ? '' : ''}
						alt=""
						onClick={toggleLoved}
					/>
				</div>
			</div>

			<div className="list_content">
				<div className="flex justify-between">
					<div>
						<span className="currentPrice">{prices.currentPrice}$</span>
						<span className="oldPrice">{prices.oldPrice}$</span>
					</div>
					<div>
						{/*FIXME: after having norm seller data will change this to normal seller name*/}
						{/*user.name*/}
						{sellerID.split('-')[0]}
					</div>
				</div>
				<p>{name}</p>
			</div>
		</div>
	);
};

export default Product;