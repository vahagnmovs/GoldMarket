import React, { useState } from 'react';
import presentImg from "../../../style/img/present-product.png"
// import "../../../style/elements/_navbar.scss"
// import "../../../style/base/_globals.scss"
// import "../../../style/base/_reset.scss"
// import "../../../style/utilities/_variables.scss"

type SearchCategoryProps = {
    title: string,
}

function SearchCategory({ title }: SearchCategoryProps) {
    const [mouse, setMouse] = useState(false);

    return (
        <div
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
        >
            {
                mouse
                    ?
                    <div className='openning-navbar'>

                        {/*silver-jewelry*/}
                        <div className={"gold-jewelry flex justify-between"}>
                            <ul>
                                <li><a href="#">WOMAN</a></li>
                                <li><a href="#">Rings</a></li>
                                <li><a href="#">Sets</a></li>
                                <li><a href="#">Engagement rings</a></li>
                                <li><a href="#">Wedding rings</a></li>
                                <li><a href="#">Pendants</a></li>
                                <li><a href="#">Crosses</a></li>
                                <li><a href="#">Necklaces</a></li>
                                <li><a href="#">Chain</a></li>
                                <li><a href="#">Bracelets</a></li>
                                <li><a href="#">Other</a></li>
                            </ul>

                            {/*watches-jewelry*/}
                            <ul className={"watches-jewelry"}>
                                <li><a href="#">MAN</a></li>
                                <li><a href="#">Rings</a></li>
                                <li><a href="#">Wedding rings</a></li>
                                <li><a href="#">Pendants</a></li>
                                <li><a href="#">Crosses</a></li>
                                <li><a href="#">Chain</a></li>
                            </ul>

                            <ul className={"watches-jewelry"} >
                                <li><a href="#">CHILDREN</a></li>
                                <li><a href="#">Rings</a></li>
                                <li><a href="#">Earrings</a></li>
                                <li><a href="#">Pendants</a></li>
                                <li><a href="#">Crosses</a></li>
                                <li><a href="#">Bracelets</a></li>
                                <li><a href="#">Other</a></li>
                            </ul>

                            <img className='presentImg' src={presentImg} alt='' />

                        </div>


                    </div>
                    :
                    <span>{title}</span>

            }
        </div>
    );
};

export default SearchCategory;