import React from 'react';

import {useNavigate} from 'react-router-dom';

import right from 'src/style/Icons/right.png';
import {footerData} from '../../data/footerData';
import {FooterGoldHelp} from './footerGoldHelp';
import {FooterContact} from './footerContact';
import {FooterPayment} from './footerPayment';
import {FooterSocialLink} from './footerSocialLink';
import {FooterEnd} from './footerEnd';

const FooterLinks = () => {
	//TODO: check navigate
	// const navigate = useNavigate()
	return (
		<div className={'bg-gray'}>
			<footer className="footer flex dir-col">
				<div className={'footer_top container  flex justify-between'}>
					<ul>
						<FooterGoldHelp title={'GOLD CENTER'} data={footerData.goldCenter}/>
					</ul>
					<ul>
						<FooterGoldHelp title={'GET HELP'} data={footerData.getHelp}/>
					</ul>
					<div>
						<ul className={'contact'}>
							<FooterContact title={'CONTACT'} data={footerData.contact}/>
						</ul>
						<div className={'payment flex dir-col'}>
							<FooterPayment data={footerData.paymentsMethods}/>
						</div>
					</div>

					<div className="input_list">
						<span>SIGN UP OUR MAILING LIST</span>
						<div className={'search_input'}><input type="email" placeholder={'Enter E-MAIL'}/>
							<button><img src={right}/></button>
						</div>
						<p>With a long history of fine craftsmanship, Italic gold jewelry from brings</p>
					</div>
				</div>

				<div className={'border_line'}>
				</div>
				<div className={'footer_soc_links container '}>
					<h5 className={'text-center'}>SOCIAL LINKS</h5>
					<ul className={'social_links_icons flex justify-center '}>
						<FooterSocialLink data={footerData.socialLinks}/>
					</ul>
				</div>
				<div className={'border_line'}></div>
				<ul className={'footer_end flex align-center justify-center container'}>
					<FooterEnd title={'2022 Golden Center'} data={footerData.footerEndLink}/>
				</ul>
			</footer>
		</div>
	);
};

export default FooterLinks;