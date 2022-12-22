import React from 'react';
import photo from 'src/style/img/banner1.png';
//photo poxel
const SellerInfo = () => {
	return (
		<div className={'product_seller'}>
			<p>Seller:</p>
			<div className={'product_seller_img flex align-center'}>
				<img src={photo} alt=""/>
				<p>BRILLIANT EXPRESSIONS </p>

			</div>
		</div>
	);
};

export {SellerInfo};