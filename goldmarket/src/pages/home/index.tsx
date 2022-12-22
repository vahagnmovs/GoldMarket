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
import AboutUs from '../../components/information/aboutUs';
import NewCollection from 'src/components/newCollections';
import SellWithUs from '../../components/information/sellWithUsBanner';
import WhyGoldCenter from '../../components/information/whyGoldCenterBanner';
import Video from '../../components/header/video';
import Dashboard from 'src/components/centers/dashboard';
import ProductPage from '../../components/productPage';
import AddProduct from 'src/components/product/AddProduct';


const Home = () => {
	return (
		<Layout
			HeaderComponent={<Header />}
			NavBarComponent={<Navbar />}
			FooterComponent={<Footer />}
		>
			<>
				{/*<ProductPage/>*/}
				{/*<AddProduct />*/}
				{/*<SignUp/>*/}
				<PriceList />
				<Video/>
				<SwitchComponent />
				<NewCollection />
				<SellWithUs />
				<BestSales />
				<Index />
				<MostViewed />
				<WhyGoldCenter />
				<AboutUs />
				<Dashboard/>
			</>
		</Layout>
	);
};

export default Home;
