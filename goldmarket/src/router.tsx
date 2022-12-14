import ShoppingCentersRegionsList from "src/components/Centers/shoppingCentersRegionsList";
import ShoppingCentersList from "src/components/Centers/shoppingCentersList";
import CollectionsList from 'src/components/Centers/collectionsList';
import {createBrowserRouter} from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";
import Redirect from "src/components/Redirect/redirect";

const router = createBrowserRouter([{
    path: "/",
    element: <Home/>
}, {
    path: "/home",
    element: <Home/>
}, {
    path: "/facebook",
    element: <Redirect url={"https://www.facebook.com/"}/>
}, {
    path: "/ok",
    element: <Redirect url={"https://ok.ru/"}/>
}, {
    path: "/vk",
    element: <Redirect url={"https://vk.com/"}/>
}, {
    path: "/instagram",
    element: <Redirect url={"https://instagram.com/"}/>
}, {
    path: "/telegram",
    element: <Redirect url={"https://telegram.com/"}/>
}, {
    path: "/about",
    element: <About/>
}, {
    path: "/collections",
    element: <CollectionsList/>
}, {
    path: "/shoppingcenters",
    element: <ShoppingCentersList/>
}, {
    path: "/shoppingcenters/:title:id",
    element: <ShoppingCentersRegionsList/>
}, {
    path: '*',
    element: <NotFoundPage/>
}
]);

export default router;