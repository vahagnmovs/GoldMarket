import { menuInfo } from "./constants"; 
import MenuItem from "./menuItem";



const WhyGoldCenter = () => {

    return(
        <div>
            <div className='WhyGoldCenter'>
            <h1> WhyGoldCenter </h1>
            <div className='WGCtext'>
                <span>
                    WHIT A LONG HISTORY OF FINE CRAFTSMAANSHIP, 
                    ITALIAN GOLD JEWELRY BRINGS SHOPSISTICATION
                    AND STYLE TO ANY OUTFIT
                </span>
            </div>

            </div>            
            <div className='containerMenu'>
                {menuInfo.map(e => <MenuItem key={e.id} {...e} /> )}
            </div>        
        </div>
    )
}


export default WhyGoldCenter;