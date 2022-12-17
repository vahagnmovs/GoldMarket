import DrawCollactionAndSoppingCenter from "src/components/centers/drawCollactionAndSoppingCenter";
import "src/style/components/_centr_style.scss";
import { MAP } from "src/data/mapData";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import Header from "src/components/header/header";
import Navbar from "src/components/navbar";
import Footer from "src/components/footer";


const ShoppingCentersRegionsList = () => {
    const { id } = useParams();
    const currentCity = useMemo(() => MAP.find(city => city.id === id), [id]);
    return (
        <div >
            <Header />
            <Navbar />
            <div className="shopping_center_contener">
                <div className="shopping_center_list">
                    <div className="shopping_center_region">
                        <h3>{`Shopping centers ${currentCity?.title}`}</h3>
                    </div>
                    <div className={"flex flex-wrap justify-between"}>
                        {
                            currentCity?.shops.map(item => <DrawCollactionAndSoppingCenter key={item.id} {...item} />)
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ShoppingCentersRegionsList;