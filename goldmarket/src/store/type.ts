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
    newProduct: boolean
}
