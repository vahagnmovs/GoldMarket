import DrawCollactionAndSoppingCenter from "components/Centers/drawCollactionAndSoppingCenter";
import { MAP } from "components/data/mapData";

const ShoppingCentersList = () => {
  return (
    <div className="contener">
      <div className="shopping_collections">
        <h2>Shopping centers</h2></div>
      <div className="products">
        {
          MAP.map(item => <DrawCollactionAndSoppingCenter key={item.id} {...item} flag={true} />)
        }
      </div>
    </div>
  )
}

export default ShoppingCentersList;