import { Collections } from "components/data/categoryData";
import Collection from "../Collection";

const CollectionsList = () => {
  return (
    <div className="contener">
      <div className="shopping_collections">
        <h2>Collections</h2></div>
      <div className="products">
        {
          Collections.map(item => <Collection key={item.id}{...item} />)
        }
      </div>
    </div>
  )
}

export default CollectionsList;