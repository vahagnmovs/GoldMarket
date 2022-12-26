import React, {useState} from 'react';

type TProps = {
    name: string
    handleBoolean: (e: any) => void
}

const PublishSelecStoneBollean = ({ name, handleBoolean }: TProps) => {

	return (
		<div className={'flex dir-col add_product_input'}>
			<label>{name.toUpperCase()}</label>
			<select name={name} onChange={handleBoolean}>
				<option disabled selected>{name}</option>
				<option value={'yes'}>yes</option>
				<option value={'no'}>no</option>
			</select>
		</div>
	);
};

export default PublishSelecStoneBollean;

