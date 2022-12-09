import React, {useState} from 'react';
import logo  from "../../../style/Icons/logo.png"
import open from "../../../style/Icons/open.png"
import close from "../../../style/Icons/close.png"
import heart from "../../../style/Icons/heart.png"
import user from "../../../style/Icons/user.png"
import basket from "../../../style/Icons/basket.png"
import "./Header.scss"
import Login from "./loginModal";

type Flag = {
    id : number,
    value: string,
    url: string,
}

type Currency = {
    id : number,
    currency: string,
    src: string,
}

const flags:Flag[] = [
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

const currency: Currency[] = [
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

const  Header = () =>{

    const [flagState, setFlagState] = useState(flags);
    const [flagChoose, setFlagChoose] = useState(true);
    const [id, setId] = useState(0)
    const [currencyState, setCurrencyState] = useState(currency)
    const [isChoseCurrency, setIsChoseCurrency] = useState(true);
    const [currencyId, setCurrencyId] = useState(0)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const handleChangeLanguage = (id:number) => {
        setId(id);
        setFlagChoose(true)
    }

    const handleChangeCurrency = (id:number) => {
        setCurrencyId(id)
        setIsChoseCurrency(true)
    }
    const handelLoginClose = () => {
        setIsLoginOpen(false)
    }
    return (
        <div className={"container"}>
            <div className={"container_top"}>
                <div className={"flag_container"}>
                    {
                        flagChoose
                            ?
                            <div className={"flags"} onClick={() => setFlagChoose(false)}>
                                <img className={"flagImg"} src={flagState[id].url} alt=""/>
                                <p className={"language"}>{flagState[id].value}</p>
                                <img className={"png"}
                                     src={open}
                                     alt=""/>
                            </div>
                            :
                            <div>
                                {
                                    flagState.map(flag => {
                                        return (
                                            <div className={"flags"} onClick={() => handleChangeLanguage(flag.id)}>
                                                <img className={"flagImg"} src={flag.url} alt=""/>
                                                <p className={"language"}>{flag.value}</p>
                                                <img className={"png"}
                                                     src={close}
                                                     alt=""/>
                                            </div>
                                        )
                                    })
                                }</div>
                    }
                </div>
                <div className={"value_container"}>
                    {
                        isChoseCurrency
                            ?
                            <div className={"flags"} onClick={() => setIsChoseCurrency(false)}>
                                <p className={"language"}>{currencyState[currencyId].currency} </p>

                                <img className={"png"}
                                     src={open}
                                     alt=""/>
                            </div>
                            :
                            <div>
                                {
                                    currencyState.map(currency => {
                                        return (
                                            <div key={currency.id} className={"flags"} onClick={() => handleChangeCurrency(currency.id)}>
                                                <p>{currency.currency}</p>
                                            </div>
                                        )
                                    })


                                }
                                <img className={"dropDown"}
                                     src={close}
                                     alt=""/>
                            </div>
                    }

                </div>
            </div>
            <img src={logo} alt={""} className={"logo"}/>
            <div className={"container1"}>
                <div className={"icon-login-wishlist"}>
                    <div className={"text_and_heart"}>
                        <p>WISHLIST</p>
                        <img className={"icon"}
                             src={heart}
                             alt=""/>
                    </div>
                    <p>(0)</p>
                </div>
                <div className={"icon-login-wishlist"}
                     onClick={() => setIsLoginOpen(true)}
                >
                    <p>LOGIN</p>
                    <img className={"icon"}
                         src={user}
                         alt=""/>
                </div>
                {
                    isLoginOpen && <Login handelLoginClose={handelLoginClose}/>
                }
                <div className={"icon-login-wishlist"}>
                    <p>CART</p>
                    <img className={"icon"} src={basket} alt=""/>
                    <p>(0)</p>
                </div>
            </div>
        </div>
    );
};

export default Header;