import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';
import Navbar from "./components/Navbar";

// pages
import ShoppingRegions from "./components/ShoppingRegions";
import Cities from "./components/Cities";
import Products from "./pages/Products";
import Product from "./components/Product";

function App() {
    return (
        <div>
            {/*HEADER*/}
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'shoppingregions'} element={<ShoppingRegions/>}>
                    <Route path={'cities'} element={<Cities/>}/>
                    <Route path={'shoppingcenters'} element={<ShoppingCenters />} />
                    <Route path={':products'} element={<Products/>}/>
                    <Route path={':id'} element={<Product/>}/>
                </Route>
                <Route path={'*'} element={(<div>404 NOT FOUND</div>)}/>
            </Routes>
            {/*FOOTER*/}
        </div>
    );
}

export default App;
