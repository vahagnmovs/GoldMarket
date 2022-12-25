import React, { useState } from 'react';
import Header from 'src/components/header/header';
import Dashboard from '../dashboard';
import DeliveryAddress from '../deliveryAddress';
import ModalInput from '../modall';

// FIXME: hanel datan erb irakan datan unenanq

export const data = {
	id: '1',
	name: 'VAHAGN',
	surname: 'MOVSESYAN',
	city: 'P4332 Claymont',
	region: 'DE 19703-3538',
	country: 'United States',
	email: 'goldmarket@gmail.com',
	phoneNumber: '(302)xxxxx67',
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
};

const DeliveryAddressList = () => {
	const [modal, setModall] = useState(false);
	const [state, setState] = useState(data);
	const [address, setAddress] = useState(initialState);



	const toggleModal = () => {
		setModall(!modal);
	};

	if(modal) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}



	const handleNewAddress = () => {
		setModall(!modal);
	};

	const handleDelete = (id: string) => {
		const newStart = state.address.filter(item => item.addressId !== id);
		setState({ ...state, address: newStart });
	};

	const handleEdit = (addressId: string) => {
		const newStart = state.address.find(item => item.addressId === addressId);
		handleNewAddress();
		if (newStart?.addressId) {
			setAddress({
				addressId: newStart.addressId,
				streetAddress: newStart.streetAddress,
				streetAddressOptional: newStart.streetAddressOptional,
				phoneNumber: newStart.phoneNumber,
				zipCode: newStart.zipCode
			});
		};
	};

	const handleOnCange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		setAddress({ ...address, [name]: value });
	};

	const handleSave = () => {
		if (address.streetAddress.trim()) {
			state.address.push({
				...data.address[0],
				addressId: `${Math.random()}`,
				streetAddress: address.streetAddress,
				streetAddressOptional: address.streetAddressOptional,
				phoneNumber: address.phoneNumber,
				zipCode: address.zipCode
			});
		};
		setAddress(initialState);
		setModall(false);
		handleDelete(address.addressId);
	};

	return (
		<>
			<Header />
			<div className='dash'>
				<Dashboard />
			</div>
			<div className='container'>
				<div className={'delivery_button flex justify-between'}>
					<h3>Delivery Address</h3>
					<button onClick={handleNewAddress}>+ ADD NEW ADDRESS</button>
				</div>

<div className={'flex justify-between'}>
	{state.address.map(item => <DeliveryAddress city={state.city}
												name={state.name} region={state.region} surname={state.surname}
												country={state.country} handleEdit={handleEdit} handleDelete={handleDelete}
												radio={'radio'} key={item.addressId} {...item} />)}
</div>


			</div>
			{modal &&


				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content  modal-content_title">
						<p>ADD NEW ADDRESS</p>
						<div className={'modal_title2 flex justify-between '}>
							<div>
								<div className={'armenia  flex align-center'}>
									<h1>ARMENIA</h1>
								</div>

								<ModalInput handleOnCange={handleOnCange} title={'STREET ADDRESS'} inputValue={address.streetAddress} name={'streetAddress'} />
								<ModalInput handleOnCange={handleOnCange} title={'ZIP CODE'} inputValue={address.zipCode} name={'zipCode'} />
							</div>
							<div>
								<div  className={'armenia flex align-center '}>
									<h1>YEREVAN</h1>

								</div>
								<ModalInput handleOnCange={handleOnCange} title={'STREET ADDRESS OPTIONAL'} inputValue={address.streetAddressOptional} name={'streetAddressOptional'} />
								<ModalInput handleOnCange={handleOnCange} title={'PHONE NUMBER'} inputValue={address.phoneNumber} name={'phoneNumber'} />
							</div>
						</div>

						<button className={' modal-content_title_button'} onClick={handleSave}>SAVE</button>
						<button className="close-modal" onClick={toggleModal}>X</button>
					</div>

				</div>}

		</>
	);
};

export default DeliveryAddressList;