import React from "react";
import copyrightIcon from "../../../style/Icons/copyright.svg";
import "../../../style/elements/_footer.scss"
import "../../../style/base/_globals.scss"
import "../../../style/base/_reset.scss"
import "../../../style/utilities/_variables.scss"

import copyrightIcon from "src/style/Icons/copyright.svg";
import "./footre_end.scss";

const FooterEnd = () => {
    return (
        <div className={"footer_end"}>
            <ul className={"flex justify-between"}>
                <div className={"icon-end"}>
                    <img className={"copyrightIcon"} src={copyrightIcon} alt=""/>
                    <span>2022 Golden Center </span>
                </div>
                <li><a href={""}> Terms od Use </a></li>
                <li><a href={""}> Privacy Policy </a></li>
                <li><a href={""}> Sitemap </a></li>
            </ul>
        </div>

    );
};

export default FooterEnd;
