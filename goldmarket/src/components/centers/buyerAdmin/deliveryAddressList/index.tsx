import React, { useState } from 'react';
import Dashboard from '../dashboard';
import DeliveryAddress from '../deliveryAddress';
import ModalInput from '../modall';

// FIXME: hanel datan erb irakan datan unenanq

const data = {
	id: '1',
	name: 'VAHAGN',
	surname: 'MOVSESYAN',
	city: 'P4332 Claymont',
	region: 'DE 19703-3538',
	country: 'United States',
	address: [{
		addressId: `${Math.random()}`,
		streetAddress: '950 Ridge RD C25',
		streetAddressOptional: "kejirwnvi3m4644641evr6s4v6",
		phoneNumber: '(302)xxxxx67',
		zipCode: "eijf2ijf",
	}]
};
const initialState = {
	addressId: '',
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
		setModall(!modal);
	}

	const handleDelete = (id: string) => {
		const newStart = state.address.filter(item => item.addressId !== id)
		setState({ ...state, address: newStart });
	}


	const handleEdit = (addressId: string) => {
		const newStart = state.address.find(item => item.addressId === addressId)
		handleNewAddress();

		if (newStart?.addressId) {
			setAddress({
				addressId: newStart.addressId,
				streetAddress: newStart.streetAddress,
				streetAddressOptional: newStart.streetAddressOptional,
				phoneNumber: newStart.phoneNumber,
				zipCode: newStart.zipCode
			});
		}

	}
	const handleOnCange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name
		const value = event.target.value
		setAddress({ ...address, [name]: value })
	}
	const handleSave = () => {
		if(address.streetAddress.trim()){
			state.address.push({
				...data.address[0],
				addressId: `${Math.random()}`,
				streetAddress: address.streetAddress,
				streetAddressOptional: address.streetAddressOptional,
				phoneNumber: address.phoneNumber,
				zipCode: address.zipCode
			})
		}
		setAddress(initialState);
		setModall(false);
		handleDelete(address.addressId)
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
				<button onClick={handleSave}>SAVE</button>
			</div>}
			<div>
				<Dashboard title={'Delivery Address'} />
				<button onClick={handleNewAddress}>+ ADD NEW ADDRESS</button>
			</div>
			{state.address.map(item => <DeliveryAddress city={state.city}
				name={state.name} region={state.region} surname={state.surname}
				country={state.country} handleEdit={handleEdit} handleDelete={handleDelete}
				radio={'radio'} key={item.addressId} {...item} />)}
		</div>
	);
};

export default DeliveryAddressList;