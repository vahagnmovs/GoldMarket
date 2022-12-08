import React from 'react';
import { createBrowserRouter } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import ShoppingRegions from "./components/ShoppingRegions";
import NotFoundPage from "./pages/NotFound";
import Cities from "./components/Cities";
import ShoppingCenters from "../src/components/Centers/maps/ShoppingCenters";
import Collections from './components/Centers/products/Collections';
import ShoppingCentersRegionsList from './components/Centers/maps/ShoppingCentersRegions/ShoppingCentersRegionsList';


const router = createBrowserRouter([{
    path: '/',
    element: <Home />
}, {
    path: '/home',
    element: <Home />
}, {
    path: '/about',
    element: <About />
}, {
    path: '/shoppingregions',
    element: <ShoppingRegions />
}, {
    path: '/shoppingregions/cities',
    element: <Cities />
}, {
    path: "/collections",
    element: <Collections />
}, {
    path: "/shoppingcenter",
    element: <ShoppingCenters />
}, {
    path: "/shoppingcenter/:title/:id",
    element: <ShoppingCentersRegionsList />
}, {
    path: '*',
    element: <NotFoundPage />
}
]);

export default router;