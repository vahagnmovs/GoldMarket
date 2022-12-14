import React, {useState} from 'react';
import GoldPriceList from "./goldPriceList";
import PhoneNumber from "./phoneNumber";
import "src/style/base/_globals.scss"

const PriceList = () => {
    const [isShowMoreBtn, getIsShowMoreBtn] = useState(true)

    return (
        <div className={"bg_color"}>
            <div className={"container_price"}>
                <div className={"container_price2"}>
                    <div className={"Phone"}>
                        <PhoneNumber/>
                    </div>
                    <div >
                        <GoldPriceList isShowMoreBtn={isShowMoreBtn}/>
                    </div>
                </div>
                <div className={"Show-more"}>
                    <button onClick={() => getIsShowMoreBtn(!isShowMoreBtn)}>SHOW MORE</button>
                </div>

            </div>
        </div>

    );
};

export default PriceList;