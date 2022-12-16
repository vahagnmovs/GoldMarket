import DrawCollactionAndSoppingCenter from "src/components/Centers/drawCollactionAndSoppingCenter";
import { Collections } from "src/data/categoryData";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import Header from "src/components/Header/header";

const CollectionsList = () => {
    return (
        <div className={"shou_Collections"}>
            <Header />
            <Navbar />
            <div className={"product_show_more"}>
                <div className={"Collections"}>
                    <h3>Collections</h3>
                </div>
                <div className=" flex flex-wrap justify-between">
                    {
                        Collections.map(item => <DrawCollactionAndSoppingCenter key={item.id} {...item} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CollectionsList;