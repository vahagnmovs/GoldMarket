type TInitialState = {
	ID: string | number 
	NAME: string
	SELLERID: string | number
	DESCRIPTION: string
	METAL: string
	FORWHOM: string
	COLLECTION: string
	FINENESS: string
	COLOR: string
	PUBLISH: boolean | undefined,
	WIEGHT: number[] | string[] 
	SIZE:  number[] | string[]
	COUNT: string 
	DISCOUNT: string
	DIMOND: TInitialDimonds,
	PRICES: TInitialPrice,
	CODE: string,
	//FIXME: image componenti ts -y dzel 
	IMAGES: any, 
}

type TInitialDimonds = {
	SELECTSTONE: boolean | undefined;
	CARAT: string;
	DIMONDCOLOR: string;
	CLARITY: string;
	CUT: string;
	PCS: string;
};

type TInitialPrice = {
	PRICE: string;
	OLDPRICE: string;
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
	nameDescription: [
		{ NAME: '' },
		{ DESCRIPTION: '' },
	],
	firstCategory: [
		{ METAL: ['gold', 'silver'] },
		{ FORWHOM: ['women', 'men', 'children'] },
		{ COLLECTION: ['Bracelets', 'Rings', 'Wdding rings', 'Sets', 'Pendants', 'Earrings', 
			'Chain', 'Necklaces', 'Engagement Rings', 'Crosses', 'Other'] }
	],
	productDetals: [
		{ FINENESS: [333, 375, 416, 585, 750, 875, 900, 916, 958, 999] },
		{ COLOR: ['yellow', 'white', 'red', 'rose gold'] },
	],
	dimonds: [
		{ DIMONDCOLOR: ['L-Z', 'K', 'J', 'H', 'G', 'F', 'E', 'D'] },
		{ CLARITY: ['FL', 'F', 'VVST', 'VVS2', 'VS1', 'VS2', 'SI', 'SI2', 'I1', 'I2', 'I3'] },
		{ CUT: ['ROUND', 'PRINCESS', 'EMERALD', 'CUSHION', 'RADIANT' 
			,'ASSCHER', 'PEAR', 'OVAL', 'HEART', 'MARQUISE'] },
	],
};


export const initialPrices: TInitialPrice = { PRICE: '', OLDPRICE: '' };



export const initialDimonds: TInitialDimonds = {
	SELECTSTONE: undefined,
	CARAT: '',
	DIMONDCOLOR: '',
	CLARITY: '',
	CUT: '',
	PCS: '',
};





export const initialState: TInitialState = {
	// FIXME: dzel id
	ID: Math.random(),  
	NAME: '',
	SELLERID: Math.random(),
	DESCRIPTION: '',
	METAL: '',
	FORWHOM: '', 
	COLLECTION: '',
	FINENESS: '',
	COLOR: '',
	PUBLISH: false,
	WIEGHT: [2, 3, 4, 5, 6, 7, 8], 
	SIZE: [5, 6, 7, 8, 9, 10],
	COUNT: '',  
	DISCOUNT: '',
	DIMOND: initialDimonds,
	PRICES: initialPrices,
	CODE: '', 
	IMAGES: []
};


export const weightListData = [2, 3, 4, 5, 6, 7, 8];
export const sizeListData = [5, 6, 7, 8, 9, 10];





