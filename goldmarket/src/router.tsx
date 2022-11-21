import React from 'react';
import {createBrowserRouter} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import ShoppingRegions from "./components/ShoppingRegions";
import NotFoundPage from "./pages/NotFound";
import Cities from "./components/Cities";
import Products from "./pages/Products";


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
    path: '*',
    element: <NotFoundPage/>
}
]);

export default router;