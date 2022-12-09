import React from 'react';
import SearchCategory from "./searchCategory";
import "./Nam_style.scss"
import open from "../../style/Icons/open.png";
import "./NightMod.scss"
import search from "../../style/Icons/search.png"

function Navbar() {
    return (
        <nav>
            <div className={"nav"}>
                <div className={"search"}>
                    <div>
                        <div className={"nav_category"}>
                            <SearchCategory title={"GOLD JEWELRY"}/>
                            <img className={"GOLD"}
                                 src={open}
                                 alt=""/>
                            <SearchCategory title={"SILVER JEWELRY"}/>
                            <img className={"SILVER"}
                                 src={open}
                                 alt=""/>
                            <SearchCategory title={"WATCHES"}/>
                            <div>STORES</div>
                            <img className={"Watches"}
                                 src={open}
                                 alt=""/>
                        </div>
                    </div>
                    <p className={"text"}> SEARCH</p>
                    <img className={"png"} src={search} alt=""/>
                </div>
                <label className="switch">
                    <input type="checkbox"
                    />
                    <span className="slider"></span>
                </label>
            </div>
        </nav>
    );
};

export default Navbar;