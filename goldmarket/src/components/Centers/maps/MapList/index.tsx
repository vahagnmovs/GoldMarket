import { setNewLengthData } from '../../switchComponents/setNewLengthData';
import { useNavigate } from 'react-router-dom';
import SwitchButton from '../../switchButton';
import { MAP } from '../../feikData/Maps';
import { useState } from 'react';
import Map from '../Map';

interface mapListProp {
    checked: boolean;
    handleCeckid: () => void;
}

const MapList = ({ handleCeckid, checked }: mapListProp) => {
    const navigate = useNavigate()
    const [maps, setMaps] = useState({ maps: setNewLengthData(MAP) })
    const handleShouMore = () => {
        navigate("/shoppingcenter")
    }
    const handleShoppingCentr = (title: string) => {
        if (title === "Yerevan") {
            navigate("/shoppingcenter/yerevan")
        }
    }
    return (
        <div className="contener">
            <SwitchButton checked={checked} handleCeckid={handleCeckid} />
            <div className="products">
                {
                    maps.maps.map(item => <Map key={
                        item.id
                    }
                        {...item} handleShoppingCentr={handleShoppingCentr} />)
                }
                <button className="buttonSowMor"
                    onClick={
                        () => handleShouMore()
                    }>
                    <p>SHOW MORE</p>
                    <img src={"icons/next-16.svg"}
                        alt="Shou More" /></button>
            </div>
        </div>
    );
}
export default MapList;
