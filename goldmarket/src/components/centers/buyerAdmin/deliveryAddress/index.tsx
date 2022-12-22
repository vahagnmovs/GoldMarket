import React from 'react';
import trash from 'src/style/Icons/trash.svg';
type TDeliveryAddress = {
	id: string;
	name: string;
	lastName: string;
	radio: string;
	claymont: string;
	xx: string;
	yy: string;
}

const DeliveryAddress = ({ id, name, lastName, radio, claymont, xx, yy }: TDeliveryAddress) => {
	return (
		<div>
			<span>MY ADDRESS NAME</span>
			<div>
				<label>MAKE DEFAULT
					<input type="radio" name='radio' />
				</label>
			</div>
			<p>
				<span>{name}</span>
				<span>{lastName}</span>
				<span>{radio}</span>
				<span>{claymont}</span>
				<span>{xx}</span>
				<span>{yy}</span>
			</p>
			<button>EDIT ADDRESS</button>
			<button><img src={trash} alt="trash" /></button>
		</div>
	);
};

export default DeliveryAddress;