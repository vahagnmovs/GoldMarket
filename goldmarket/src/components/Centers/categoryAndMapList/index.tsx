import svg from "src/style/Icons/next-16.svg";
import { useNavigate } from "react-router-dom";
import DrawCategoryAndMap from "src/components/Centers/drawCategoryAndMap";
import { TDataProps } from "src/components/Centers/types";
import "src/style/components/_centr_style.scss";

type TCategoryAndMapListProps = {
    data: TDataProps[];
    shoppingOrMap?: boolean;
}

const CategoryAndMapList = ({ data, shoppingOrMap }: TCategoryAndMapListProps) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (shoppingOrMap) {
            navigate("/collections");
        } else {
            navigate("/shoppingcenters");
        }
    }
    return (
        <div className={"product_button   justify-center"}>
            <div className="products flex  flex-wrap justify-between ">
                {
                    data.map(item => <DrawCategoryAndMap key={
                        item.id
                    }{...item} shoppingOrMap={shoppingOrMap} />)
                }
            </div>
            <div className="buttonSowMor flex justify-center">
                <button
                    onClick={handleNavigate}>
                    <div className={"flex align-center justify-center"}>
                        <p>SHOW MORE</p>
                        <img src={svg} alt="Shou More" />
                    </div>
                </button>
            </div>
        </div>
    );
};
export default CategoryAndMapList;
