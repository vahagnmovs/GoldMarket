import "./style.css";
import Sellers from "./sellers";
import {data} from "src/data/recommendedSellers";
import {Link} from "react-router-dom";

const RecommendedSellers = () => {
    const handleAllBrands = () => {
        // setIsClicked(isClicked => !isClicked)
        // console.log("mtnuma")
    }

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
            <div className={"block_recommender"}>
                {
                data.filter((elem, index) => index <= 5).map(elem => <Sellers key={
                        elem.id
                    }
                    {...elem}/>)
            } </div>

            <button className={"button_show_all_brands"}
                // onClick={handleAllBrands} NAVIGATE-ov urish ej uxaki
            >
                <Link to={"allBrands"}>
                    ALL BRANDS
                </Link>
            </button>

        </div>
    );
};


export default RecommendedSellers;
