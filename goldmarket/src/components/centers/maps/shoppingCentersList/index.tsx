import DrawMapOrShoppingCenters from "src/components/centers/maps/drawMapOrShoppingCenter/indec";
import { MAP } from "src/data/mapData";

const ShoppingCentersList = () => {
    return (
        <div className="map_show_more">
            <div className="Shopping_centers">
                <h3>Shopping centers</h3></div>
            <div className="flex flex-wrap justify-between ">
                {
                    MAP.map(item => <DrawMapOrShoppingCenters key={item.id} {...item} />)
                }
            </div>
        </div>
    );
};

export default ShoppingCentersList;