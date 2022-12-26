import React from 'react';
import Layout from 'src/components/layout';
import Navbar from 'src/components/navbarr';
import Header from 'src/components/header/header';
import PriceList from 'src/components/header/priceList';
import Footer from 'src/components/footer';
import Index from 'src/components/recommendedSeleres';
import SwitchComponent from 'src/components/centers/switchComponents';
import BestSales from 'src/components/bestSales';
import MostViewed from 'src/components/mostViewed';
import AboutUs from 'src/components/information/aboutUs';
import NewCollection from 'src/components/newCollections';

import SellWithUs from 'src/components/information/sellWithUsBanner';
import WhyGoldCenter from 'src/components/information/whyGoldCenterBanner';
import Video from 'src/components/header/video';
import ProductPage from 'src/components/productInfo';
import AddProduct from 'src/components/product/AddProduct';
import SignUp from 'src/components/signUp';
import ProductInfo from "../../components/productInfo";
import LoginModal from "../../components/loginModal";
import Products from "../products";




const Home = () => {
	return (
		<Layout
			HeaderComponent={<Header />}
			NavBarComponent={<Navbar />}
			FooterComponent={<Footer />}
		>
			<>
				{/*<AddProduct />*/}
				{/*<SignUp/>*/}
				<PriceList />
				<Video />
				<SwitchComponent />
				<NewCollection />
				<SellWithUs />
				<BestSales />
				<Index />
				<MostViewed />
				<WhyGoldCenter />
				<AboutUs />
				{/*<Products/>*/}
			</>
		</Layout>
	);
};

export default Home;
