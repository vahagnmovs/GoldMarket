import React, { useCallback, useState } from 'react';
import logo from "src/style/Icons/logo.png"
import heart from "src/style/Icons/heart.png"
import user from "src/style/Icons/user.png"
import basket from "src/style/Icons/basket.png"
// import "../../../style/elements/_header.scss"
// import "../../../style/base/_globals.scss"
// import "../../../style/base/_reset.scss"
// import "../../../style/utilities/_variables.scss"
import DropDown from "src/components/header/header/dropDown";
import { TData } from "src/components/header/header/types";

const flags: TData[] = [
    {
        id: 0,
        value: "ENG",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png"
    },
    {
        id: 1,
        value: "ARM",
        url: "https://image.shutterstock.com/image-vector/national-flag-armenia-modern-banner-260nw-1086444944.jpg"
    },
    {
        id: 2,
        value: "RUS",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_Russia_%28bordered%29.svg/2560px-Flag_of_Russia_%28bordered%29.svg.png"
    }
];

const currency: TData[] = [
    {
        id: 0,
        value: "USD",
        url: "https://static.thenounproject.com/png/990771-200.png",
    },
    {
        id: 1,
        value: "RUR",
        url: "https://cdn-icons-png.flaticon.com/512/143/143169.png",
    },
    {
        id: 2,
        value: "AMD",
        url: "https://cdn-icons-png.flaticon.com/512/143/143174.png",
    }
];

const Header = () => {

    const [flagState, setFlagState] = useState(flags);
    const [chosenFlag, setChosenFlag] = useState(flags[0]);
    const [flagMenuOpen, setFlagMenuOpen] = useState(false);

    const [currencyState, setCurrencyState] = useState(currency)
    const [chosenCurrency, setChosenCurrency] =useState(currency[0])
    const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);

    const handleChangeLanguage = (flag: TData) => {
        setChosenFlag(flag);
        setFlagMenuOpen(false);
    }

    const toggleFlagMenu = useCallback(() => {
        setFlagMenuOpen(!flagMenuOpen);
    }, [flagMenuOpen])

    const handleChangeCurrency = (currency:any) => {
        setChosenCurrency(currency);
        setCurrencyMenuOpen(false)
    }

    const toggleCurrencyMenu = useCallback(() => {
        setCurrencyMenuOpen(!currencyMenuOpen);
    },[currencyMenuOpen])

    return (
        // containrt
        <div className={"container-top"}>
            {/*header*/}
            <header className={"header flex justify-between align-center"}>
                {/*top_left_content*/}
                <div className={"top_left_content flex justify-between align-center"}>
                    {/*flag_content*/}
                    <div className={"flag_content"}>
                        <DropDown menuOpen={flagMenuOpen}
                                  toggleMenu={toggleFlagMenu}
                                  chosen={chosenFlag}
                                  state={flagState}
                                  handleChange={handleChangeLanguage}
                        />
                    </div>
                    {/*valuta_content*/}
                    <div /*className={"valuta_content flex align-center"}*/ className={"flag_content"}>
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
                    <img className={"site_logo"} src={logo} alt={"site_logo"} />
                </div>

                {/*wishlist*/}
                <div className={"top_right_content flex align-center"}>
                    <ul className={"flex align-center"}>
                        <li className={"wishlist_content flex align-center"}>
                            <span>WISHLIST</span>
                            <img className={"icon_favorite"} src={heart} alt="icon_favorite" />
                            <span>(0)</span>
                        </li>
                        <li className={"login_content flex align-center"}>
                            <span>LOGIN</span>
                            <img className={"user_icon"} src={user} alt="user_icon" />
                        </li>
                        <li className={"cart_content flex align-center"}>
                            <span>CART</span>
                            <img className={"icon_card"} src={basket} alt="icon_card" />
                            <span>(0)</span>
                        </li>
                    </ul>
                </div>

            </header>

        </div>
    );
};

export default Header;