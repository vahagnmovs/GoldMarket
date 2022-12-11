import CategoryOrMapList from "components/Centers/categoryOrMapList";
import { Collections } from "components/data/categoryData";
import SwitchButton from "components/Centers/switchButton";
import { setNewLengthData } from "./setNewLengthData";
import { MAP } from "components/data/mapData";
import { useState } from "react";
import "../styles/style.css";

const SwitchComponent = () => {
    const [checked, setChecked] = useState(true);
    const products = setNewLengthData(Collections);
    const maps = setNewLengthData(MAP);
    const handleCeckid = () => {
        setChecked(!checked);
    }
    return (
        <div className="contener">
            <SwitchButton checked={checked} handleCeckid={handleCeckid} />
            {checked
                ? <CategoryOrMapList data={products} flag={true}/>
                : <CategoryOrMapList data={maps}/> }
        </div>
    )
}

export default SwitchComponent;