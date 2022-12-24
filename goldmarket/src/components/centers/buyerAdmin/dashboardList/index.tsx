import React from 'react';
import GoldPriceList from 'src/components/header/priceList/goldPriceList';
import Dashboard from '../dashboard';

const DashboardList = () => {
	return (
		<div>
			<Dashboard title={'Dashboard'}/>
			<GoldPriceList  show={false}/>
		</div>
	);
};

export default DashboardList;