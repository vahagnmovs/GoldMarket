import React, {useRef, useState} from 'react';
import heart from 'src/style/Icons/heart.png';
import {useAppSelector} from '../../../../hooks/redux-hooks';
import {ProductsTypes} from '../../../../data/products';
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

const WishList = () => {
	const [isOpenWishList, setIsOpenWishList] = useState(false);
	const liked = useAppSelector(state => state.users.wishList);
	const ref = useRef<null>(null);

	const toggleIsOpenWishList = () => {
		setIsOpenWishList(!isOpenWishList)
	}
	useOnClickOutside(ref, () => setIsOpenWishList(false));


	return (<>
			<li className={'wishlist_content flex align-center'} ref={ref} onClick={toggleIsOpenWishList}>
				<span>WISHLIST</span>
				<img className={'icon_favorite'} src={heart} alt="icon_favorite"/>
				<span>({liked.length})</span>
			</li>
			{
				isOpenWishList
				&&
				<div ref={ref}>
					{
						liked.length
							?
							liked.map((product: ProductsTypes) => <div key={product.productID}>{product.name}</div>)
							:
							<span>Looks like you are not watching any items yet.</span>
					}
				</div>
			}
		</>

	);
};

export default WishList;
