import DrawCollactionAndSoppingCenter from "src/components/Centers/drawCollactionAndSoppingCenter";
import "../shoppingCentersRegionsStyle/style.css";
import { MAP } from "src/data/mapData";
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
                    currentCity?.shops.map(item => <DrawCollactionAndSoppingCenter key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default ShoppingCentersRegionsList;