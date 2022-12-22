import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';


interface IProductProps {
	product: {
		id: number
		photo: string
		name: string
		category: string
		code: string
		price: string
	}
}

const ProductItem: React.FC<IProductProps> = ({ product: { id, photo, name, category, code, price } }) => {

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/products/${id}`);
	};

	const handleEditNavigate = (event: any) => {
		event.stopPropagation();
		navigate(`/product/${id}/editproduct`);
	};


	return (
		<div className='productItem' onClick={handleNavigate}>

			<div> <img className='productItemPhoto' src={photo} /> </div>
			<div className='productItemPhoto'> {name} </div>
			<div> {category} </div>
			<div> {code} </div>
			<div> {price} </div>

			<div className='details'>
				<button onClick={handleEditNavigate}>✓</button>
				<button>X</button>
				<button> DETAILS </button>
			</div>

		</div>
	);
};

export default ProductItem;