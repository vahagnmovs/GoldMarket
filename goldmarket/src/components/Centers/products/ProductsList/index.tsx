import { setNewLengthData } from "../../switchComponents/setNewLengthData";
import { PRODUCT } from "../../feikData";
import { useNavigate } from "react-router-dom";
import Product from "../Product";
import svg from "../../../../Icons/next-16.svg"
const ProductsList = () => {
    const products = setNewLengthData(PRODUCT)
    const navigate = useNavigate()
    const handleShouMore = () => {
        navigate("/collections")

    }
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
                            () => handleShouMore()
                        }>
                        <p>SHOW MORE</p>
                        <img src={svg}
                            alt="Shou More" /></button>
                } </div>
    );
}
export default ProductsList;
