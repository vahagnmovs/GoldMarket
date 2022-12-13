import { products } from "src/data/products";
import AboutPage from "./aboutProduct";
import Description from "./description";
import SlideCarousel from "./slideCarousel";
import Contacts from "./contacts";

const ProductPage = () => {

    return (
        <>

            <AboutPage imagesInformation={products[0]}/>

            <Description info={products[0]}/>

            <Contacts/>

            <SlideCarousel images={products}/>

        </>

    );
};

export default ProductPage;