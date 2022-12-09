import React, {useState} from 'react';
import SearchCategory from "./searchCategory";
import "./Nam_style.scss"
import open from "../../Icons/open.png";
import "./NightMod.scss"
import search from "../../Icons/search.png"

function Navbar() {

    const [searchBtn, setSearchBtn] = useState(true)


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
                    {
                        searchBtn
                            ?
                            <div onClick={() => setSearchBtn(!searchBtn)}>
                                <span className={"text"}> SEARCH</span>
                                <img className={"png"} src={search} alt=""/>
                            </div>
                            :
                            <div>
                                <button onClick={() => setSearchBtn(!searchBtn)}>X</button>
                                <input type="text" defaultValue={"ENTER YOUR KEYWORD"}/>
                                <img src="" alt=""/>
                                <p>ENTER YOUR KEYWORD</p>
                            </div>
                    }
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