import React from 'react';
import 'src/style/components/_centr_style.scss';
import { Collections } from 'src/data/categoryData';
import SwitchButton from 'src/components/centers/switchButton';
import setNewLengthData from './setNewLengthData';
import { MAP } from 'src/data/mapData';
import { useState } from 'react';
import CategoryList from 'src/components/centers/categorys/categoryList';
import MapList from 'src/components/centers/maps/mapList';

const SwitchComponent = () => {
	const [checked, setChecked] = useState(true);
	const products = setNewLengthData(Collections);
	const maps = setNewLengthData(MAP);
	const handleCeckid = () => {
		setChecked(!checked);
	};
	return (
		<div className="switch_container flex justify-between dir-col">
			<SwitchButton checked={checked} handleCeckid={handleCeckid} />
			{checked
				? <CategoryList data={products} />
				: <MapList data={maps} />}
		</div>
	);
};
export default SwitchComponent;