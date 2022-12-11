import ProductsList from "components/Centers/products/ProductsList";
import SwitchButton from "components/Centers/switchButton";
import MapList from "components/Centers/maps/MapList";
import { useState } from "react";
import "../styles/style.css"

const SwitchComponent = () => {
    const [checked, setChecked] = useState(true);
    const handleCeckid = () => {
        setChecked(!checked);
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