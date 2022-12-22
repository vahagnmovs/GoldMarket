import React from 'react';
import Sellers from './sellers';
import { data } from 'src/data/recommendedSellers';
import { Link } from 'react-router-dom';

data.length = 4;

const RecommendSellers = () => {

	// const handleAllBrands = () => {
	//
	// }
	return (
		<div className={'container'}>
			<div className="flex dir-col recommended_sellers">
				<div className="title_recommendedSeleres">
					<h2>Recommended sellers</h2>
					<p>
                        With a long history of fine craftsmanship, Italian gold jewelry from brings sophistication and style to any outfit.
					</p>
				</div>

				<section className={'flex flex-wrap gap_20'}>
					{/*FIXME: check id*/}
					{
						data.map(product => <Sellers key={Math.random()}{...product} />)
					}
				</section>

				<button className={'button_show_all_brands text-center'}
					// onClick={handleAllBrands} NAVIGATE-ov urish ej uxaki
				>
					<Link to={'allBrands'}> ALL BRANDS </Link>
				</button>
			</div>
		</div >
	);
};

export default RecommendSellers;