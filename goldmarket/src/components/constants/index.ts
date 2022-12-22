
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
		{ PUBLISH: ['yes', 'no'] },
		{ SIZE: [13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18] }
	],
	WIGHT: '',

	STONE: '',
	CARAT: '',
	PCS: '',
	DIMONDS: [
		{ DIMONDCOLOR: ['L-Z', 'K', 'J', 'H', 'G', 'F', 'E', 'D'] },
		{ CLARITY: ['FL', 'F', 'VVST', 'VVS2', 'VS1', 'VS2', 'SI', 'SI2', 'I1', 'I2', 'I3'] },
		{ CUT: ['ROUND', 'PRINCESS', 'EMERALD', 'CUSHION', 'RADIANT' 
			,'ASSCHER', 'PEAR', 'OVAL', 'HEART', 'MARQUISE'] }

	],

	PRICE: '',
	OLDPRICE: '',
   
	CODE: '', 
};


export const initialPrices = { PRICE: '', OLDPRICE: '' };

export const initialDimonds = {
	DIMONDCOLOR: '',
	CLARITY: '',
	CUT: '',
};


export const initialState = {
	NAME: '',
	DESCRIPTION: '',
	METAL: '',
	FORWHOM: '', 
	COLLECTION: '',
	FINENESS: '',
	COLOR: '',
	PUBLISH: '',
	WIGHT: '',
	SIZE: '',
	STONE: '',
	CARAT: '',
	PCS: '',
	DIMONDS: initialDimonds,
	PRICES: initialPrices,
	CODE: '', 
	IMAGES: []
};







