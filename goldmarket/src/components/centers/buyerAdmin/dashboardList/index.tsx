import React from 'react';
import GoldPriceList from 'src/components/header/priceList/goldPriceList';
import Dashboard from '../dashboard';

const DashboardList = () => {
	return (
		<div>
			<Dashboard title={'Dashboard'}/>
			<GoldPriceList isShowMoreBtn={true} />
		</div>
	);
};

export default DashboardList;