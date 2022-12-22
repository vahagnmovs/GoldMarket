import React from 'react';
import {products} from '../../data/products';
import AboutPage from './aboutProduct';
import SlideCarousel from './slideCarousel';
import Contacts from './contacts';
import {Description} from './aboutProduct/description';
import MostViewed from '../mostViewed';

const ProductPage = () => {
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
			<MostViewed/>
			<MostViewed/>

		</div>



	);
};

export default ProductPage;