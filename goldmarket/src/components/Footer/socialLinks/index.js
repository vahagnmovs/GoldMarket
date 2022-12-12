import React from 'react';
import "./socialLink_Style.scss"
import { Link } from "react-router-dom";
import facebookIcon from "src/style/Icons/facebook.svg"
import instagramIcon from "src/style/Icons/instagram.svg"
import okIcon from "src/style/Icons/ok.svg"
import telegramIcon from "src/style/Icons/telegram.svg"
import vkIcon from "src/style/Icons/vk.svg"

const SocialLinks = () => {
    return (
        <div className={"social_link"}>
                <h5>SOCIAL LINKS</h5>
                <div className={"social_links_icons"}>
                    <Link target={"_blank"} to={"https://vk.com/"}> <img src={vkIcon} alt=""/> </Link>
                    <Link target={"_blank"} to={"https://ok.ru/"}> <img src={okIcon} alt=""/> </Link>
                    <Link target={"_blank"} to={"https://www.instagram.com/"}> <img src={instagramIcon} alt=""/> </Link>
                    <Link target={"_blank"} to={"https://www.facebook.com/"}> <img src={facebookIcon} alt=""/> </Link>
                    <Link target={"_blank"} to={"https://telegram.org/"}> <img src={telegramIcon} alt=""/> </Link>
                </div>
        </div>
    );
};

export default SocialLinks;