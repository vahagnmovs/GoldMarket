import React from 'react';

import { useNavigate } from 'react-router-dom';
import { product } from 'src/components/constants';
import  ProductItem from './product_item';

const Products: React.FC = () => {

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/products/addproduct');
	};
    
	return (
		<div>
			<div className='productNav'>
				<h1>Products</h1>
				<input type='text' placeholder='SEARCH PRODUCT' />
				<button onClick={handleNavigate}>+ ADD PRODUCT</button> 
			</div>
			<hr></hr>

			<div className='productMenu'>
				<span> PHOTO </span> 
				<span> NAME </span> 
				<span> CATEGORY ↓ </span> 
				<span> CODE </span> 
				<span> PRICE </span> 
				<span> STATUS </span> 
				<span> ACTION </span> 
			</div>
			<hr></hr>

			<div className='productList'>
				{product.map((pr) => {  
					return <ProductItem key={pr.id} product={pr} />; 
				})}
			</div>
		</div>
	);
};


export default Products;