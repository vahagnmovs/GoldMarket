import React from 'react';
import Header from 'src/components/header/header';
import Dashboard from '../dashboard';
import OrderHistory from '../orderHistory';

// FIXME: hanel datan erb irakan datan unenanq
const data = [{
	id: Math.random(),
	nam2: 'name',
	nam3: 'name',
	nam4: 'name',
}, {
	id: Math.random(),
	nam2: 'name',
	nam3: 'name',
	nam4: 'name',
}, {
	id: Math.random(),
	nam2: 'name',
	nam3: 'name',
	nam4: 'name',
}, {
	id: Math.random(),
	nam2: 'name',
	nam3: 'name',
	nam4: 'name',
},];

const OrderHistoryList = () => {
	return (<>
		<Header />
		<div className='dash'>
				<Dashboard />
			</div>
		<div className='container'>
			<div className='OrderHistoryList'>
				<h3>Order history</h3>
				<table className='table-price1'>
					<thead>
						<tr>
							<th>ORDER DATE & TIME</th>
							<th>ORDER NUMBER</th>
							<th>SOLD BY</th>
							<th>ORDER TOTAL</th>
							<th>ACTION</th>
						</tr>
					</thead>
					{data.map(item => <OrderHistory key={item.id} {...item} />)}
				</table>
			</div>

		</div>
	</>
	);
};

export default OrderHistoryList;