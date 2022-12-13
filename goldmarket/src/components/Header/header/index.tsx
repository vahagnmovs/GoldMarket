import React, {useState} from 'react';
import logo from "src/style/Icons/logo.png"
import open from "src/style/Icons/open.png"
import close from "src/style/Icons/close.png"
import heart from "src/style/Icons/heart.png"
import user from "src/style/Icons/user.png"
import basket from "src/style/Icons/basket.png"
import "src/style/elements/_header.scss"
import "src/style/base/_globals.scss"
import "src/style/base/_reset.scss"
import "src/style/utilities/_variables.scss"
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
    const [flagChoose, setFlagChoose] = useState(true);
    const [id, setId] = useState(0)
    const [currencyState, setCurrencyState] = useState(currency)
    const [isChoseCurrency, setIsChoseCurrency] = useState(true);
    const [currencyId, setCurrencyId] = useState(0)


    const handleChangeLanguage = (id: number) => {
        setId(id);
        setFlagChoose(true)
    }

    const handleChangeCurrency = (id: number) => {
        setCurrencyId(id)
        setIsChoseCurrency(true)
    }

    return (
        // containrt
        <div className={"container flex"}>
            {/*header*/}
            <header className={"header flex justify-between align-center"}>
                {/*top_left_content*/}
                <div className={"top_left_content flex justify-between align-center"}>
                    {/*flag_content*/}
                    <div className={"flag_content flex"}>

                        {
                            flagChoose
                                ?
                                // flags
                                <ul className={"flags flex align-center"} onClick={() => setFlagChoose(false)}>
                                    {/*flag_img*/}
                                    <li><img className={"flag_icon"} src={flagState[id].url} alt="flag_img"/></li>
                                    {/*language*/}
                                    <li><span className={"language"}>{flagState[id].value}</span></li>
                                    {/*drop_down*/}
                                    <li><img className={"drop_down"} src={open} alt="drop_down"/></li>

                                </ul>
                                :
                                <div>
                                    {
                                        flagState.map(flag => {
                                            return (
                                                <ul className={"flags flex  align-center"}
                                                    onClick={() => handleChangeLanguage(flag.id)}>
                                                    <li><img className={"flag_icon"} src={flag.url} alt="flag_img"/>
                                                    </li>
                                                    <li><span className={"language"}>{flag.value}</span></li>
                                                    <li><img className={"drop_up"} src={close} alt="drop_up"/></li>
                                                </ul>
                                            )
                                        })
                                    }</div>
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
                                    <li><img className={"drop_down "} src={open} alt="drop_down"/></li>
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
                                                    <li><img className={"drop_up"} src={close} alt=""/></li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                        }
                    </div>
                </div>
                {/*site_logo*/}
                <div className={"site_logo"}>
                    <h2>
                        <img src={logo} alt={"site_logo"} className={"logo"}/>
                    </h2>
                </div>


                {/*wishlist*/}
                <div className={"top_right_content flex align-center"}>
                    <ul  className={"flex align-center"}>
                        <li className={"wishlist_content flex align-center"}>
                            <span>WISHLIST</span>
                            <img className={"icon_favorite"} src={heart} alt="icon_favorite"/>
                            <span>(0)</span>
                        </li>
                        <li className={"login_content flex align-center"}>
                            <span>LOGIN</span>
                            <img className={"user_icon"} src={user} alt="user_icon"/>
                        </li>
                        <li className={"cart_content flex align-center"}>
                            <span>CART</span>
                            <img className={"icon_card"} src={basket} alt="icon_card"/>
                            <span>(0)</span>
                        </li>
                    </ul>
                </div>

            </header>

        </div>
    );
};

export default Header;