import React from 'react';

import {Link, Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";


import visa from "../../../style/Icons/visa.png"
import master from "../../../style/Icons/master.png"
import google_pay from "../../../style/Icons/google-pay.png"
import apple_pay from "../../../style/Icons/apple-pay.png"

import "../../../style/elements/_footer.scss"
import "../../../style/base/_globals.scss"
import "../../../style/base/_reset.scss"
import "../../../style/utilities/_variables.scss"


import "./Global_Center.scss"

import visa from "src/style/Icons/visa.png"
import master from "src/style/Icons/master.png"
import google_pay from "src/style/Icons/google-pay.png"
import apple_pay from "src/style/Icons/apple-pay.png"


const FooterLinks = () => {
    const navigate = useNavigate()

    return (
        <footer className="footer flex justify-between  ">
            <ul className={"justify-between"}>
                <li><a href={"#"}> GOLD CENTER</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Shop Jewelry</a></li>
                <li><a href="#">Shop Stores</a></li>
            </ul>
            <ul>
                <li><a href={"#"}> GET HELP </a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Orders</a></li>
            </ul>
            <ul>
                <li><a href={"#"}>CONTACT</a></li>
                <li><a href={"#"}>Main office,</a></li>
                <li><a href={"#"}>Baghramyan 26, Yerevan</a></li>
                <li><a href={"#"}>(+374 00 00 00)</a></li>
                <li><a href={"#"}>info@yerevan.am</a></li>
                <li><a href={"#"}>PAYMENT METHODS</a></li>
                <div className={"icon-pay  "}>
                    <li><img src={visa} alt=""/></li>
                    <li><img src={master} alt=""/></li>
                    <li><img src={google_pay} alt=""/></li>
                    <li><img src={apple_pay} alt=""/></li>
                </div>
            </ul>

            <div className="input_list">
                <span>SIGN UP OUR MAILING LIST</span>
                <div className={"search_input"}><input type="email" placeholder={"Enter E-MAIL"}/>
                    <button>go</button>
                </div>
                <p>With a long history of fine craftsmanship, Italic gold jewelry from brings</p>
            </div>

        </footer>
    )
        ;
};

export default FooterLinks;