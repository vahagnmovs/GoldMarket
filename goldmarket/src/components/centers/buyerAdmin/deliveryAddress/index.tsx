import React from 'react';
import trash from 'src/style/Icons/trash.svg';
type TDeliveryAddress = {
	
	
	radio: string;
	id: string,
	name: string,
	surname: string,
	city: string,
	region: string,
	country: string,
	phoneNumber: string,

	
}

const DeliveryAddress = ({ id, name, surname, radio, city, region, country, phoneNumber }: TDeliveryAddress) => {

	return (
		<div>
			<span>MY ADDRESS NAME</span>
			<div>
				<label>MAKE DEFAULT
					<input type="radio" name={radio} />
				</label>
			</div>
			<p>
				<span>{name}</span>
				<span>{surname}</span>
				<span>{city}</span>
				<span>{region}</span>
				<span>{country}</span>
				<span>{phoneNumber}</span>
			</p>
			<button>EDIT ADDRESS</button>
			<button><img src={trash} alt="trash" /></button>
		</div>
	);
};

export default DeliveryAddress;