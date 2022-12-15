import "src/style/components/_centr_style.scss";
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
        <div className="switch_container flex justify-between dir-col">
            <SwitchButton checked={checked} handleCeckid={handleCeckid} />
            {checked
                ? <CategoryAndMapList data={products} navigateShoppOrMapFlag={true} />
                : <CategoryAndMapList data={maps} />}
        </div>
    )
}

export default SwitchComponent;