import React from 'react';
import trash from 'src/style/Icons/trash.svg';
type TDeliveryAddress = {
	addressId: string;
	city: string;
	name: string;
	radio: string;
	region: string;
	surname: string;
	country: string;
	phoneNumber: string;
	handleEdit: (addressId: string) => void;
	handleDelete: (addressId: string) => void;

}

const DeliveryAddress = ({
	addressId,
	city,
	name,
	radio,
	region,
	surname,
	country,
	handleEdit,
	phoneNumber,
	handleDelete }: TDeliveryAddress) => {

	return (
		<div id={addressId}>
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
			<button onClick={()=> handleEdit(addressId)}>EDIT ADDRESS</button>
			<button onClick={() => handleDelete(addressId)}>
				<img src={trash} alt="trash" /></button>
		</div>
	);
};

export default DeliveryAddress;