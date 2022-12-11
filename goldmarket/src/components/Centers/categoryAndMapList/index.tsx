import svg from "components/style/Icons/next-16.svg";
import { useNavigate } from "react-router-dom";
import DrawCategoryAndMap from "components/Centers/drawCategoryAndMap";
import { IdataProp } from "components/Centers/types";

interface IcategoryAndMapListProp{
    data: IdataProp[];
    flag?: boolean;
}
const CategoryAndMapList = ({ data, flag }: IcategoryAndMapListProp) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (flag) {
            navigate("/collections") 
        } else { 
            navigate("/shoppingcenters")
            
        }
    }
    return (
        <div className="products">
            {
                data.map(item => <DrawCategoryAndMap key={
                    item.id
                }
                    {...item} flag={flag} />)
            }
            <button className="buttonSowMor"
                onClick={() => handleNavigate()}>
                <p>SHOW MORE</p>
                <img src={svg}
                    alt="Shou More" /></button>
        </div>
    );
}
export default CategoryAndMapList;
