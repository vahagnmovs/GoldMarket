import ShoppingCentersRegionsList from 'components/Centers/shoppingCentersRegionsList';
import ShoppingCentersList from "components/Centers/shoppingCentersList";
import CollectionsList from 'components/Centers/collectionsList';
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";


const router = createBrowserRouter([{
    path: "/",
    element: <Home />
}, {
    path: "/home",
    element: <Home />
}, {
    path: "/about",
    element: <About />
}, {
    path: "/collections",
    element: <CollectionsList />
}, {
    path: "/shoppingcenters",
    element: <ShoppingCentersList />
}, {
    path: "/shoppingcenters/:title:id",
    element: <ShoppingCentersRegionsList />
}, {
    path: '*',
    element: <NotFoundPage />
}
]);

export default router;