import { IdataProp } from "components/Centers/types";
import { useNavigate } from "react-router-dom";


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
        <div id={id} className="product" onClick={()=> handleCgitem()}>
            <img src={img} alt="Nkar" />
            <h4>{title}</h4>
        </div>
    );
}
 export default DrawCollactionAndSoppingCenter;