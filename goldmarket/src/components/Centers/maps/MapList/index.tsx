import { setNewLengthData } from '../../switchComponents/setNewLengthData';
import { useNavigate } from 'react-router-dom';
import { MAP } from '../../feikData/Maps';
import Map from '../Map';

const MapList = () => {
    const navigate = useNavigate()
    const maps = setNewLengthData(MAP)
    const handleShouMore = () => {
        navigate("/shoppingcenter")
    }
    const handleShoppingCentr = (title: string) => {
        if (title === "Yerevan") {
            navigate("/shoppingcenter/yerevan")
        }
    }
    return (
            <div className="products">
                {
                    maps.map(item => <Map key={
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
    );
}
export default MapList;
