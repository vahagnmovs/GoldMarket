import React from 'react';
import {createBrowserRouter} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import ShoppingRegions from "./components/ShoppingRegions";
import NotFoundPage from "./pages/NotFound";


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
    path: '*',
    element: <NotFoundPage/>
}
]);

export default router;