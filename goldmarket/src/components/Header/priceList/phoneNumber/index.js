import viber from "components/style/Icons/viber.png"
import whatsApp from "components/style/Icons/whatsapp.png"
import "./phone.scss"

function PhoneNumber() {
    return (
        <div className={"container_phone"}>
            <div className={"phone_info"}>
                <div className={'icon'}>
                    <img className={"viber"} src={viber} alt=""/>
                    <img className={"whatsApp"} src={whatsApp} alt=""/>
                </div>
                <p className={"number"}>+374 94490006</p>
            </div>
            <span>2022-03-12</span>
        </div>
    );
};

export default PhoneNumber;