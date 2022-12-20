import React from 'react';
import { TDataProps } from 'src/components/centers/types';
import { useNavigate } from 'react-router-dom';

const DrawMapOrShoppingCenters = ({ id, title, img }: TDataProps) => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(`/shoppingcenters/${title}&${id}`);
	};
	return (
		<div id={id} className="product" onClick={handleNavigate}>
			<img src={img} alt="Nkar" />
			<div className={'img-title  text-center'}>
				<h4>{title}</h4>
			</div>
		</div>
	);
};
export default DrawMapOrShoppingCenters;