import { IdataProp } from "src/components/Centers/types";
import { useNavigate } from "react-router-dom";


interface IdrawCategoryAndMapProp extends IdataProp {
    navigateCollOrSoppFlag?: boolean;
    
}
const DrawCollactionAndSoppingCenter = ({ id, title, img, navigateCollOrSoppFlag}:IdrawCategoryAndMapProp ) => {
    const navigate = useNavigate()
    const handleCgitem = () => {
        if(navigateCollOrSoppFlag){
            navigate(`/shoppingcenters/${title}&${id}`)
        }
    } 
    return (
        //TODO
        <div id={id} className="product" onClick={handleCgitem}>
            <img src={img} alt="Nkar" />
            <h4>{title}</h4>
        </div>
    );
}
 export default DrawCollactionAndSoppingCenter;