type TInitialDimonds = {
	carat: string;
	diamondColor: string;
	clarity: string;
	cut: string;
	pcs: string;
};

type TInitialPrice = {
	price: string;
	oldPrice: string;
}

type TImagesElements = {
	id: number | string
	src: string
}

type TInitialState = {
	productID: string | number 
	name: string
	sellerID: string | number
	description: string
	metal: string
	forWhom: string
	collection: string
	fineness: string
	bestSales: number | string
	color: string[]
	publish: boolean | undefined
	stone: boolean | undefined
	newProduct: boolean | undefined
	weight: number[] | string[] 
	size:  number[] | string[]
	count: string 
	discount: string
	diamond: TInitialDimonds,
	prices: TInitialPrice,
	code: string,
	//FIXME: image componenti ts -y dzel 
	images: TImagesElements[], 
}



export const product = [
	{   
		id: Math.random(),
		category: 'ENGAGEMENT RINGS',
		name: 'AQUAMARINE AND 1/4 CT.TW.DIMOND RING IN 10K ROZE GOLD2',
		color: 'yellow',
		code: '11847LL',
		price: '1500$',
		weight: '3.13',
		metal: 'GOLD',
		fineness: '585',
		publish: 'IS AVAILABLE',
		origin: 'IMPORTANT',
		forWhom: 'MEN',
		viewed: 105,
		discription: 'text',
		photo: 'https://images.ctfassets.net/ydv6sq0kb5bw/6DdVeAxmaUa6oPotOKPcfI/d4ed432882c00cd38e32681f278c254b/tacky_accessories_thick_chain.jpg?fit=fill&q=75&fm=webp&w=3840&h=3840',
	},
	{   
		id: Math.random(),
		category: 'ENGAGEMENT RINGS',
		name: 'AQUAMARINE AND 1/4 CT.TW.DIMOND RING IN 10K ROZE GOLD2',
		color: 'yellow',
		code: '11847LL',
		price: '1500$',
		weight: '3.13',
		metal: 'GOLD',
		fineness: '585',
		publish: 'IS AVAILABLE',
		origin: 'IMPORTANT',
		forWhom: 'MEN',
		viewed: 105,
		discription: 'text',
		photo: 'https://images.ctfassets.net/ydv6sq0kb5bw/6DdVeAxmaUa6oPotOKPcfI/d4ed432882c00cd38e32681f278c254b/tacky_accessories_thick_chain.jpg?fit=fill&q=75&fm=webp&w=3840&h=3840',
	}
];

export const filters = {

	firstCategory: [
		{ metal: ['gold', 'silver'] },
		{ forWhom: ['women', 'men', 'children'] },
		{ collection: ['Bracelets', 'Rings', 'Wdding rings', 'Sets', 'Pendants', 'Earrings', 
			'Chain', 'Necklaces', 'Engagement Rings', 'Crosses', 'Other'] }
	],
	productDetals: [
		{ fineness: [333, 375, 416, 585, 750, 875, 900, 916, 958, 999] },
	],
	dimonds: [
		{ diamondColor: ['L-Z', 'K', 'J', 'H', 'G', 'F', 'E', 'D'] },
		{ clarity: ['FL', 'F', 'VVST', 'VVS2', 'VS1', 'VS2', 'SI', 'SI2', 'I1', 'I2', 'I3'] },
		{ cut: ['ROUND', 'PRINCESS', 'EMERALD', 'CUSHION', 'RADIANT' 
			,'ASSCHER', 'PEAR', 'OVAL', 'HEART', 'MARQUISE'] },
	],
};

export const initialPrices: TInitialPrice = { price: '', oldPrice: '' };

export const initialDimonds: TInitialDimonds = {
	carat: '',
	diamondColor: '',
	clarity: '',
	cut: '',
	pcs: '',
};

export const initialState: TInitialState = {
	// FIXME: dzel id
	productID: Math.random(),  
	name: '',
	sellerID: Math.random(),
	description: '',
	metal: '',  // esi chem dzel
	forWhom: '', 
	collection: '',
	fineness: '',
	bestSales: '',
	color: ['yellow', 'white', 'red', 'rose gold'] ,
	publish: false,
	stone: false,
	newProduct: false,
	weight: [], 
	size: [],
	count: '',  
	discount: '',
	diamond: initialDimonds,
	prices: initialPrices,
	code: '', 
	images: []
};


export const weightListData: string[] | number[] = [5, 5.5, 6, 6.5, 7.5, 8, 8.5];
export const sizeListData: string[] | number[] = [14, 14.5, 15, 15.5, 16, 16.5, 17];

//////////

export const initialMetal: string[] = ['gold', 'silver'];
export const initialForWhom: string[] = ['women', 'men', 'children'];
export const initialCollection: string[] = ['Bracelets', 'Rings', 'Wdding rings', 'Sets', 'Pendants', 'Earrings', 
			                                	   'Chain', 'Necklaces', 'Engagement Rings', 'Crosses', 'Other'];

export const initialPublish = ['yes', 'no']															

export const initialFinenes: string[] | number[] = [333, 375, 416, 585, 750, 875, 900, 916, 958, 999];
export const initialColor: string[] = ['yellow', 'white', 'red', 'rose gold'];

export const initialDiamondColor: string[] | undefined = ['L-Z', 'K', 'J', 'H', 'G', 'F', 'E', 'D'];
export const initialClarity: string[] = ['FL', 'F', 'VVST', 'VVS2', 'VS1', 'VS2', 'SI', 'SI2', 'I1', 'I2', 'I3'];
export const initialCut: string[] =['ROUND', 'PRINCESS', 'EMERALD', 'CUSHION', 'RADIANT', 'ASSCHER', 'PEAR', 'OVAL', 'HEART', 'MARQUISE'];