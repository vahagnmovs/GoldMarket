import React from 'react';
import SearchCategory from "./searchCategory";
import open from "../../style/Icons/open.png";
import search from "../../style/Icons/search.png"
import "../../../src/style/elements/_navbar.scss"
import "../../../src/style/base/_globals.scss"
import "../../../src/style/base/_reset.scss"
import "../../../src/style/utilities/_variables.scss"

function Navbar() {
    return (
        // products_manu
        <div className='products_manu-content'>
            <div className={"container-top products_manu flex justify-between"}>
                <nav className={"navbar flex justify-between align-center"}>
                    <ul className={"navbar_ul flex justify-between align-center"}>
                        <li className={"flex justify-between align-center"}>
                            <SearchCategory title={"GOLD JEWELRY"} />
                            <img className={"GOLD "} src={open} alt="" />
                        </li>
                        <li className={"flex justify-between align-center"}>
                            <SearchCategory title={"SILVER JEWELRY"} />
                            <img className={"SILVER"} src={open} alt="" />
                        </li>
                        <li className={"flex justify-between align-center"}>
                            <SearchCategory title={"WATCHES"} />
                            <img className={"Watches"} src={open} alt="" />
                        </li>
                        <li className={"flex"}>
                            <div>STORES</div>
                        </li>
                    </ul>
                </nav>

                {/*searching*/}
                <div className={"searching flex justify-between align-center"}>
                    <div className={"searching flex justify-between align-center"}>
                        <div className={"text"}>SEARCH</div>
                        <img className={"searching-icon"} src={search}
                            alt="search" />
                    </div>

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