import {configureStore} from '@reduxjs/toolkit';
import userReducer from 'src/store/users/usersSlice';
import sellerReducer from 'src/store/sellers/sellerSlice';
import productReducer from 'src/store/products/productSlice';

export const store = configureStore({
	reducer: {
		products: productReducer,
		users: userReducer,
		seller: sellerReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>