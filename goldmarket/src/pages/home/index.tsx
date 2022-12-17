import React from 'react';
import Layout from "src/components/layout";
import Navbar from "src/components/navbar";
import Header from "src/components/header/header";
import PriceList from "src/components/header/priceList";
import Footer from "src/components/footer";
import Index from "src/components/recommendedSeleres";
import SwitchComponent from 'src/components/centers/switchComponents';
import Collections from "src/components/newCollections";
import BestSales from "src/components/bestSales";
import MostViewed from "src/components/mostViewed";
import SignUp from "src/components/signUp";
import AboutUs from "src/components/information/aboutUs";
import WhyGoldCenter from "src/components/information/whyGoldCenterBanner";
import SellWithUs from "src/components/information/sellWithUsBanner";

const Home = () => {
    return (
        <Layout
            HeaderComponent={<Header />}
            NavBarComponent={<Navbar />}
            FooterComponent={<Footer />}
        >
            <>
                <SignUp/>
                <PriceList />
                <SwitchComponent />
                <Collections />
                <SellWithUs />
                <BestSales />
                <Index />
                <MostViewed />
                <WhyGoldCenter />
                <AboutUs />
            </>
        </Layout>
    );
};

export default Home;