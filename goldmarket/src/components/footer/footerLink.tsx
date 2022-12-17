import {Link} from "react-router-dom";

type TFooterLink = {
    data: string[],
    title: string
};

export const FooterLink = ({data, title}: TFooterLink) => {
    return (
        <>
            <ul className={"justify-between"}>
                <li>{title}</li>
                {data.map(elem => <li key={elem}><Link to={"/"}>{elem}</Link></li>)}
                <div>
                </div>
            </ul>
        </>
    );
};

