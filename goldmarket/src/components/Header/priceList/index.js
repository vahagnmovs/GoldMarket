import React, {useState} from 'react';
import GoldPriceList from "./goldPriceList";
import PhoneNumber from "./phoneNumber";

const PriceList = () => {
    const [isShowMoreBtn, getIsShowMoreBtn] = useState(true)

    return (
        <div className={"container_price"}>
            <div className={"container_price2"}>
                <div className={"Phone"}>
                    <PhoneNumber/>
                </div>
                <div className={"e"}>
                    <GoldPriceList isShowMoreBtn={isShowMoreBtn}/>
                </div>
            </div>
            <div className={"Show-more"}>
                <button onClick={() => getIsShowMoreBtn(!isShowMoreBtn)}>SHOW MORE</button>
            </div>

        </div>
    );
};

export default PriceList;