import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	email: '',
	token: '',
	id: '',
	firstName: '',
	lastName: '',
	phoneNumber: '',
	wishList: [],
	cart: []
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			console.log(action.payload);
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.phoneNumber = action.payload.phoneNumber;
		},
		removeUser(state) {
			state.email = '';
			state.token = '';
			state.id = '';
		}
	}
});


export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
