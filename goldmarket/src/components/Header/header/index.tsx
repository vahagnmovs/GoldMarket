import React, {useState} from 'react';
import logo from "../../../style/Icons/logo.png"
import open from "../../../style/Icons/open.png"
import close from "../../../style/Icons/close.png"
import heart from "../../../style/Icons/heart.png"
import user from "../../../style/Icons/user.png"
import basket from "../../../style/Icons/basket.png"
import "./Header.scss"
import LoginModal from "./loginModal";
import Buyer from "./login/buyer";
import Login from "./login";


type Flag =  {
    id: number,
    value: string,
    url: string,
}

type Currency = {
    id: number,
    currency: string,
    src: string,
}

const flags: Flag[] = [
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


    return (
        // container
        <div className={"container"}>
            {/*container_top*/}
            <div className={"container_top"}>
                {/*top_left_content*/}
                <div className={"top_left_content"}>
                    {/*flag_content*/}
                    <div className={"flag_content"}>

                        {
                            flagChoose
                                ?
                                // flags
                                <ul className={"flags"} onClick={() => setFlagChoose(false)}>
                                    {/*flag_img*/}
                                   <li> <img className={"flag_img"} src={flagState[id].url} alt="flag_img"/></li>
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
                                                <ul className={"flags"} onClick={() => handleChangeLanguage(flag.id)}>
                                                 <li> <img className={"flag_img"} src={flag.url} alt="flag_img"/></li>
                                                 <li><span className={"language"}>{flag.value}</span>  </li>
                                                 <li>  <img className={"drop_up"}src={close} alt="drop_up"/>  </li>
                                                </ul>
                                            )
                                        })
                                    }</div>
                        }
                    </div>
                    {/*valuta_content*/}
                    <div className={"valuta_content"}>
                        {
                            isChoseCurrency
                                ?
                                // flags
                                <ul className={"flags"} onClick={() => setIsChoseCurrency(false)}>
                                    {/*language*/}
                                <li>  <span className={"language"}>{currencyState[currencyId].currency} </span></li>
                                    {/*drop_down*/}
                                <li><img className={"drop_down"} src={open} alt="drop_down"/> </li>
                                </ul>
                                :
                                <div>
                                    {
                                        currencyState.map(currency => {
                                            return (
                                                // flags
                                                <ul key={currency.id} className={"flags"}
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
            </div>

            {/*site_logo*/}
           <div className={"site_logo"}>
               <img src={logo} alt={"site_logo"} className={"logo"}/>
           </div>


            {/*top_right_content*/}
            <div className={"top_right_content"}>
                {/*wishlist*/}
                <div className={"wishlist"}>
                    {/*text_and_heart*/}
                    <div className={"text_and_heart"}>
                        <span>WISHLIST</span>
                        <img className={"icon_favorite"} src={heart} alt="icon_favorite"/>
                        <span>(0)</span>
                    </div>

                </div>
                {/*user_login*/}
                <div className={"user_login"}  onClick={()  => setIsLoginOpen(!isLoginOpen)}>
                    <span>LOGIN</span>
                    <img className={"user_icon"} src={user} alt="user_icon"/>
                </div>
                {
                    isLoginOpen  &&  <Login/>
                }
                {/*card*/}
                <div className={"card"}>
                    <span>CART</span>
                    <img className={"icon_card"} src={basket} alt="icon_card"/>
                    <span>(0)</span>
                </div>
            </div>
        </div>
    );
};

export default Header;