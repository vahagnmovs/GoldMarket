import svg from "src/style/Icons/next-16.svg";
import { IdataProp } from "src/components/Centers/types";
import { useNavigate } from "react-router-dom";

interface IdrawCategoryAndMapProp extends IdataProp {
    flag?: boolean;
    
}

const DrawCategoryAndMap = ({ id, title, img, flag}:IdrawCategoryAndMapProp ) => {
    const navigate = useNavigate()
    const handleCgitem = () => {
        if(!flag){
            navigate(`/shoppingcenters/${title}&${id}`)
        }
    } 
    return (
        <div id={id} className="product" onClick={()=> handleCgitem()}>
            <img src={img} alt="Nkar" />
            <div className={"img-title  text-center"}>
                <h4>{title}</h4>
                    <span>EXPLORE</span>
                    <img src={svg} alt="next" />
            </div>

            {flag && <div className="icon_next ">

            </div>}
        </div>
    );
}
 export default DrawCategoryAndMap