import DrawCollactionAndSoppingCenter from "src/components/centers/drawCollactionAndSoppingCenter";
import { Collections } from "src/data/categoryData";
import Navbar from "src/components/navbar";
import Footer from "src/components/footer";
import Header from "src/components/header/header";

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