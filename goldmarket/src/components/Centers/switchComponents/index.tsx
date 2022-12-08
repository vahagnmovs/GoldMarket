import { useState } from 'react'
import MapList from '../maps/MapList'
import ProductsList from '../products/ProductsList'
import "../styles/style.css"
import SwitchButton from '../switchButton'


const SwitchComponent = () => {
    const [checked, setChecked] = useState(true)
    const handleCeckid = () => {
        setChecked(!checked)
    }
    return (
        <div className="contener">
            <SwitchButton checked={checked} handleCeckid={handleCeckid} />
            {checked 
            ? <ProductsList />
             : <MapList />}
        </div>
    )
}

export default SwitchComponent;