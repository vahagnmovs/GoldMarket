import React, { useCallback, useState } from 'react';
import logo from "../../../style/Icons/logo.png"
import open from "../../../style/Icons/open.png"
import close from "../../../style/Icons/close.png"
import heart from "../../../style/Icons/heart.png"
import user from "../../../style/Icons/user.png"
import basket from "../../../style/Icons/basket.png"
// import "../../../style/elements/_header.scss"
// import "../../../style/base/_globals.scss"
// import "../../../style/base/_reset.scss"
// import "../../../style/utilities/_variables.scss"
import Navbar from "../../Navbar";

const flags = [
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

const currency = [
    {
        id: 0,
        currency: "USD",
        src: "https://cdn.iconscout.com/icon/free/png-256/usd-486883-2364952.png"
    },
    {
        id: 1,
        currency: "RUR",
        src: ""
    },
    {
        id: 2,
        currency: "AMD",
        src: ""
    }
];

const Header = () => {

    const [flagState, setFlagState] = useState(flags);
    const [chosenflag, setChosenFlag] = useState(flags[0]);
    const [flagMenuOpen, setFlagMenuOpen] = useState(false);
    const [currencyState, setCurrencyState] = useState(currency)
    const [isChoseCurrency, setIsChoseCurrency] = useState(true);
    const [currencyId, setCurrencyId] = useState(0)

    const handleChangeLanguage = (flag: any) => {
        setChosenFlag(flag);
        setFlagMenuOpen(false);
    }

    const handleChangeCurrency = (id: number) => {
        setCurrencyId(id)
        setIsChoseCurrency(true)
    }

    const toggleFlagMenu = useCallback(() => {
        setFlagMenuOpen(!flagMenuOpen);
    }, [flagMenuOpen])

    return (
        // containrt
        <div className={"container-top"}>
            {/*header*/}
            <header className={" header flex justify-between align-center"}>
                {/*top_left_content*/}
                <div className={"top_left_content flex justify-between align-center"}>
                    {/*flag_content*/}
                    <div className={"flag_content"}>
                        <div className='flag' onClick={toggleFlagMenu}>
                            <img className={"flag_icon"} src={chosenflag.url} alt="flag_img" />
                            <span>{chosenflag.value}</span>
                            <img className={"drop_down"} src={flagMenuOpen ? close : open} alt="drop_down" />
                        </div>
                        {flagMenuOpen && <ul className={"flags"}>
                            {flagState.map(flag => {
                                return (
                                    <li className='flag' onClick={() => handleChangeLanguage(flag)} key={flag.id}>
                                        <img className={"flag_icon"} src={flag.url} alt="flag_img" />
                                        <span>{flag.value}</span>
                                    </li>
                                )
                            })}
                        </ul>}

                        {

                            // <ul className={"flags flex align-center"} onClick={() => setFlagChoose(false)}>
                            //     {/*flag_img*/}
                            //     <li><img className={"flag_icon"} src={flagState[id].url} alt="flag_img" /></li>
                            //     {/*language*/}
                            //     <li><span className={"language"}>{flagState[id].value}</span></li>
                            //     {/*drop_down*/}
                            //     <li><img className={"drop_down"} src={open} alt="drop_down" /></li>
                            // </ul>
                            // :
                            // <div>
                            //     {

                            //     }</div>
                        }
                    </div>
                    {/*valuta_content*/}
                    <div className={"valuta_content flex align-center"}>
                        {
                            isChoseCurrency
                                ?
                                // value
                                <ul className={"valuta flex align-center"} onClick={() => setIsChoseCurrency(false)}>
                                    {/*language*/}
                                    <li><span className={"language"}>{currencyState[currencyId].currency} </span></li>
                                    {/*drop_down*/}
                                    <li><img className={"drop_down "} src={open} alt="drop_down" /></li>
                                </ul>
                                :
                                <div>
                                    {
                                        currencyState.map(currency => {
                                            return (
                                                // flags
                                                <ul key={currency.id} className={"valuta flex align-center"}
                                                    onClick={() => handleChangeCurrency(currency.id)}>
                                                    <li><span>{currency.currency}</span></li>
                                                    {/*drop_up*/}
                                                    <li><img className={"drop_up"} src={close} alt="" /></li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                        }
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