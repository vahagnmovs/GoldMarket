import ShoppingCenter from "../ShoppingCenter"
import { Yerevan } from '../../feikData/Maps/Yerevan'
import "../style.css"

const ShoppingCentersList = () => {
    return (
        <div className="shopping_center_contener">
            <div className="shopping_center_list">
                <div className="shopping_center_region">
                   <h2>Shopping centers Yerevan</h2> 
                </div>
                {Yerevan.map(item => <ShoppingCenter key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default ShoppingCentersList