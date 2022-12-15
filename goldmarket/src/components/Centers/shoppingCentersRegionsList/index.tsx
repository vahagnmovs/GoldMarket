import DrawCollactionAndSoppingCenter from "src/components/Centers/drawCollactionAndSoppingCenter";
import "src/style/components/_centr_style.scss";
import { MAP } from "src/data/mapData";
import { useParams } from "react-router-dom";
import {useMemo} from "react";


const ShoppingCentersRegionsList = () => {
    const { id } = useParams();
    const currentCity = useMemo(() => MAP.find(city => city.id === id), [id]);
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