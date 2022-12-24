import React, {useCallback, useState} from 'react';
import logo from 'src/style/Icons/site_logo.png';
import DropDown from 'src/components/header/header/dropDown';
import {TData} from 'src/components/header/header/types';
import dollar from 'src/style/Icons/dollar.png';
import ruble from 'src/style/Icons/ruble.png';
import dram from 'src/style/Icons/dram.png';
import user1 from 'src/style/Icons/user.png';
import {useNavigate} from 'react-router-dom';
import WishList from './wishList';
import Cart from './cart';
import Login from './login'

const flags: TData[] = [
	{
		id: 0,
		value: 'ENG',
		url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png'
	},
	{
		id: 1,
		value: 'ARM',
		url: 'https://image.shutterstock.com/image-vector/national-flag-armenia-modern-banner-260nw-1086444944.jpg'
	},
	{
		id: 2,
		value: 'RUS',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_Russia_%28bordered%29.svg/2560px-Flag_of_Russia_%28bordered%29.svg.png'
	}
];

const currency: TData[] = [
	{
		id: 0,
		value: 'USD',
		url: dollar,
	},
	{
		id: 1,
		value: 'RUR',
		url: ruble,
	},
	{
		id: 2,
		value: 'AMD',
		url: dram,
	}
];

const Header = () => {

	const navigate = useNavigate();
	const [flagState, setFlagState] = useState(flags);
	const [chosenFlag, setChosenFlag] = useState(flags[0]);
	const [flagMenuOpen, setFlagMenuOpen] = useState(false);

	const [currencyState, setCurrencyState] = useState(currency);
	const [chosenCurrency, setChosenCurrency] = useState(currency[0]);
	const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);
	const ls = require('local-storage')
	const user = ls('buyer')
	const [isLogInUser, setIsLogInUser] = useState(false)

	const handleChangeLanguage = (flag: TData) => {
		setChosenFlag(flag);
		setFlagMenuOpen(false);
	};

	const toggleFlagMenu = useCallback(() => {
		setFlagMenuOpen(!flagMenuOpen);
	}, [flagMenuOpen]);

	const handleChangeCurrency = (currency: any) => {
		setChosenCurrency(currency);
		setCurrencyMenuOpen(false);
	};

	const toggleCurrencyMenu = useCallback(() => {
		setCurrencyMenuOpen(!currencyMenuOpen);
	}, [currencyMenuOpen]);

	const toggleIsLogInUser = () =>{
		setIsLogInUser(true)
	}

	return (
		// container
		<header>
			<div className={'container_top'}>
				{/*header*/}
				<div className={'header flex justify-between align-center'}>
					{/*top_left_content*/}
					<div className={'top_left_block flex justify-between align-center'}>
						{/*flag_content*/}
						<div className={'relative'}>
							<DropDown menuOpen={flagMenuOpen}
								toggleMenu={toggleFlagMenu}
								chosen={chosenFlag}
								state={flagState}
								handleChange={handleChangeLanguage}
							/>
						</div>
						{/*valuta_content*/}
						<div className={'relative'}>
							<DropDown menuOpen={currencyMenuOpen}
								toggleMenu={toggleCurrencyMenu}
								chosen={chosenCurrency}
								state={currencyState}
								handleChange={handleChangeCurrency}
							/>
						</div>
					</div>

					{/*site_logo*/}
					<div>
						<img onClick={() => navigate('/')} className={'site_logo'} src={logo} alt={'site_logo'} />
					</div>

					{/*wishlist*/}
					<div className={'top_right_content'}>
						<ul className={'flex align-center'}>
							<WishList/>
							{
								isLogInUser
									?
									<li className={'flex align-center'}>
										<div className={'user_prof'}>{`${user.firstName} ${user.lastName[0]}.`}</div>
										<img className={'user_icon'} src={user1} alt='user_icon' />
									</li>
									:
									<Login toggleIsLogInUser={toggleIsLogInUser} />
							}
							<Cart/>
						</ul>
					</div>

				</div>

			</div>
		</header>

	);
};

export default Header;