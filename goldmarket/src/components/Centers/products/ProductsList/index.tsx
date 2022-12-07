import { setNewLengthData } from "../../switchComponents/setNewLengthData";
import SwitchButton from "../../switchButton";
import { PRODUCT } from "../../feikData";
import { useNavigate } from "react-router-dom";
import Product from "../Product";
import svg from "../../../../Icons/next-16.svg"
interface productsListProp {
    checked: boolean;
    handleCeckid: () => void;
}

const ProductsList = ({ handleCeckid, checked }: productsListProp) => {
    const products = setNewLengthData(PRODUCT)
    const navigate = useNavigate()
    const handleShouMore = () => {
        navigate("/collections")

    }
    return (
        <div className="contener">
            <SwitchButton checked={checked} handleCeckid={handleCeckid} />
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
        </div>
    );
}
export default ProductsList;
