import React, {useState} from 'react';
import heart from 'src/style/Icons/heart.png';
import {useAppSelector} from '../../../../hooks/redux-hooks';
import {ProductsTypes} from '../../../../data/products';

const WishList = () => {
	const [isOpenWishList, setIsOpenWishList] = useState(false);
	const liked = useAppSelector(state => state.users.wishList);

	const toggleIsOpenWishList = () => {
		setIsOpenWishList(!isOpenWishList)
	}

	return (<>
			<li className={'wishlist_content flex align-center'} onClick={toggleIsOpenWishList}>
				<span>WISHLIST</span>
				<img className={'icon_favorite'} src={heart} alt="icon_favorite"/>
				<span>({liked.length})</span>
			</li>
			{
				isOpenWishList
				&&
				(liked.length
					?
					liked.map((product: ProductsTypes) => <div key={product.productID}>{product.name}</div>)
					:
					<span>Looks like you are not watching any items yet.</span>)
			}

		</>

	);
};

export default WishList;
