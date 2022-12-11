import SocialLinks from "./socialLinks";
import FooterEnd from "./footerEnd";
import FooterLinks from "./footerLinks";

const Footer = () => {
    return (
        <div>
            <div className={"footer_links"}>
                <FooterLinks/>
            </div>
            <SocialLinks/>
            <FooterEnd/>
        </div>
    );
};

export default Footer;