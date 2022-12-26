import randomID from "src/hooks/uuid";
 

export type PriceTypes = {
   oldPrice: number | string,
   price: number | string,
};

export type DiamondTypes = {
   carat: number | string,
   pcs: number | string,
   diamondColor: string,
   clarity: string,
   cut: string,
};

export type ImagesType = {
   src: string,
   id: number | string
}


export type ProductsTypes = {
   productID: string,
   name: string,
   sellerID: string,
   metal: string,
   color: string,
   discount: number | string,
   code: string,
   size: number[],
   prices: PriceTypes,
   description: string
   forWhom: string,
   count: number | string,
   publish: boolean,
   fineness: number,
   weight: number[] | string[],
   stone: boolean,
   diamond: DiamondTypes,
   images: ImagesType[],
   collection: string,
   bestSales: number
};


export const products: ProductsTypes[] = [
  {
     productID: '1',
     name: 'Graziella ring',
     sellerID: randomID(),
     color: 'yellow',
     discount: 20,
     metal: 'GOLD',
     forWhom: 'men',
     collection: 'Rings',
     count: 1,
     code: 'VG001',
     size: [14.5, 15.5, 16, 17],
     publish: true,
     fineness: 585,
     weight: [6, 6.5, 7.5],
     stone: true,
     diamond: {
        carat: 0.2,
        pcs: 5,
        diamondColor: 'H',
        clarity: 'VVS2',
        cut: 'ROUND',
     },
     prices: {
        oldPrice: 800,
        price: 625,
     },
     description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
     images: [
        { id: Math.random(), src: '/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg' },
        { id: Math.random(), src: '/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg' },
        { id: Math.random(), src: '/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg' },
     ],
     bestSales: 10,
  },
   {
     productID: `2`,
     name: 'Graziella ring',
     description: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
     sellerID: randomID(),
     color: 'YELLOW',
     discount: 20,
     metal: 'GOLD',
     forWhom: 'men',
     collection: 'exooo',
     count: 1,
     code: 'VG001',
     size: [16, 16.5, 17],
     publish: true,
     fineness: 585,
     weight: [6.5, 7.5, 8],
     stone: true,
     diamond: {
        carat: 0.2,
        pcs: 5,
        diamondColor: 'H',
        clarity: 'VS/SI',
        cut: 'ROUND',
     },
     prices: {
        oldPrice: 800,
        price: 625,
     },
     images: [
        { id: Math.random(), src: '/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg' },
        { id: Math.random(), src: '/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg' },
        { id: Math.random(), src: '/dataimages/productimages/PRODUCTS-diamond/ring1/1.jpg' },
     ],
     bestSales: 10,
  }
];



export const product = products.find((e) => e.productID === '1')
