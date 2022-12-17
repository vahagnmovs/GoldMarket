import React from 'react';

import {Link, Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import "src/style/elements/_footer.scss"
import "src/style/base/_base.scss"
import "src/style/base/_globals.scss"
import "src/style/base/_reset.scss"
import "src/style/utilities/_variables.scss"


// import "./socialLink_Style.scss"
import facebookIcon from "src/style/Icons/fb.png"
import instagramIcon from "src/style/Icons/insta.png"
import okIcon from "src/style/Icons/ok.png"
import telegramIcon from "src/style/Icons/tg.png"
import vkIcon from "src/style/Icons/vk.png"
import right from "src/style/Icons/right.png"


// import "./Global_Center.scss"

import visa from "src/style/Icons/visa.png"
import master from "src/style/Icons/master.png"
import google_pay from "src/style/Icons/google-pay.png"
import apple_pay from "src/style/Icons/apple-pay.png";
import arca from "src/style/Icons/arca.png"

import {footerData} from "src/data/footerData";
import {FooterLink} from "./footerLink";
import {PaymentsLink} from "./paymentsLink";

const FooterLinks = () => {
    const navigate = useNavigate()


    return (
        <div className={"bg-gray"}>
            <footer className="container footer flex  dir-col">
                
                <div className={"footer_top flex justify-between"}>
                    <ul className={"justify-between"}>
                        <li><Link to={"#"}> GOLD CENTER</Link></li>
                        <li><Link to="#">About us</Link></li>
                        <li><Link to="#">Shop Jewelry</Link></li>
                        <li><Link to="#">Shop Stores</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={"#"}> GET HELP </Link></li>
                        <li><Link to="#">Account</Link></li>
                        <li><Link to="#">Orders</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={"#"}>CONTACT</Link></li>
                        <li><Link to={"#"}>Main office,</Link></li>
                        <li><Link to={"#"}>Baghramyan 26, Yerevan</Link></li>
                        <li><Link to={"#"}>(+374 00 00 00)</Link></li>
                        <li><Link to={"#"}>info@yerevan.am</Link></li>
                        <li><Link to={"#"}>PAYMENT METHODS</Link></li>
                        <div className={"icon-pay"}>
                            <li><img src={visa} alt=""/></li>
                            <li><img src={master} alt=""/></li>
                            <li><img src={arca}/></li>
                            <li><img src={google_pay} alt=""/></li>
                            <li><img src={apple_pay} alt=""/></li>
                        </div>
                    </ul>


                    <div className="input_list">
                        <span>SIGN UP OUR MAILING LIST</span>
                        <div className={"search_input"}><input type="email" placeholder={"Enter E-MAIL"}/>
                            <button><img src={right}/></button>
                        </div>
                        <p>With a long history of fine craftsmanship, Italic gold jewelry from brings</p>
                    </div>
                </div>

                <hr/>

                <div className={"footer_soc_links"}>
                    <h5 className={"text-center"}>SOCIAL LINKS</h5>
                    <ul className={"social_links_icons  flex  justify-center "}>
                        <li><Link target={"_blank"} to={"/vk"}> <img src={vkIcon} alt=""/> </Link></li>
                        <li><Link target={"_blank"} to={"/ok"}> <img src={okIcon} alt=""/> </Link></li>
                        <li><Link target={"_blank"} to={"/instagram"}> <img src={instagramIcon} alt=""/>
                        </Link></li>
                        <li><Link target={"_blank"} to={"/facebook"}> <img src={facebookIcon} alt=""/>
                        </Link></li>
                        <li><Link target={"_blank"} to={"/telegram"}> <img src={telegramIcon} alt=""/> </Link>
                        </li>
                    </ul>
                </div>

                <hr/>

                    <ul className={" footer_end flex"}>
                        {/*FIXME:*/}
                        {/*<li><Link>; 2022 Golden Center </Link></li>*/}
                        <li><Link to={""}> Terms od Use </Link></li>
                        <li><Link to={""}> Privacy Policy </Link></li>
                        <li><Link to={""}> Sitemap </Link></li>
                    </ul>


            </footer>
        </div>

    )
        ;
};

export default FooterLinks;

{/*<div className={"footer_top flex justify-between"}>*/}
{/* <FooterLink title={"GOLD CENTER"} data={footerData.goldCenter}/>*/}
{/* <FooterLink title={"GET HELP"} data={footerData.getHelp}/>*/}
{/* <FooterLink title={"CONTACT"} data={footerData.contact}/>*/}
{/*    <div className="input_list">*/}
{/*        <span>SIGN UP OUR MAILING LIST</span>*/}
{/*        <div className={"search_input"}><input type="email" placeholder={"Enter E-MAIL"}/>*/}
{/*            <button><img src={right}/></button>*/}
{/*        </div>*/}
{/*        <p>With a long history of fine craftsmanship, Italic gold jewelry from brings</p>*/}
{/*    </div>*/}
{/*</div>*/}
{/*<div>*/}
{/*    <PaymentsLink  data={footerData.paymentMethods}/>*/}
{/*</div>*/}