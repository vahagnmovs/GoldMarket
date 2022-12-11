import "components/Centers/shoppingCentersRegionsStyle/styles/style.css";
import CategoryAndMapList from "components/Centers/categoryAndMapList";
import { Collections } from "components/data/categoryData";
import SwitchButton from "components/Centers/switchButton";
import { setNewLengthData } from "./setNewLengthData";
import { MAP } from "components/data/mapData";
import { useState } from "react";

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
                ? <CategoryAndMapList data={products} flag={true}/>
                : <CategoryAndMapList data={maps}/> }
        </div>
    )
}

export default SwitchComponent;