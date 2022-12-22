import React from 'react';
import heart from 'src/style/Icons/heart.png';

const WishList = () => {
	return (
		<li className={'wishlist_content flex align-center'}>
			<span>WISHLIST</span>
			<img className={'icon_favorite'} src={heart} alt="icon_favorite"/>
			<span>({'askljasm'})</span>
		</li>
	);
};

export default WishList;
