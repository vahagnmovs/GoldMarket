import { setNewLengthData } from "../../switchComponents/setNewLengthData";
import svg from "../../../../style/Icons/next-16.svg";
import { useNavigate } from "react-router-dom";
import { PRODUCT } from "../../feikData";
import Product from "../Product";

const ProductsList = () => {
    const products = setNewLengthData(PRODUCT);
    const navigate = useNavigate();
    return (
        <div className="products">
            {
                products.map(item => <Product{...item} key={
                    item.id
                } />)
            }
            {
                <button className="buttonSowMor"
                    onClick={
                        () => navigate("/collections")
                    }>
                    <p>SHOW MORE</p>
                    <img src={svg}
                        alt="Shou More" /></button>
            } </div>
    );
}
export default ProductsList;
