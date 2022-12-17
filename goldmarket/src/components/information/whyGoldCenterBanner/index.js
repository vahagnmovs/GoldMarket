import {menuInfo} from "./constants";
import MenuItem from "./menuItem";
import "src/style/components/_Why_Gold_Center.scss"


const WhyGoldCenter = () => {

    return (
        <div className={"Why_Gold_Center justify-between"}>
            <div className="WhyGoldCenter text-center">
                <h1> Why Goldventer </h1>
                  <p>
                    WHIT A LONG HISTORY OF FINE CRAFTSMAANSHIP,
                    ITALIAN GOLD JEWELRY BRINGS SHOPSISTICATION
                    AND STYLE TO ANY OUTFIT
                </p>
            </div>
            <div className="container_menu flex text-center">
                {menuInfo.map(e => <MenuItem key={e.id} {...e} />)}
            </div>
        </div>
    )
}


export default WhyGoldCenter;