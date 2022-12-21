import React from 'react';
import { products } from 'src/data/products';
import ProductBadge from '../productBadge';
import banner1 from 'src/style/img/banner_best.png';
import 'src/style/components/_bestSales.scss';
// import {useAppSelector} from "src/hooks/redux-hooks";


const bestSaleProducts = products.filter(product => product.bestSales >= 8 );
if (bestSaleProducts.length > 6) {
	bestSaleProducts.length = 6;
}

const BestSales = () => {
	// const products = useAppSelector(state => state.products)

	return (
		<div className="bg_grey">
			<div className="container">
				<div className="collection flex dir-col">
					<h3>Best sales</h3>
					<div className="badge_collection flex flex-wrap">
						<img src={banner1} alt="banner1" className={'bestSalesBanner'} />
						{
							bestSaleProducts.map(product => <ProductBadge key={product.productID} {...product} />)
						}
					</div>
					<button
						// onClick={}
					>EXPLORE ALL BEST SALES </button>
				</div>
			</div>
		</div>

	);
};

export default BestSales;

