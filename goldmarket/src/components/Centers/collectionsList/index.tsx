import DrawCollactionAndSoppingCenter from "components/Centers/drawCollactionAndSoppingCenter";
import { Collections } from "components/data/categoryData";


const CollectionsList = () => {
  return (
    <div className="contener">
      <div className="shopping_collections">
        <h2>Collections</h2></div>
      <div className="products">
        {
          Collections.map(item => <DrawCollactionAndSoppingCenter key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}

export default CollectionsList;