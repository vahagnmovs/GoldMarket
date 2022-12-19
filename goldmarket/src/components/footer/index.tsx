import React from 'react';

import {useNavigate} from "react-router-dom";

import "src/style/elements/_footer.scss"
import "src/style/base/_base.scss"
import "src/style/base/_globals.scss"
import "src/style/base/_reset.scss"
import "src/style/utilities/_variables.scss"

import right from "src/style/Icons/right.png"
import {footerData} from "../../data/footerData";
import {FooterGoldHelp} from "./footerGoldHelp";
import {FooterContact} from "./footerContact";
import {FooterPayment} from "./footerPayment";
import {FooterSocialLink} from "./footerSocialLink";
import {FooterEnd} from "./footerEnd";

const FooterLinks = () => {
    //TODO: check navigate
    // const navigate = useNavigate()
    return (
        <div className={"bg-gray"}>
            <footer className="container footer flex  dir-col">
                <div className={"footer_top flex justify-between"}>
                    <ul className={"justify-between"}>
                        <FooterGoldHelp title={"GOLD CENTER"} data={footerData.goldCenter}/>
                    </ul>
                    <ul>
                        <FooterGoldHelp title={"GET HELP"} data={footerData.getHelp}/>
                    </ul>
                    <ul>
                        <FooterContact title={"CONTACT"} data={footerData.contact}/>
                        <li>PAYMENTS METHODS</li>
                        <div className={"icon-pay"}>
                            <FooterPayment data={footerData.paymentsMethods}/>

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
                        <FooterSocialLink data={footerData.socialLinks}/>
                    </ul>
                </div>
                <hr/>
                <ul className={" footer_end flex"}>
                    <FooterEnd title={"2022 Golden Center"} data={footerData.footerEndLink}/>
                </ul>
            </footer>
        </div>
    );
};

export default FooterLinks;