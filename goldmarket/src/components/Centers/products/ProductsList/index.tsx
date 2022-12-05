import { setNewLengthData } from "../../switchComponents/setNewLengthData";
import SwitchButton from "../../switchButton";
import { PRODUCT } from "../../feikData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Product from "../Product";
interface productsListProp {
    checked: boolean;
    handleCeckid: () => void;
}

const ProductsList = ({ handleCeckid, checked }: productsListProp) => {
    const [products, setProducts] = useState({ products: setNewLengthData(PRODUCT) })
    
    const navigate = useNavigate()
    const handleShouMore = () => {
        navigate("/collections")

    }
    return (
        <div className="contener">
            <SwitchButton checked={checked} handleCeckid={handleCeckid} />
            <div className="products">
                {
                    products.products.map(item => <Product{...item} key={
                        item.id
                    } />)
                }
                {
                <button className="buttonSowMor"
                        onClick={
                            () => handleShouMore()
                        }>
                        <p>SHOW MORE</p>
                        <img src={"icons/next-16.svg"}
                            alt="Shou More" /></button>
                } </div>
        </div>
    );
}
export default ProductsList;
