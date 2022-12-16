import DrawCollactionAndSoppingCenter from "src/components/Centers/drawCollactionAndSoppingCenter";
import {MAP} from "src/data/mapData";
import {Collections} from "../../../data/categoryData";
import "src/style/components/_centr_style.scss"
import Footer from "../../Footer";
import Header from "../../Header/header";
import Navbar from "../../Navbar";

const ShoppingCentersList = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="map_show_more">
                <div className="Shopping_centers">
                    <h3>Shopping centers</h3></div>
                <div className="flex flex-wrap justify-between ">
                    {
                        MAP.map(item => <DrawCollactionAndSoppingCenter key={item.id} {...item} flag={true}/>)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ShoppingCentersList;