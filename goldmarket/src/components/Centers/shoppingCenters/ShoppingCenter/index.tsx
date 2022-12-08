import { Type } from "../../types";


const ShoppingCenter = ({ id, img, title }: Type) => {
    return (
        <div id={id} className="sopping_center">
            <img src={img} alt="SoppingCenter" />
            <h4>{title}</h4>
        </div>
    );
}

export default ShoppingCenter;
