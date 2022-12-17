import svg from "src/style/Icons/next-16.svg";
import { TDataProps } from "src/components/centers/types";
import { useNavigate } from "react-router-dom";

// interface TDrawCategoryAndMapProps extends TDataProps{
//     shoppingOrMap?: boolean;
// }

type TDrawCategoryAndMapProps = TDataProps & {
    shoppingOrMap?: boolean;

}

const DrawCategoryAndMap = ({ id, title, img, shoppingOrMap }: TDrawCategoryAndMapProps) => {
    const navigate = useNavigate();
    const handleCgitem = () => {
        if (!shoppingOrMap) {
            navigate(`/shoppingcenters/${title}&${id}`);
        }
    }
    return (
        <div id={id} className="product" onClick={handleCgitem}>
            <img src={img} alt="Nkar" />
            <div className={"img-title  text-center"}>
                <h4>{title}</h4>
                {shoppingOrMap && <><span>EXPLORE</span>
                    <img src={svg} alt="next" /></>}
            </div>
        </div>
    );
};
export default DrawCategoryAndMap;