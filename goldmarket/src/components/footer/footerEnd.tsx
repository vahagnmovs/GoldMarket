import {Link} from "react-router-dom";
import { TFooterEndLink} from "../../data/footerData";

type TFooterEnd = {
    title: string
    data: TFooterEndLink[]
}

const FooterEnd = ({title, data}: TFooterEnd) => {
    return (
        <>
            {/*FIXME: key*/}
            <li>&copy;{title} </li>
            {data.map(elem => <li key={Math.random()}><Link to={elem.path}></Link> {elem.name} </li>)}
        </>
    );
};

export  {FooterEnd};