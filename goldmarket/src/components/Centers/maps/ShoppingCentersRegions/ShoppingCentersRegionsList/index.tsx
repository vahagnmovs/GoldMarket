import ShoppingCenter from "../ShoppingCenterRegion";
import "../ShoppingCentersRegionsStyle/style.css";
import { MAP } from "../../../feikData/Maps";
import { useParams } from "react-router-dom";

const ShoppingCentersRegionsList = () => {
    const { id } = useParams();
    const currentCity = MAP.find(city => city.id === id);
    return (
        <div className="shopping_center_contener">
            <div className="shopping_center_list">
                <div className="shopping_center_region">
                    <h2>{`Shopping centers ${currentCity?.title}`}</h2>
                </div>
                {
                    currentCity?.shops.map(item => <ShoppingCenter key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default ShoppingCentersRegionsList;