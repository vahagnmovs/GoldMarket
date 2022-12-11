import React from 'react';
import SearchCategory from "./searchCategory";

import open from "components/style/Icons/open.png";

import search from "components/style/Icons/search.png"

function Navbar() {
    return (
        // products_manu
        <div>
            <div className={"products_manu"}>
                <nav>
                    <SearchCategory title={"GOLD JEWELRY"}/>
                    <img className={"GOLD"} src={open} alt=""/>

                    <SearchCategory title={"SILVER JEWELRY"}/>
                    <img className={"SILVER"} src={open} alt=""/>

                    <SearchCategory title={"WATCHES"}/>
                    <div>STORES</div>
                    <img className={"Watches"} src={open} alt=""/>
                </nav>
                <div>

                    {/*searching*/}
                    <div className={"searching"}>
                        <span className={"text"}> SEARCH</span>
                        <img className={"png"} src={search} alt=""/>
                        <label className="switch"> <input type="checkbox"/>
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Navbar;