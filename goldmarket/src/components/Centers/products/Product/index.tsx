import svg from "../../../../Icons/next-16.svg";
import { Type } from "../../types";

const Product = ({ id, title, img }: Type) => {
    return (
        <div id={id} className="product">
            <img src={img} alt="Nkar" />
            <h4>{title}</h4>
            <div className="icon_next">
                <div className="explore">
                    <p>EXPLORE</p>
                </div>
                <img src={svg} alt="next" />
            </div>
        </div>
    );
}

export default Product;
