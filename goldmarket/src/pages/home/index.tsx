import React from 'react';
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Header from "../../components/header/header";
import PriceList from "../../components/header/priceList";
import ReactVideoPlayer from "../../components/header/reactVideoPlayer";
// import Information from "../../components/Information";
import Footer from "../../components/footer";
import RecommendedSellers from "../../components/recommendedSeleres/recommendedSellers";
import SwitchComponent from '../../components/centers/switchComponents';
import Collections from "../../components/newCollections";
import BestSales from "../../components/bestSales";
import MostViewed from "../../components/mostViewed";
import WhyGoldCenter from '../../components/information/WhyGoldCenter';
import AboutUs from '../../components/information/AboutUs';
import SellWithUs from '../../components/information/SellWithUs';
import SingIn from "../../components/signUp";
import ProductPage from "../../components/productPage";
import SignUp from "../../components/signUp";


const Home = () => {
    return (
        <Layout
            HeaderComponent={<Header />}
            NavBarComponent={<Navbar />}
            FooterComponent={<Footer />}
        >
            <>
                <SignUp/>
                {/*<PriceList />*/}
                {/*<ReactVideoPlayer />*/}
                {/*<SwitchComponent />*/}
                {/*<Collections />*/}
                {/*<SellWithUs />*/}
                {/*<BestSales />*/}
                {/*<RecommendedSellers />*/}
                {/*<MostViewed />*/}
                {/*<WhyGoldCenter />*/}
                {/*<AboutUs />*/}
            </>
        </Layout>
    );
};

export default Home;