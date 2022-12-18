
import {TSocialLinks} from "../../data/footerData";
import {Link} from "react-router-dom";
type TFooterSocialLink = {
    data: TSocialLinks[]
}
const FooterSocialLink = ({ data}: TFooterSocialLink) => {
    return (
        //FIXME: change key...
        <>
            {data.map(elem => <li key={Math.random()}>
                <Link target={elem.target} to={elem.path}>
                    <img src={elem.img} alt=""/>
                </Link>
            </li>)}
        </>
    );
};

export {FooterSocialLink};