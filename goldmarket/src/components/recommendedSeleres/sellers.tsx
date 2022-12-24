import React from 'react';
import { DataSeller } from 'src/data/recommendedSellers';

const Sellers = (product: DataSeller) => {
	const { id, name,  images ,sellerLogo } = product;

	return (
		<div className={'recommender_sellers_block'}>
			<div className="list_recommender_jewelry_img">
				<div className={'flex flex-wrap gap_10'}>
					{/*FIXME: key*/}
					{images.map((image) => <img
						key={Math.random()}
						className={'recommender_jewelry'}
						src={image}
						alt=""
					/>
					)}
				</div>
			</div>
			<div className='jewelry_brands flex'>
				<img src={sellerLogo} alt=" brand img" />
				<h4>{name}</h4>
			</div>
		</div>
	);
};

export default Sellers;