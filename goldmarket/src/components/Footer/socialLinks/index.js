import React from 'react';
import {Link} from "react-router-dom";
import "../../../style/elements/_footer.scss"
import  "../../../style/base/_globals.scss"
import "../../../style/base/_reset.scss"
import "../../../style/utilities/_variables.scss"


// import "./socialLink_Style.scss"
import facebookIcon from "src/style/Icons/facebook.svg"
import instagramIcon from "src/style/Icons/instagram.svg"
import okIcon from "src/style/Icons/ok.svg"
import telegramIcon from "src/style/Icons/telegram.svg"
import vkIcon from "src/style/Icons/vk.svg"

const SocialLinks = () => {
    return (
        <div className={"footer_link  " }>
            <h5 className={"text-center"}>SOCIAL LINKS</h5>
            <ul className={"social_links_icons  flex  justify-center "}>
                <li><Link target={"_blank"} to={"https://vk.com/"}> <img src={vkIcon} alt=""/> </Link></li>
                <li><Link target={"_blank"} to={"https://ok.ru/"}> <img src={okIcon} alt=""/> </Link></li>
                <li><Link target={"_blank"} to={"https://www.instagram.com/"}> <img src={instagramIcon} alt=""/> </Link></li>
                <li><Link target={"_blank"} to={"https://www.facebook.com/"}> <img src={facebookIcon} alt=""/> </Link></li>
                <li><Link target={"_blank"} to={"https://telegram.org/"}> <img src={telegramIcon} alt=""/> </Link></li>
            </ul>

        </div>
    );
};

export default SocialLinks;