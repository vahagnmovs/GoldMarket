import React from 'react';
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/header";
import PriceList from "../../components/Header/priceList";
import ReactVideoPlayer from "../../components/Header/reactVideoPlayer";
// import Information from "../../components/Information";
import Footer from "../../components/Footer";
import RecommendedSellers from "../../components/recommendedSeleres/recommendedSellers";
import SwitchComponent from '../../components/Centers/switchComponents';
import Collections from "../../components/newCollections/Collections";
import BestSales from "../../components/bestSales/BestSales";
import MostViewed from "../../components/mostViewed/mostViewed";
import WhyGoldCenter from '../../components/Information/WhyGoldCenter';
import AboutUs from '../../components/Information/AboutUs';
import SellWithUs from '../../components/Information/SellWithUs';

const Home = () => {
    return (
        <Layout
            HeaderComponent={<Header />}
            NavBarComponent={<Navbar />}
            FooterComponent={<Footer />}
        >
            <>
                <PriceList />
                {/* <ReactVideoPlayer /> */}
                {/* <SwitchComponent /> */}
                {/* <Collections /> */}
                {/* <SellWithUs />
                <BestSales />
                <RecommendedSellers />
                <MostViewed />
                <WhyGoldCenter />
                <AboutUs /> */}
            </>
        </Layout>
    );
};

export default Home;