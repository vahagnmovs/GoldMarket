import React from 'react';
import Header from 'src/components/header/header';
import GoldPriceList from 'src/components/header/priceList/goldPriceList';
import Dashboard from '../dashboard';

const DashboardList = () => {
	return (
		<>
			<Header />
			<div className='dash'>
				<Dashboard />
			</div>
			<div className='container'>
				<h3>Dashboard</h3>
				<GoldPriceList show={false} length={8} />
			</div>
		</>

	);
};

export default DashboardList;