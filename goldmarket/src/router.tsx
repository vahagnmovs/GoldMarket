import React from 'react';
import {createBrowserRouter} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import ShoppingRegions from "./components/ShoppingRegions";
import NotFoundPage from "./pages/NotFound";
import Cities from "./components/Cities";
import Products from "./pages/Products";
import ShoppingCenters from "../src/components/Centers/maps/ShoppingCenters";
import Collections from './components/Centers/products/Collections';
import ShoppingCentersList from './components/Centers/shoppingCenters/ShoppingCentersList';


const router = createBrowserRouter([{
    path: '/',
    element: <Home/>
}, {
    path: '/home',
    element: <Home/>
}, {
    path: '/about',
    element: <About/>
}, {
    path: '/shoppingregions',
    element: <ShoppingRegions/>
}, {
    path: '/shoppingregions/cities',
    element: <Cities/>
}, {
    path: '/shoppingregions/cities/:id',
    element: <Products/>
}, {
    path: "/shoppingcenter",
    element: <ShoppingCenters/>
}, {
    path: "/collections",
    element: <Collections/>
}, {
    path: "/shoppingcenter/yerevan",
    element: <ShoppingCentersList/>
}, {
    path: '*',
    element: <NotFoundPage/>
}
]);

export default router;