import React from 'react';
import SearchCategory from "./openingNavbar";
import open from "src/style/Icons/open.png";
import search from "src/style/Icons/search.png"
import "src/style/elements/_navbar.scss"
import "src/style/base/_globals.scss"
import "src/style/base/_reset.scss"
import "src/style/utilities/_variables.scss"
import Search from "./search";

function Navbar() {
    return (
        // products_manu
        <div className='products_manu-content'>
            <div className={"container-top products_manu flex justify-between"}>
                <nav className={"navbar flex justify-between align-center"}>
                    <ul className={"navbar_ul flex justify-between align-center"}>
                        <li className={"flex justify-between align-center"}>
                            <SearchCategory title={"GOLD JEWELRY"} />
                        </li>
                        <li className={"flex justify-between align-center"}>
                            <SearchCategory title={"SILVER JEWELRY"} />
                        </li>
                        <li className={"flex justify-between align-center"}>
                            <SearchCategory title={"WATCHES"} />
                        </li>
                        <li className={"flex"}>
                            <div>STORES</div>
                        </li>
                    </ul>
                </nav>

                {/*searching*/}
                <div className={"searching flex justify-between align-center"}>
                    <Search/>

                    <div className={"flex justify-between align-center"}>
                        <label className="switch"> <input
                            type="checkbox" />

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