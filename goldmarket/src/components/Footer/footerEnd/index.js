import React from 'react';
import copyrightIcon from "../../../Icons/copyright.svg"
import "./footre_end.scss"

const FooterEnd = () => {
    return (
        <div>

            <div className={"footer_text"}>
                <div className={"icon"}>
                    <img className={"copyrightIcon"} src={copyrightIcon} alt=""/>
                    <span>2022 Golden Center </span>
                </div>

                    <p>Terms od Use</p>
                    <p>TPrivacy Policy</p>
                    <p>Sitemap</p>
                </div>
        </div>
    );
};

export default FooterEnd;