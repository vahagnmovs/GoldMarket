import jewellery from 'src/style/Icons/jewellery.png';



//import sellerLogo
import logo1 from 'src/style/logoSeleres/Rectangle 153.png';
import logo2 from 'src/style/logoSeleres/Rectangle 153 (1).png';
import logo3 from 'src/style/logoSeleres/Rectangle 153 (2).png';
import logo4 from 'src/style/logoSeleres/Rectangle 153 (3).png';
import logo5 from 'src/style/logoSeleres/Rectangle 153 (4).png';
import logo6 from 'src/style/logoSeleres/Rectangle 153 (5).png';





export type DataSeller = {
    name: string,
    id: number,
    title: string,
	sellerLogo: string,
    images: string[],
}

export const data = [
	{
		name: 'ALDORO',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo1,
		images: [
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-209_1000x.png?v=1639672135',
			'https://i.etsystatic.com/32927243/r/il/fcfd64/3930198055/il_794xN.3930198055_b70j.jpg',
			'https://i.etsystatic.com/35772438/r/il/6ec144/3958623464/il_794xN.3958623464_g7po.jpg',
			'https://i.etsystatic.com/32927243/r/il/1e7fc6/3933523952/il_794xN.3933523952_1ahg.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-255_8_5ba865bd-7b52-412a-83c1-f7d60e62cd68_1000x.jpg?v=1632990928',
			'https://i.etsystatic.com/32927243/r/il/553d39/3951840882/il_794xN.3951840882_nenl.jpg',
		]
	},
	{
		name: 'ZECHANI',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo2,
		images: [
			'https://i.etsystatic.com/25321911/r/il/9bfaaa/3704506465/il_794xN.3704506465_4aa9.jpg',
			'https://i.etsystatic.com/32927243/r/il/da8726/3882709648/il_794xN.3882709648_j2zt.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-210_1000x.png?v=1659969489',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-219_2_1000x.jpg?v=1639656683',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-209_1000x.png?v=1639672135',
			'https://i.etsystatic.com/35772438/r/il/a3875b/4136744847/il_794xN.4136744847_lq0a.jpg',
		]
	},
	{
		name: 'KALATY',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo3,
		images: [
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-219_0_1000x.jpg?v=1639656683',
			'https://i.etsystatic.com/32927243/r/il/8e1a36/3933524260/il_794xN.3933524260_gfw2.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/CO01-233-U_2_1000x.jpg?v=1639729154',
			'https://i.etsystatic.com/25321911/r/il/0b4ace/3704506423/il_794xN.3704506423_q0o2.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-210_3_1000x.jpg?v=1659969489',
			'https://i.etsystatic.com/32927243/r/il/493bc3/3882708952/il_794xN.3882708952_lh0b.jpg',
		]
	},
	{
		name: 'BRILLIANT EXPRESSIONS ',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo4,
		images: [
			'https://i.etsystatic.com/32927243/r/il/8883d6/4338914849/il_794xN.4338914849_ispa.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/CO01-233-U_0_1000x.jpg?v=1639729154',
			'https://i.etsystatic.com/32927243/r/il/493bc3/3882708952/il_794xN.3882708952_lh0b.jpg',
			'https://i.etsystatic.com/32927243/r/il/13702d/3980975855/il_794xN.3980975855_mbeu.jpg',
			'https://i.etsystatic.com/25321911/r/il/46e864/3656891654/il_794xN.3656891654_49cb.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-210-U_alt1_1000x.jpg?v=1659969489',
		]
	},
	{
		name: 'LE VIAN',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo5,
		images: [
			'https://cdn.shopify.com/s/files/1/2803/4000/products/CO01-233-U_2_1000x.jpg?v=1639729154',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-219_4_1000x.png?v=1639656683',
			'https://i.etsystatic.com/25321911/r/il/d34efa/3656891626/il_794xN.3656891626_f4xi.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-210_1_1000x.jpg?v=1659969489\n',
			'https://i.etsystatic.com/32927243/r/il/09e11d/3980974917/il_794xN.3980974917_s779.jpg',
			'https://i.etsystatic.com/32927243/r/il/553d39/3951840882/il_794xN.3951840882_nenl.jpg',
		]
	},
	{
		name: 'BEVERLEY K.',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo6,
		images: [
			'https://i.etsystatic.com/32927243/r/il/eb6370/4291576936/il_794xN.4291576936_i6bi.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/CO01-233-U_0_1000x.jpg',
			'https://i.etsystatic.com/32927243/r/il/5ae42b/3882710258/il_794xN.3882710258_ozrl.jpg',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-209_1000x.png?v=1639672135',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-219_5_1000x.jpg?v=1632988042',
			'https://cdn.shopify.com/s/files/1/2803/4000/products/AN01-209_2_1000x.jpg?v=1639672135',
		]
	},
	{
		name: 'Gold jewelery',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: "",
		images: [
			jewellery, jewellery,jewellery, jewellery,jewellery,
		]
	},
	{
		name: 'Gold',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: "",
		images: [
			jewellery, jewellery,jewellery, jewellery,jewellery,
		]
	},
	{
		name: 'Vernisaj ',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: "",
		images: [
			jewellery, jewellery,jewellery, jewellery,jewellery,
		]
	},
	{
		name: 'Ararat',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: "",
		images: [
			jewellery, jewellery,jewellery, jewellery,jewellery,
		]
	},
];