 import React from 'react';
import {products} from '../../data/products';
import AboutPage from './aboutProduct';
import Contacts from './contacts';
import {Description} from './aboutProduct/description';
import MostViewed from '../mostViewed';

const ProductInfo = () => {
	//TODO: unused staff - remove or comment
	// const { id }  = useParams();
	const testId = '55';
	//FIXME: typeof any check
	const productInfo:any  = products.find(product => product.productID === testId);
	return (
		<div>
			<div className={'page_about'}>
				<AboutPage productInformation={ productInfo } />
			</div>
			<Description infoProduct={productInfo}/>
			<Contacts/>
			<MostViewed title={'Other assortment of the salon'}/>
			<MostViewed title={'Similar Product'}/>
		</div>
	);
};

export default ProductInfo;