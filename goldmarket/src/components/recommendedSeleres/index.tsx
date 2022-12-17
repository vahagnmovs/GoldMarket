import "./style.css";
import Sellers from "./sellers";
import { data } from "src/data/recommendedSellers";
import { Link } from "react-router-dom";

data.length = 4;

const  RecommendedSeleres = () => {

    // const handleAllBrands = () => {
    //
    // }
    return (
        <div className={"recommended_sellers"}>
            <div>
                <h2>Recommended sellers</h2>
                <p className={"text"}>
                    With a long history of fine craftsmanship,
                    Italian gold jewelry from brings sophistication
                    and style to any outfit.
                </p>
            </div>
            {/*FIXME: change key*/}
            <div className={"block_recommender"}>

                {
                    data.map((product, index) => <Sellers key={index} {...product} />)
                }
            </div>
            <button className={"button_show_all_brands"}
                    // onClick={handleAllBrands} NAVIGATE-ov urish ej uxaki
            >
                <Link to={"allBrands"}> ALL BRANDS </Link>
            </button>
        </div>
    );
};

export default RecommendedSeleres;