import { useNavigate } from "react-router-dom";
import { Type } from "../../../types";

const ShoppingCenterRegion = ({ id, img, title }: Type) => {
    const navigate = useNavigate();
    return (
        <div id={id} className="sopping_center" onClick={()=> navigate(`/shoppingcenters/${title}&${id}`)}>
            <img src={img} alt="SoppingCenter" />
            <h4>{title}</h4>
        </div>
    );
}

export default ShoppingCenterRegion;
