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
import OrderInfo from './components/centers/buyerAdmin/orderInfo';
import ProductPage from "src/pages/products";

const router = createBrowserRouter([{
	path: '/',
	element: <Home />
}, {
	path: '/home',
	element: <Home />
}, {
	path: '/products',
	element: <ProductPage />
},
//Social link
{
	path: '/facebook',
	element: <Redirect url={'https://www.facebook.com/profile.php?id=100088524672046'} />
}, {
	path: '/ok',
	//    FIXME: check pass.
	element: <Redirect url={'https://ok.ru/'} />
}, {
	path: '/vk',
	element: <Redirect url={'https://vk.com/id768387018'} />
}, {
	path: '/instagram',
	element: <Redirect url={'https://www.instagram.com/goldmarketproject/'} />
}, {
	path: '/telegram',
	element: <Redirect url={'https://web.telegram.org/z/'} />
},
//End Social link
{
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
	element: <OrderInfo />
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
}
]);

export default router;

