import {createSlice} from '@reduxjs/toolkit';
import {ProductsTypes} from 'src/data/products';

type TInitialState = {
    products: ProductsTypes[];
}

const initialState: TInitialState  = {
	products: []
};

const productSlice = createSlice({
	name: 'sellers',
	initialState,
	reducers: {
		addProduct(state, action) {
			state.products.push(action.payload);
		},
		removeProduct(state, action) {
			state.products = state.products.filter(product => product.productID !== action.payload);
		},
		editProduct(state, action) {
			state.products = state.products.map(product => {
				if (product.productID === action.payload.id) {
					return {
						...action.payload
					};
				}
				return product;
			});
		},
	}
});

export const {addProduct, removeProduct, editProduct} = productSlice.actions;
export default productSlice.reducer;
