import React, {useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';
import ProductItem from './product_item';

import './css/style.css';
import {collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../firebase";
import {ProductsTypes} from "src/data/products";

const ProductsS: React.FC = () => {
	//TODO: sellerID (URL.searchParams)
	// const searchParams = new URLSearchParams(window.location.href);
	// const sellerID = searchParams.get('sellerID')
	const sellerID = 'A001';

	const [sellerProducts, setSellerProducts] = useState<ProductsTypes[]>([])
	const colRef = collection(db, "products")
	const q = query(colRef, where("sellerID", "==", sellerID));
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/products/addproduct');
	};

	useEffect(() => {
		getDocs(q)
		.then(querySnapshot => {
			const currentSellerProducts: any = [];
			querySnapshot.forEach((doc) => {
				currentSellerProducts.push({...doc.data()})
			});
			setSellerProducts(currentSellerProducts)
		})
	}, [])
   

	console.log(sellerProducts, 'sellerProducts');
	
	return (
		<div>
			<div className='productNav'>
				<h1>Products</h1>
				<input type='text' placeholder='SEARCH PRODUCT'/>
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
				{
					sellerProducts.map((product) => <ProductItem key={product.productID} {...product} />)
				}
			</div>
		</div>
	);
};


export default ProductsS;