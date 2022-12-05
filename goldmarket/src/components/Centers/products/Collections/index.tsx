import { PRODUCT } from '../../feikData'
import Collection from './Collection'

const Collections = () => {
  return (
    <div className="contener">
      <div className="shopping_collections"><h2>Shopping centers</h2></div>
      <div className="products">
                {
                    PRODUCT.map(item => <Collection key={item.id}{...item} />)
                }
    
            </div>
    </div>
  )
}

export default Collections