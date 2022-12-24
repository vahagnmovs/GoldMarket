import jewellery from 'src/style/Icons/jewellery.png';

import akanjox_01 from 'src/style/recomendedSellersProductImages/akanjox (2).png'
import akanjox_02 from 'src/style/recomendedSellersProductImages/akanjox (1).png'
import akanjox_03 from 'src/style/recomendedSellersProductImages/akanjox (3).png'
import akanjox_04 from 'src/style/recomendedSellersProductImages/akanjox (4).png'

import akanjox_11 from 'src/style/recomendedSellersProductImages/akanjox3 (7).png'

import braslet_01 from 'src/style/recomendedSellersProductImages/braslet (2).png'

import braslet_11 from 'src/style/recomendedSellersProductImages/braslet1 (3).png'

import braslet_22 from 'src/style/recomendedSellersProductImages/braslet2 (1).png'

import cep from 'src/style/recomendedSellersProductImages/cep (2).png'
import ring from 'src/style/recomendedSellersProductImages/ring (1).png'

import kannanci_vznoc from 'src/style/recomendedSellersProductImages/kananci_vznoc (3).jpg'
import man_ring_gold from 'src/style/recomendedSellersProductImages/man_ring_gold (1).jpg'
import man_ring_gold1 from 'src/style/recomendedSellersProductImages/man_ring_gold (2).jpg'
import man_ring_gold2 from 'src/style/recomendedSellersProductImages/man_ring_gold (3).jpg'
import man_ring_gold3 from 'src/style/recomendedSellersProductImages/man_ring_gold (4).jpg'


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
			akanjox_01, cep, man_ring_gold, braslet_01, akanjox_02, kannanci_vznoc
		]
	},
	{
		name: 'ZECHANI',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo2,
		images: [
			akanjox_01, cep, man_ring_gold, braslet_01,ring, braslet_11
		]
	},
	{
		name: 'KALATY',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo3,
		images: [
			akanjox_01, cep, man_ring_gold1, braslet_01, akanjox_11, man_ring_gold2
		]
	},
	{
		name: 'Rasia',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo4,
		images: [
			akanjox_01, cep, man_ring_gold, braslet_01, akanjox_11, man_ring_gold2
		]
	},
	{
		name: 'Tashir',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo5,
		images: [
			akanjox_01, cep, man_ring_gold, braslet_01, akanjox_11, braslet_11
		]
	},
	{
		name: 'Gold jewelery',
		id: Math.random(),
		title: 'jewellery',
		sellerLogo: logo6,
		images: [
			akanjox_01, cep, man_ring_gold, braslet_01, akanjox_11, braslet_11
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