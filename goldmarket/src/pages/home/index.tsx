import React from 'react';
import Layout from "src/components/layout";
import Navbar from "src/components/navbar";
import Header from "src/components/header/header";
import PriceList from "src/components/header/priceList";
import Footer from "src/components/footer";
import Index from "src/components/recommendedSeleres";
import SwitchComponent from 'src/components/centers/switchComponents';
import BestSales from "src/components/bestSales";
import MostViewed from "src/components/mostViewed";
import SignUp from "src/components/signUp";
<<<<<<< HEAD
import AboutUs from "../../components/information/aboutUs";
import WhyGoldCenter from "../../components/information/whyGoldCenter";
import SellWithUs from "../../components/information/sellWithUs";
import NewCollection from "src/components/newCollections";
=======
import AboutUs from "src/components/information/aboutUs";
import WhyGoldCenter from "src/components/information/whyGoldCenterBanner";
import SellWithUs from "src/components/information/sellWithUsBanner";
>>>>>>> 564dc4a5ca76e59006c6135a41ad8c56e5769341

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
                <NewCollection />
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