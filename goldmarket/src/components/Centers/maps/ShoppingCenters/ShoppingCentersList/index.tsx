import ShoppingCenter from "../../ShoppingCentersRegions/ShoppingCenterRegion";
import { MAP } from "../../../../../data/mapData";
import Header from "../../../../Header/header";
import Footer from "../../../../Footer";

const ShoppingCentersList = () => {
  return (
      <>
          <Header/>
          <div className="contener">
              <div className="shopping_collections"><h2>Shopping centers</h2></div>
              <div className="products">
                  {
                      MAP.map(item => <ShoppingCenter key={item.id}{...item} />)
                  }
              </div>
          </div>
          <Footer/>
      </>

  )
}

export default ShoppingCentersList;