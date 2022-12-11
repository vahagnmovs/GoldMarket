import randomID from "./UUID";
import {products} from './products';
// import type {ProductsTypes} from './products'

const product = products[0];

// type BuyersType = {
//     buyerID: string,
//     firstName: string,
//     lastName: string,
//     email: string,
//     phone: number,
//     password: string,
//     whishList: ProductsTypes[],
//     cart: ProductsTypes[],
// }

const buyers = [
    {
        buyerID: randomID(),
        firstName: "Vahagn",
        lastName: "Movsesyan",
        email: "vahagnmovs@gmail.com",
        phone: 37443999988,
        password: "123456",
        whishList: [
            product,
        ],
        // whishList: [
        //     {
        //         productID: product.productID,
        //         name: product.name,
        //         sellerID: product.sellerID,
        //         discount: product.discount,
        //         prices: {
        //             oldPrice: product.prices.oldPrice,
        //             currentPrice: product.prices.currentPrice,
        //         },
        //     },
        // ],
        cart: [
            product
        ],
        // cart: {
        //     productID: product.productID,
        //     name: product.name,
        //     sellerID: product.sellerID,
        //     discount: product.discount,
        //     code: product.code,
        //     size: product.size,
        //     prices: {
        //         oldPrice: product.prices.oldPrice,
        //         currentPrice: product.prices.currentPrice,
        //     },
        // },
    },
]

export default buyers;