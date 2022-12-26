import React from 'react';
import {ProductsTypes} from "src/data/products";

import { useNavigate } from 'react-router-dom';



const ProductItem = ({ productID, images, name, type, code, prices }: ProductsTypes) => {

	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(`/products/${productID}`);
	};

	const handleEditNavigate = (event: any) => {
		event.stopPropagation();
		navigate(`/product/${productID}/editproduct`);
	};



	return (
		<div className='productItem' onClick={handleNavigate}>

			{/* <div> <img className='productItemPhoto' src={images[0].src} /> </div> */}
			<div className='productItemPhoto'> {name} </div>
			<div> {type} </div>
			<div> {code} </div>
			<div> {prices?.currentPrice} </div>

			<div className='details'>
				<button onClick={handleEditNavigate}>✓</button>
				<button>X</button>
				<button> DETAILS </button>
			</div>

		</div>
	);
};

export default ProductItem;