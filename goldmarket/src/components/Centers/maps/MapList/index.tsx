import { setNewLengthData } from '../../switchComponents/setNewLengthData';
import { useNavigate } from 'react-router-dom';
import { MAP } from '../../feikData/Maps';
import Map from '../Map';
import svg from "../../../../Icons/next-16.svg"

const MapList = () => {
    const navigate = useNavigate()
    const maps = setNewLengthData(MAP)
    const handleShouMore = () => {
        navigate("/shoppingcenter")
    }

    return (
            <div className="products">
                {
                    maps.map(item => <Map key={
                        item.id
                    }
                        {...item}/>)
                }
                <button className="buttonSowMor"
                    onClick={
                        () => handleShouMore()
                    }>
                    <p>SHOW MORE</p>
                    <img src={svg}
                        alt="Shou More" /></button>
            </div>
    );
}
export default MapList;
