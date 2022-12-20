import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	companyName: '',
	id: '',
	token: '',
	address: {
		country: '',
		region: '',
		city: ''
	}
};

const sellerSlice = createSlice({
	name: 'sellers',
	initialState,
	reducers: {
		addSeller(state, action) {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.email = action.payload.email;
			state.phoneNumber = action.payload.phoneNumber;
			state.companyName = action.payload.companyName;
			state.id = action.payload.id;
			state.token = action.payload.token;
			state.address.city = action.payload.city;
			state.address.region = action.payload.region;
			state.address.country = action.payload.country;
		},
		removeSeller(state) {
			state.firstName = '';
		}
	}
});

export const {addSeller, removeSeller} = sellerSlice.actions;
export default sellerSlice.reducer;
