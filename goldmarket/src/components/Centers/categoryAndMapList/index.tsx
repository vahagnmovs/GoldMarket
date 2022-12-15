import svg from "src/style/Icons/next-16.svg";
import { useNavigate } from "react-router-dom";
import DrawCategoryAndMap from "src/components/Centers/drawCategoryAndMap";
import { IdataProp } from "src/components/Centers/types";
import "src/style/components/_centr_style.scss"

interface IcategoryAndMapListProp{
    data: IdataProp[];
    navigateShoppOrMapFlag?: boolean;
}


const CategoryAndMapList = ({ data, navigateShoppOrMapFlag }: IcategoryAndMapListProp) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (navigateShoppOrMapFlag) {
            navigate("/collections") 
        } else { 
            navigate("/shoppingcenters")
            
        }
    }
    return (
        <div className="products flex  flex-wrap justify-between">
            {
                data.map(item => <DrawCategoryAndMap key={
                    item.id
                }
                    {...item} navigateShoppOrMapFlag={navigateShoppOrMapFlag} />)
            }
            <button className="buttonSowMor align-center"
                onClick={handleNavigate}>
                <p>SHOW MORE</p>
                <img src={svg}
                    alt="Shou More" /></button>
        </div>
    );
}
export default CategoryAndMapList;
