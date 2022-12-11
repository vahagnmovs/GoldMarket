import React, {useState} from 'react';
import "../../../style/elements/_navbar.scss"
import "../../../style/base/_globals.scss"
import "../../../style/base/_reset.scss"
import "../../../style/utilities/_variables.scss"

type SearchCategoryProps = {
    title: string,

}


function SearchCategory({title}: SearchCategoryProps) {

    const [mouse, setMouse] = useState(false);


    return (
        <div
            onMouseEnter={() => setMouse(true)}
             onMouseLeave={() => setMouse(false)}
        >
            {
                mouse
                    ?
                    <div className={"navbar2 "}>
                        {/*gold_jewelry*/}
                        <ul className={"gold_jewelry flex"}>
                            <li ><a href="#"></a>GOLD</li>
                            <li><a href="#"></a>BUY</li>
                            <li><a href="#"></a>SELL</li>
                            <li><a href="#"></a>OR</li>
                        </ul>
                        {/*silver-jewelry*/}
                        <div className={"silver-jewelry"}>
                            <ul>
                                <li><a href="#"></a>WOMAN</li>
                                <li><a href="#"></a>Rings</li>
                                <li><a href="#"></a>Sets</li>
                                <li><a href="#"></a>Engagement rings</li>
                                <li><a href="#"></a>Wedding rings</li>
                                <li><a href="#"></a>Pendants</li>
                                <li><a href="#"></a>Crosses</li>
                                <li><a href="#"></a>Necklaces</li>
                                <li><a href="#"></a>Chain</li>
                                <li><a href="#"></a>Bracelets</li>
                                <li><a href="#"></a>Other</li>
                            </ul>

                            {/*watches-jewelry*/}
                            <div className={"watches-jewelry"}>
                                <li><a href="#"></a>MAN</li>
                                <li><a href="#"></a>Rings</li>
                                <li><a href="#"></a>Wedding rings</li>
                                <li><a href="#"></a>Pendants</li>
                                <li><a href="#"></a>Crosses</li>
                                <li><a href="#"></a>Chain</li>
                            </div>

                            <div className={"watches-jewelry"} >
                                <li><a href="#"></a>CHILDREN</li>
                                <li><a href="#"></a>Rings</li>
                                <li><a href="#"></a>Earrings</li>
                                <li><a href="#"></a>Pendants</li>
                                <li><a href="#"></a>Crosses</li>
                                <li><a href="#"></a>Bracelets</li>
                                <li><a href="#"></a>Other</li>
                            </div>
                        </div>
                    </div>
                    :
                    <span>{title}</span>

            }
        </div>
    );
};

export default SearchCategory;