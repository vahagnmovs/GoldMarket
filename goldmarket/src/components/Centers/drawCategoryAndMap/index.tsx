import svg from "src/style/Icons/next-16.svg";
import { IDataProp } from "src/components/Centers/types";
import { useNavigate } from "react-router-dom";

interface IdrawCategoryAndMapProp extends IDataProp {
    navigateShoppOrMapFlag?: boolean;
    
}

const DrawCategoryAndMap = ({ id, title, img, navigateShoppOrMapFlag}:IdrawCategoryAndMapProp ) => {
    const navigate = useNavigate()
    const handleCgitem = () => {
        if(!navigateShoppOrMapFlag){
            navigate(`/shoppingcenters/${title}&${id}`)
        }
    } 
    return (
        <div id={id} className="product" onClick={handleCgitem}>
            <img src={img} alt="Nkar" />
            <div className={"img-title flex"}>
                <h4>{title}</h4>
                <p>EXPLORE</p>
                <img src={svg} alt="next" />
            </div>

            {navigateShoppOrMapFlag && <div className="icon_next flex">

            </div>}
        </div>
    );
}
 export default DrawCategoryAndMap