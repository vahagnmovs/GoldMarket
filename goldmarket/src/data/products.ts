import randomID from 'src/hooks/uuid';
export type PriceTypes = {
    currentPrice: number,
    oldPrice: number
}

export type DiamondTypes = {
    carat: number,
    pcs: number,
    color: string,
    clarity: string,
    cut: string,
}

export type ProductsTypes = {
    productID: string,
    name: string,
    sellerID: string,
    color: string,
    discount: number,
    code: string,
    size: number[],
    prices: PriceTypes,
    description: string
    material: string,
    forWhom: string,
    count: number,
    publish: boolean,
    fineness: number,
    weight: number[],
    stone: boolean,
    diamond: DiamondTypes,
    images: string[],
    type: string,
    newProduct: boolean,
    bestSales: number
}

const products: ProductsTypes[] = [
	{
		//FIXME: if you want test slider cheng productID "55"
		productID: '55',
		name: 'Graziella ring',
		sellerID: randomID(),
		color: 'YELLOW',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG001',
		size: [14, 14.5, 15, 15.5, 16, 16.5, 17],
		publish: true,
		fineness: 585,
		weight: [5, 5.5, 6, 6.5, 7.5, 8, 8.5],
		stone: true,
		diamond: {
			carat: 0.2,
			pcs: 5,
			color: 'H',
			clarity: 'VS/SI',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 800,
			currentPrice: 625,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/3.jpg',

		],
		newProduct: true,
		bestSales: 10,
	},
	{
		productID: randomID(),
		name: 'Tiffany ring',
		sellerID: randomID(),
		color: 'WHITE',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG002',
		size: [13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18],
		publish: true,
		fineness: 585,
		weight: [3, 3.5, 4, 4.5, 5],
		stone: true,
		diamond: {
			carat: 0.08,
			pcs: 20,
			color: 'J',
			clarity: 'VS1',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 1200,
			currentPrice: 1160,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring2/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring2/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring3/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring4/4.jpg',
		],
		newProduct: true,
		bestSales: 10,
	},
	{
		productID: randomID(),
		name: 'Graziella ring',
		sellerID: randomID(),
		color: 'YELLOW',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG001',
		size: [14, 14.5, 15, 15.5, 16, 16.5, 17],
		publish: true,
		fineness: 585,
		weight: [5, 5.5, 6, 6.5, 7.5, 8, 8.5],
		stone: true,
		diamond: {
			carat: 0.2,
			pcs: 5,
			color: 'H',
			clarity: 'VS/SI',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 800,
			currentPrice: 625,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/4.jpg',
		],
		newProduct: false,
		bestSales: 15,
	},
	{
		productID: randomID(),
		name: 'Tiffany ring',
		sellerID: randomID(),
		color: 'WHITE',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG002',
		size: [13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18],
		publish: true,
		fineness: 585,
		weight: [3, 3.5, 4, 4.5, 5],
		stone: true,
		diamond: {
			carat: 0.08,
			pcs: 20,
			color: 'J',
			clarity: 'VS1',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 1200,
			currentPrice: 1160,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring2/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring2/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring3/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring4/4.jpg',
		],
		newProduct: true,
		bestSales: 8,
	},
	{
		productID: randomID(),
		name: 'Graziella ring',
		sellerID: randomID(),
		color: 'YELLOW',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG001',
		size: [14, 14.5, 15, 15.5, 16, 16.5, 17],
		publish: true,
		fineness: 585,
		weight: [5, 5.5, 6, 6.5, 7.5, 8, 8.5],
		stone: true,
		diamond: {
			carat: 0.2,
			pcs: 5,
			color: 'H',
			clarity: 'VS/SI',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 800,
			currentPrice: 625,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/4.jpg',
		],
		newProduct: true,
		bestSales: 10,
	},
	{
		productID: randomID(),
		name: 'Tiffany ring',
		sellerID: randomID(),
		color: 'WHITE',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG002',
		size: [13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18],
		publish: true,
		fineness: 585,
		weight: [3, 3.5, 4, 4.5, 5],
		stone: true,
		diamond: {
			carat: 0.08,
			pcs: 20,
			color: 'J',
			clarity: 'VS1',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 1200,
			currentPrice: 1160,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring2/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring2/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring3/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring4/4.jpg',
		],
		newProduct: true,
		bestSales: 12,
	},
	{
		productID: randomID(),
		name: 'Graziella ring',
		sellerID: randomID(),
		color: 'YELLOW',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG001',
		size: [14, 14.5, 15, 15.5, 16, 16.5, 17],
		publish: true,
		fineness: 585,
		weight: [5, 5.5, 6, 6.5, 7.5, 8, 8.5],
		stone: true,
		diamond: {
			carat: 0.2,
			pcs: 5,
			color: 'H',
			clarity: 'VS/SI',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 800,
			currentPrice: 625,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/4.jpg',
		],
		newProduct: true,
		bestSales: 1,
	},
	{
		productID: randomID(),
		name: 'Tiffany ring',
		sellerID: randomID(),
		color: 'WHITE',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG002',
		size: [13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18],
		publish: true,
		fineness: 585,
		weight: [3, 3.5, 4, 4.5, 5],
		stone: true,
		diamond: {
			carat: 0.08,
			pcs: 20,
			color: 'J',
			clarity: 'VS1',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 1200,
			currentPrice: 1160,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring2/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring2/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring3/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring4/4.jpg',
		],
		newProduct: true,
		bestSales: 2,
	},
	{
		productID: randomID(),
		name: 'Graziella ring',
		sellerID: randomID(),
		color: 'YELLOW',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG001',
		size: [14, 14.5, 15, 15.5, 16, 16.5, 17],
		publish: true,
		fineness: 585,
		weight: [5, 5.5, 6, 6.5, 7.5, 8, 8.5],
		stone: true,
		diamond: {
			carat: 0.2,
			pcs: 5,
			color: 'H',
			clarity: 'VS/SI',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 800,
			currentPrice: 625,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring1/4.jpg',
		],
		newProduct: false,
		bestSales: 10,
	},
	{
		productID: randomID(),
		name: 'Tiffany ring',
		sellerID: randomID(),
		color: 'WHITE',
		discount: 20,
		material: 'GOLD',
		forWhom: 'WOMEN',
		type: 'RINGS',
		count: 1,
		code: 'VG002',
		size: [13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18],
		publish: true,
		fineness: 585,
		weight: [3, 3.5, 4, 4.5, 5],
		stone: true,
		diamond: {
			carat: 0.08,
			pcs: 20,
			color: 'J',
			clarity: 'VS1',
			cut: 'ROUND',
		},
		prices: {
			oldPrice: 1200,
			currentPrice: 1160,
		},
		description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
		images: [
			'/dataimages/productimages/PRODUCTS-diamond/ring2/1.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/ring2/2.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring3/3.jpg',
			'/dataimages/productimages/PRODUCTS-diamond/Ring4/4.jpg',
		],
		newProduct: true,
		bestSales: 10,
	},
];

export { products };
// export type {Productstypes};