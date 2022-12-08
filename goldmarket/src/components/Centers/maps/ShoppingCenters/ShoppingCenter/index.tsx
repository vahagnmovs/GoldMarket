import { useNavigate } from "react-router-dom";
import { Type } from "../../../types";

const ShoppingCentet = ({id, img, title}:Type) => {
  const navigate = useNavigate();
  return (
        <div id={id} className="map" onClick={()=>navigate(`/shoppingcenters/${title}/${id}`)}>
            <img src={img} alt="Map" />
            <h4>{title}</h4>
        </div>
  )
}

export default ShoppingCentet;