import { MAP } from '../../feikData/Maps'
import ShoppingCenter from '../ShoppingCentersRegions/ShoppingCenterRegion'

const ShoppingCenters = () => {
  
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

export default ShoppingCenters