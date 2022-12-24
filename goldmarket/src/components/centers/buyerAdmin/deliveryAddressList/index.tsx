import React, { useState } from 'react';
import Dashboard from '../dashboard';
import DeliveryAddress from '../deliveryAddress';
import ModalInput from '../modall';

// FIXME: hanel datan erb irakan datan unenanq

const data = [{
	id: `${Math.random()}`,
	name: 'VAHAGN',
	surname: 'MOVSESYAN',
	streetAddress: '950 Ridge RD C25',
	streetAddressOptional: "kejirwnvi3m4644641evr6s4v6",
	city: 'P4332 Claymont',
	region: 'DE 19703-3538',
	country: 'United States',
	phoneNumber: '(302)xxxxx67',
	zipCode: "eijf2ijf"
}];
const initialState = {
	streetAddress: '',
	streetAddressOptional: '',
	phoneNumber: '',
	zipCode: ''
}
const DeliveryAddressList = () => {
	const [modal, setModall] = useState(false)
	const [state, setState] = useState(data)
	const [address, setAddress] = useState(initialState);
	const handleNewAddress = () => {
		setModall(!modal)
	}
	const handleDelete = (id: string) => {
		const newStart = state.filter(item => item.id !== id)
		setState(newStart)
		
	}
	const handleOnCange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name
		const value = event.target.value
		setAddress({ ...address, [name]: value })
	}
	const handlePush = () => {
		state.push({
			...data[0],
			id: `${Math.random()}`,
			streetAddress: address.streetAddress,
			streetAddressOptional: address.streetAddressOptional,
			phoneNumber: address.phoneNumber,
			zipCode: address.zipCode
		})
		setAddress(initialState);
		setModall(false);
	}
	return (
		<div>
			{modal && <div>
				<div>
					<div>
						<p>ARMENIA</p>
					</div>
					<div>
						<p>YEREVAN</p>
					</div>
				</div>
				<ModalInput handleOnCange={handleOnCange} title={'STREET ADDRESS'} inputValue={address.streetAddress} name={'streetAddress'} />
				<ModalInput handleOnCange={handleOnCange} title={'STREET ADDRESS OPTIONAL'} inputValue={address.streetAddressOptional} name={'streetAddressOptional'} />
				<ModalInput handleOnCange={handleOnCange} title={'ZIP CODE'} inputValue={address.zipCode} name={'zipCode'} />
				<ModalInput handleOnCange={handleOnCange} title={'PHONE NUMBER'} inputValue={address.phoneNumber} name={'phoneNumber'} />
				<button onClick={handlePush}>SAVE</button>
			</div>}
			<div>
				<Dashboard title={'Delivery Address'} />
				<button onClick={handleNewAddress}>+ ADD NEW ADDRESS</button>
			</div>
			{state.map(item => <DeliveryAddress handleDelete={handleDelete} radio={'radio'} key={item.streetAddress} {...item} />)}
		</div>
	);
};

export default DeliveryAddressList;