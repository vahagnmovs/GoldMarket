import React from 'react';
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/header";
import PriceList from "../../components/Header/priceList";
import ReactVideoPlayer from "../../components/Header/reactVideoPlayer";
import Information from "../../components/Information";
import Footer from "../../components/Footer";
import RecommendedSellers from "../../components/recommendedSeleres/recommendedSellers";

const Home = () => {
    return (
        <Layout
            HeaderComponent={<Header/>}
            NavBarComponent={<Navbar/>}
            FooterComponent={<Footer/>}
        >
            <>
                <PriceList />
                {/*<ReactVideoPlayer />*/}
                <Information />
                <RecommendedSellers />
            </>
        </Layout>
    );
};

export default Home;