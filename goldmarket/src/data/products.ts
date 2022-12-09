import randomID from './UUID';

type PriceTypes = {
    currentPrice: number,
    oldPrice: number
}

type ProductsTypes = {
    productID: string,
    name: string,
    sellerID: string,
    discount: number,
    code: string,
    size: number,
    prices: PriceTypes,
    description: string,
}

const products: ProductsTypes[] = [
    {
        productID: randomID(),
        name: 'Graziella ring',
        sellerID: randomID(),
        discount: 20,
        code: 'VG001',
        size: 17,
        prices: {
            oldPrice: 1500,
            currentPrice: 1350,
        },
        description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    }
]

export {products};
export type {ProductsTypes};