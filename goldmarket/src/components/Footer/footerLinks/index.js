import React from 'react';

import {Link, Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./Global_Center.scss"

import visa from "src/style/Icons/visa.png"
import master from "src/style/Icons/master.png"
import google_pay from "src/style/Icons/google-pay.png"
import apple_pay from "src/style/Icons/apple-pay.png"

const FooterLinks = () => {
    const navigate = useNavigate()

    return (<footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>GOLD CENTER</h4>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Shop Jewelry</a></li>
                            <li><a href="#">Shop Stores</a></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Orders</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>CONTACT</h4>
                        <ul>
                            <li><p>Main office,</p></li>
                            <li><p>Baghramyan 26, Yerevan</p></li>
                            <li><p>(+374 00 00 00)</p></li>
                            <li><p>info@yerevan.am</p></li>
                        </ul>
                        <h4>PAYMENT METHODS</h4>
                        <div className={"icon"}>
                            <img src={visa} alt=""/>
                            <img src={master} alt=""/>
                            <img src={google_pay} alt=""/>
                            <img src={apple_pay} alt=""/>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>SIGN UP OUR MAILING LIST</h4>
                        <div className="input_list">
                            <input type="email" placeholder={"Enter E-MAIL"}/>
                            <button><i className="fa-light fa-arrow-right-long"></i></button>
                            {/*<p>With a long history of fine craftsmanship, Italic gold jewelry from brings</p>*/}

                        </div>

                    </div>
                </div>
            </div>
        </footer>































        // <div className={"Footer"}>
        //     <div className={"footer_cpl1"}>
        //         <span>GOLD CENTER</span>
        //         <ul>
        //             <li><Link to={"shopJewelery"}>About us</Link></li>
        //             <li><Link to={"shopJewelery"}> Shop Jewelry</Link></li>
        //             <li><Link to={"shopStores"}> Shop Stores</Link></li>
        //
        //         </ul>
        //     </div>
        //     <div className={"footer_cpl2"}>
        //         <span>HELP</span>
        //         <ul>
        //             <li><Link to={"account"}>Account </Link></li>
        //             <li><Link to={"orders"}>Orders </Link></li>
        //
        //         </ul>
        //     </div>
        //     <div className={"footer_cpl3"}>
        //         <span>CONTACT</span>
        //         <ul>
        //             <li><p>Main office,</p></li>
        //             <li><p>Baghramyan 26, yerevan</p></li>
        //             <li><p>(+374 00 00 00)</p></li>
        //             <li><p>info@yerevan.am</p></li>
        //         </ul>
        //         <div className={"payments_logo"}>
        //             <span>PAYMENT METHODS</span>
        //             <div className={"icon"}>
        //                 <img src={visaCardIcon} alt=""/>
        //                 <img src={masterIcon} alt=""/>
        //                 <img src={googlePayIcon} alt=""/>
        //                 <img src={applePayIcon} alt=""/>
        //             </div>
        //         </div>
        //     </div>
        //
        //
        //
        //     <div className={"footer_cpl4"}>
        //         <spam>SIGN UP OUR MAILING LIST</spam>
        //         <div className={"input"}>
        //             <input
        //                 type="text"
        //                 placeholder={"Enter E-MAIL"}
        //             />
        //             <img className={"iconRight"} src={iconRight} alt=""/>
        //             <hr/>
        //         </div>
        //
        //
        //         <br/>
        //
        //         <p>With a long history of fine craftsmanship, Italic gold jewelry from brings</p>
        //
        //     </div>
        // </div>
    );
};

export default FooterLinks;