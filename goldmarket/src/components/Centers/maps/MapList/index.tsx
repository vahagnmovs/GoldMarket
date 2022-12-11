import { setNewLengthData } from "components/Centers/switchComponents/setNewLengthData";
import svg from "components/style/Icons/next-16.svg";
import { useNavigate } from "react-router-dom";
import { MAP } from "components/data/mapData";
import Map from "components/Centers/maps/Map";

const MapList = () => {
    const navigate = useNavigate();
    const maps = setNewLengthData(MAP);
    return (
        <div className="products">
            {
                maps.map(item => <Map key={
                    item.id
                }
                    {...item} />)
            }
            <button className="buttonSowMor"
                onClick={
                    () => navigate("/shoppingcenters")
                }>
                <p>SHOW MORE</p>
                <img src={svg}
                    alt="Shou More" /></button>
        </div>
    );
}
export default MapList;
