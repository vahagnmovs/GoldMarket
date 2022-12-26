import React from 'react';
import ShoppingCentersRegionsList from 'src/components/centers/shoppingCentersRegionList';
import ShoppingCentersList from 'src/components/centers/maps/shoppingCentersList';
import CollectionsList from 'src/components/centers/categorys/collectionsList';
import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/notFound';
import About from './pages/about';
import Home from './pages/home';
import Redirect from 'src/components/redirect/redirect';
import { SingleProduct } from './components/product/singleProduct';
import AddProduct from './components/product/AddProduct';
import OrderHistoryList from './components/centers/buyerAdmin/orderHistoryList';
import EditProduct from './components/product/editProduct';
import DeliveryAddressList from './components/centers/buyerAdmin/deliveryAddressList';
import DashboardList from './components/centers/buyerAdmin/dashboardList';
import OrderInfoList from './components/centers/buyerAdmin/orderInfoList';
import ProductPage from "src/pages/products";
import SettingsList from './components/centers/buyerAdmin/settingsList';
import SignUp from "./components/signUp";

const router = createBrowserRouter([{
	path: '/',
	element: <Home />
}, {
	path: '/home',
	element: <Home />
}, {
	path: '/products',
	element: <ProductPage />
}, {
	path: '/about',
	element: <About />
}, {
	path: '/collections',
	element: <CollectionsList />
}, {
	path: '/shoppingcenters',
	element: <ShoppingCentersList />
}, {
	path: '/shoppingcenters/:title:id',
	element: <ShoppingCentersRegionsList />
}, {
	path: '/orderhistory',
	element: <OrderHistoryList />
}, {
	path: '/deliveryaddress',
	element: <DeliveryAddressList />
}, {
	path: '/dashboard',
	element: <DashboardList />
}, {
	path: '/orderinfo',
	element: <OrderInfoList />
}, {
	path: '/settings',
	element: <SettingsList />
}, {
	path: '*',
	element: <NotFoundPage />
}, {
	path: '/products/:id',
	element: <SingleProduct />
}, {
	path: '/products/addproduct',
	element: <AddProduct />
}, {
	path: '/product/:id/editproduct',
	element: <EditProduct />
},{
	path: '/signUp',
	element: <SignUp />
}
]);

export default router;

