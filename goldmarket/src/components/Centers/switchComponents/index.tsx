import "src/components/Centers/shoppingCentersRegionsStyle/styles/style.css";
import CategoryAndMapList from "src/components/Centers/categoryAndMapList";
import { Collections } from "src/data/categoryData";
import SwitchButton from "src/components/Centers/switchButton";
import { setNewLengthData } from "./setNewLengthData";
import { MAP } from "src/data/mapData";
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
                ? <CategoryAndMapList data={products} flag={true} />
                : <CategoryAndMapList data={maps} />}
        </div>
    )
}

export default SwitchComponent;