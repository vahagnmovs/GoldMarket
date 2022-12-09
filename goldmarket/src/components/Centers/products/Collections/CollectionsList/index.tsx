import { PRODUCT } from "../../../feikData";
import Collection from "../Collection";

const CollectionsList = () => {
  return (
    <div className="contener">
      <div className="shopping_collections">
        <h2>Collections</h2></div>
      <div className="products">
        {
          PRODUCT.map(item => <Collection key={item.id}{...item} />)
        }
      </div>
    </div>
  )
}

export default CollectionsList;