import { useState } from 'react'
import MapList from '../maps/MapList'
import ProductsList from '../products/ProductsList'
import "../styles/style.css"


const SwitchComponent = () => {
    const [checked, setChecked] = useState(true)
    const handleCeckid = () => {
        setChecked(!checked)
    }
    return (
        <div>
            {checked 
            ? <ProductsList checked={checked} handleCeckid={handleCeckid}/>
             : <MapList checked={checked} handleCeckid={handleCeckid} />}
        </div>
    )
}

export default SwitchComponent;