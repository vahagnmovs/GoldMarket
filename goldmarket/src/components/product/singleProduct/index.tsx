import React, { useState, useEffect } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'src/firebase';

import { useNavigate, useParams } from 'react-router-dom';
import { ProductsTypes } from 'src/data/products';


export const SingleProduct: React.FC = () => {

	//TODO: productID (URL.searchParams)

	// const searchParams = new URLSearchParams(window.location.href);
	// const productID = searchParams.get('sellerID')

	const productID = 'c01628c7-6aa6-4089-9e8e-df8e4e16aed3';
	const [unicProduct, setUnicProduct] = useState<any>({});

	const collRef = collection(db, "products")
	const q = query(collRef, where("productID", "==", productID));

	useEffect(() => {
		getDocs(q)
		.then(res => {
			// FIXME: ProductsTypes
			let currentProduct: ProductsTypes | {} = {}
			console.log(currentProduct, 'currentProduct')
			res.forEach(rs => {
				currentProduct = {...rs.data()}
			})
			setUnicProduct(currentProduct);
		})
	}, []);

	const navigate = useNavigate();



	console.log(unicProduct, 'unicProduct');
	
	

	return (
		<div >
			<h2> Product Detals </h2>
			{
					unicProduct.name && 
				<>
					<div> 
						{ 
						 unicProduct.images.length !== 0 && 
						 <>
						   <img className='productItemPhoto' src={unicProduct.images[0].src} /> 
							<button onClick={() => navigate(`/product/${unicProduct.product}/editproduct`)}>✓</button>
						   <button>X</button>
						 </>
						 }
					</div>
			      <ul>

					  <li> <span> CATEGORY: { unicProduct.name } </span> </li>
				     <li> <span> NAME: { unicProduct.name } </span> </li>
				     <li> <span> COLOR: { unicProduct.color.map((e: string) => <span key={e}> { e } </span>) } </span> </li>
				     <li> <span> CODE: { unicProduct.code } </span> </li>
				     <li> <span> PRICE: { unicProduct.prices.price } </span> </li>
					  <li> <span> WEIGHT: { unicProduct.weight } </span> </li>
					  <li> <span> METAL: { unicProduct.metal } </span> </li>
					  <li> <span> FINENESS: { unicProduct.fineness } </span> </li>
					  <li> <span> PUBLISH: { unicProduct.publish } </span> </li>
					  <li> <span> FOR WHOM: { unicProduct.forWhom } </span> </li>
					  <li> <span> DESCRIPTION: { unicProduct.description } </span> </li>

			      </ul>
				</>

			}


		</div>
	);
};

