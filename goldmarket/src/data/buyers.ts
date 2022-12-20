import randomID from 'src/hooks/uuid';
import {products} from './products';
// import type {ProductsTypes} from './products'

const product = products[0];

// type BuyersType = {
//     buyerID: string,
//     firstName: string,
//     lastName: string,
//     email: string,
//     phone: number,
//     whishList: ProductsTypes[],
//     cart: ProductsTypes[],
// }

const buyers = [
	{
		buyerID: randomID(),
		firstName: 'Vahagn',
		lastName: 'Movsesyan',
		email: 'vahagnmovs@gmail.com',
		phone: 37443999988,
		whishList: [
			product,
		],
		// whishList: [
		//     {
		//         productID: productBadge.productID,
		//         name: productBadge.name,
		//         sellerID: productBadge.sellerID,
		//         discount: productBadge.discount,
		//         prices: {
		//             oldPrice: productBadge.prices.oldPrice,
		//             currentPrice: productBadge.prices.currentPrice,
		//         },
		//     },
		// ],
		cart: [
			product
		],
		// cart: {
		//     productID: productBadge.productID,
		//     name: productBadge.name,
		//     sellerID: productBadge.sellerID,
		//     discount: productBadge.discount,
		//     code: productBadge.code,
		//     size: productBadge.size,
		//     prices: {
		//         oldPrice: productBadge.prices.oldPrice,
		//         currentPrice: productBadge.prices.currentPrice,
		//     },
		// },
	},
];

export default buyers;