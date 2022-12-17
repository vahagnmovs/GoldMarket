import { TDataProps } from "src/components/centers/types";
import { useNavigate } from "react-router-dom";

type TDrawCategoryAndMapProp = TDataProps & {
    navigateCollOrSoppFlag?: boolean;
}

const DrawCollactionAndSoppingCenter = ({ id, title, img, navigateCollOrSoppFlag }: TDrawCategoryAndMapProp) => {
    const navigate = useNavigate();
    const handleNavigateColleAndShopp = () => {
        if (navigateCollOrSoppFlag) {
            navigate(`/shoppingcenters/${title}&${id}`);
        }
    }
    return (
        <div id={id} className="product_centers " onClick={handleNavigateColleAndShopp}>
            <img src={img} alt="Nkar" />
            <div className={"city-title align-center text-center"} >
                <h4>{title}</h4>
            </div>
        </div>
    );
};
export default DrawCollactionAndSoppingCenter;