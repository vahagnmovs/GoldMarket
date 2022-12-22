import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { product } from 'src/components/constants';
import { ProductDetals } from './productDetals';


export const SingleProduct: React.FC = () => {

	const { id }: any = useParams();
	const navigate = useNavigate();

	// any-n dzel, verevy tal type handleProduct-i

	const handleProduct: any = product.reduce((aggr, product) => {
		if (product.id != id) return product; 
		return aggr; 
	}, {});

    
	const { photo, name } = handleProduct;

	return(
		<div >
			<div className='single'>
				<img className='productItemPhoto' src={photo} />
				<div> <span> {name} </span> </div>
				<div> 
					<button onClick={() => navigate(`/product/${id}/editproduct`)}>✓</button>
					<button onClick={() => console.log('Delete this product')}>X</button>    
				</div> 
			</div>


			<ProductDetals product={handleProduct} />
		</div>
	);
};

