import { IdataProp } from "src/components/Centers/types";
import { useNavigate } from "react-router-dom";
import "src/style/components/_centr_style.scss"
import svg from "../../../style/Icons/next-16.svg";


interface IdrawCategoryAndMapProp extends IdataProp {
    flag?: boolean;
    
}
const DrawCollactionAndSoppingCenter = ({ id, title, img, flag}:IdrawCategoryAndMapProp ) => {
    const navigate = useNavigate()
    const handleCgitem = () => {
        if(flag){
            navigate(`/shoppingcenters/${title}&${id}`)
        }
    } 
    return (
        // TODO
        <div id={id} className="product_centers " onClick={()=> handleCgitem()}>
            <img src={img} alt="Nkar" />
            <div className={"city-title align-center text-center"} >
                <h4>{title}</h4>
            </div>

        </div>
    );


}
 export default DrawCollactionAndSoppingCenter;