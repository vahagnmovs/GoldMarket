import React from 'react';
import {ProductImageSlice} from './productImageSlice';
import {ProductsTypes} from 'src/data/products';
import {ProductSizeWeight} from './productSizeWeight';
import {Description} from './description';
import  heart from 'src/style/Icons/heart.png';
import {ProductColor} from './productColor';
import {ProductContactThe} from './productContactThe';
import {ProductCenaButton} from './productCenaButton';
import {SellerInfo} from './sellerInfo';
import  frame from 'src/style/Icons/Frame.png'

interface AboutPageProps {
    productInformation: ProductsTypes
}

const AboutPage = ({productInformation}: AboutPageProps) => {
	const {name, images, size, weight} = productInformation;
	console.log(images, "bfndmievrbhenw");
	
	return (
		<div className={'about-page'} >
			<div className={'left_page_title'}>
				<h1>  Aquamarine and 1/4 ct. tw. Diamond Ring in 10K Rose Gold</h1>
				<div className={'left_page flex justify-between'}>
					<div className={'left_page_icon_heart  flex align-center'}>
						<img src={heart}/>
						<span>Add to Watchlist</span>
					</div>
					<span>Product code: {name}</span>
				</div>

			</div>
			<div className={'centers_product flex justify-between '}>
				<ProductImageSlice images={images}/>
				<div className={'about_page_left'}>
					<SellerInfo/>
					<ProductColor/>
					<ProductSizeWeight sizeOrWeight={size} title={'SIZE'}/>
					<ProductSizeWeight sizeOrWeight={weight} title={'WEIGHT'}/>
					<ProductContactThe/>
					<ProductCenaButton/>
				</div>
			</div>
		</div>


	);
};
export default AboutPage;