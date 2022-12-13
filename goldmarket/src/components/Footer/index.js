import React from 'react';
import SocialLinks from "./socialLinks";
import FooterEnd from "./footerEnd";
import FooterLinks from "./footerLinks";

const Footer = () => {
    return (
        <div>
            <FooterLinks/>
            <SocialLinks/>
            <FooterEnd/>
        </div>
    );
};

export default Footer;