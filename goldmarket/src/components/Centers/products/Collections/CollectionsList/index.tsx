import { Collections } from "../../../../../data/categoryData";
import Collection from "../Collection";
import Header from "../../../../Header/header";
import Footer from "../../../../Footer";
import Navbar from "../../../../Navbar";

const CollectionsList = () => {
  return (
      <>
          <Header/>
          <Navbar/>
          <div className="contener">
              <div className="shopping_collections">
                  <h2>Collections</h2></div>
              <div className="products">
                  {
                      Collections.map(item => <Collection key={item.id}{...item} />)
                  }
              </div>
          </div>
          <Footer/>


  </>


  )
}

export default CollectionsList;