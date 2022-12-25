import React from 'react';
import GoldPriceList from 'src/components/header/priceList/goldPriceList';
import Dashboard from '../dashboard';

const DashboardList = () => {
	return (
		<div>
			<Dashboard />
			<h4>MY ACCOUNT</h4>
			<h3>Dashboard</h3>
			<GoldPriceList show={false} length={8}/>
		</div>
	);
};

export default DashboardList;