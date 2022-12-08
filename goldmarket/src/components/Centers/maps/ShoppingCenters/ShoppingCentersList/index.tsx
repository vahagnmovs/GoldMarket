import ShoppingCenter from "../../ShoppingCentersRegions/ShoppingCenterRegion";
import { MAP } from "../../../feikData/Maps";

const ShoppingCentersList = () => {
  return (
    <div className="contener">
      <div className="shopping_collections"><h2>Shopping centers</h2></div>
      <div className="products">
        {
          MAP.map(item => <ShoppingCenter key={item.id}{...item} />)
        }
      </div>
    </div>
  )
}

export default ShoppingCentersList;