import React from 'react';
import viber from "../../../../style/Icons/viber.png"
import whatsApp from "../../../../style/Icons/whatsapp.png"

function PhoneNumber() {
    return (
        <div className={"container_phone"}>
            <div className={"phone_info"}>
                <div className={'phone_icons'}>
                    <img className={"viber"} src={viber} alt=""/>
                    <img className={"whatsApp"} src={whatsApp} alt=""/>
                </div>
                <span className={"number"}>+374 94490006</span>
            </div>
            <span>2022-03-12</span>
        </div>
    );
};

export default PhoneNumber;