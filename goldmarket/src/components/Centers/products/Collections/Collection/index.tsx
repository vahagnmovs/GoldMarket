import { Type } from "../../../types";

const Collection = ({id, img, title}:Type) => {
  return (
        <div id={id} className="map">
            <img src={img} alt="Map" />
            <h4>{title}</h4>
        </div>
  )
}

export default Collection;