import React from 'react';
import Layout from "src/components/layout";
import Navbar from "src/components/navbar";
import Header from "src/components/header/header";
import PriceList from "src/components/header/priceList";
import ReactVideoPlayer from "src/components/header/reactVideoPlayer";
// import information from "src/components/information";
import Footer from "src/components/footer";
import RecommendedSellers from "src/components/recommendedSeleres/recommendedSellers";
import SwitchComponent from 'src/components/centers/switchComponents';
import Collections from "src/components/newCollections";
import BestSales from "src/components/bestSales";
import MostViewed from "src/components/mostViewed";
import AboutUs from 'src/components/information/aboutUs';
import SellWithUs from 'src/components/information/sellWithUs';
import SingIn from "src/components/signUp";
import ProductPage from "src/components/productPage";
import SignUp from "src/components/signUp";
import WhyGoldCenter from "src/components/information/whyGoldCenter";

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
                {/*<sellWithUs />*/}
                {/*<BestSales />*/}
                {/*<RecommendedSellers />*/}
                {/*<MostViewed />*/}
                {/*<WhyGoldCenter />*/}
                {/*<aboutUs />*/}
            </>
        </Layout>
    );
};

export default Home;