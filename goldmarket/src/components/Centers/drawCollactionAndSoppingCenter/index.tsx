import { IDataProp } from "src/components/Centers/types";
import { useNavigate } from "react-router-dom";


interface IdrawCategoryAndMapProp extends IDataProp {
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
        <div id={id} className="product_centers " onClick={()=> handleCgitem()}>
            <img src={img} alt="Nkar" />
            <div className={"city-title align-center text-center"} >
                <h4>{title}</h4>
            </div>

        </div>
    );
}
 export default DrawCollactionAndSoppingCenter;