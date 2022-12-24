// import payments icons
import visa from 'src/style/Icons/visa.png';
import master from 'src/style/Icons/master.png';
import google_pay from 'src/style/Icons/google-pay.png';
import apple_pay from 'src/style/Icons/apple-pay.png';
import arca from 'src/style/Icons/arca.png';

//import social links
import facebookIcon from 'src/style/Icons/fb.png';
import instagramIcon from 'src/style/Icons/insta.png';
import okIcon from 'src/style/Icons/ok.png';
import telegramIcon from 'src/style/Icons/tg.png';
import vkIcon from 'src/style/Icons/vk.png';
import Redirect from "../components/redirect/redirect";
import React from "react";

export type TGoldCenter = {
    name: string;
    path: string;
}
type TGoldHelp = {
    name: string,
    path: string,
}

export type TSocialLinks = {
    img: string,
    target: string,
    path: string,
}

export type TPaymentsMethods = {
    img: string,
    target: string,
    path: string,
}

export type TFooterEndLink = {
    name: string,
    path: string
}

export type TFooterData = {
    goldCenter: TGoldCenter[],
    getHelp: TGoldHelp[],
    contact: string[],
    paymentsMethods: TPaymentsMethods[],
    socialLinks: TSocialLinks[],
    footerEndLink: TFooterEndLink[],
}

export const footerData: TFooterData = {
	goldCenter: [
		{
			name: 'About us',
			path: '/'
		},
		{
			name: 'Shop Jewelry',
			path: '/',
		},
		{
			name: 'Shop Stores',
			path: '/',
		}
	],

	getHelp: [
		{
			name: 'Account',
			path: '/',
		},
		{
			name: 'Orders',
			path: '/',
		}
	],
	contact: ['Main Office', 'Amiryan 12', '+374 94 73 73 43', 'goldCenterInfo@.am',

	],
	paymentsMethods: [
		{
			img: visa,
			target: '_blank',
			path: '/'
		},
		{
			img: master,
			target: '_blank',
			path: '/'
		},
		{
			img: arca,
			target: '_blank',
			path: '/'
		},
		{
			img: google_pay,
			target: '_blank',
			path: '/'
		},
		{
			img: apple_pay,
			target: '_blank',
			path: '/'
		}
	],
	socialLinks: [
		{
			img: vkIcon,
			target: '_blank',
			path: 'https://vk.com/id768387018',
		},
		{
			img: okIcon,
			target: '_blank',
			path: 'https://ok.ru'
		},
		{
			img: instagramIcon,
			target: '_blank',
			path: 'https://www.instagram.com/goldmarketproject/'
		},
		{
			img: facebookIcon,
			target: '_blank',
			path: 'https://www.facebook.com/profile.php?id=100088524672046'
		},
		{
			img: telegramIcon,
			target: '_blank',
			path: 'https://web.telegram.org/z/'
		},
	],

	footerEndLink: [
		{
			name: 'Terms old Use',
			path: '/',
		},
		{
			name: 'Privacy Policy',
			path: '/',
		},
		{
			name: 'Sitemap',
			path: '/',
		}
	]

};