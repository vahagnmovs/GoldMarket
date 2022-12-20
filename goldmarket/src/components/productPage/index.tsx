import React from 'react';
import {products} from '../../data/products';
import AboutPage from './aboutProduct';
import SlideCarousel from './slideCarousel';
import Contacts from './contacts';

const ProductPage = () => {
	//TODO: unused staff - remove or comment
	// const { id }  = useParams();
	const testId = '55';
	//FIXME: typeof any check
	const productInfo:any  = products.find(product => product.productID === testId);
	return (
		<>
			<AboutPage productInformation={ productInfo } />
			<Contacts/>
			<SlideCarousel images={ products }/>
		</>
	);
};

export default ProductPage;