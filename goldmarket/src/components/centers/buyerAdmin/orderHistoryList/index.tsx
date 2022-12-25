import React from 'react';
import Dashboard from '../dashboard';
import OrderHistory from '../orderHistory';
import './style.css';
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
	return (
		<div>
			<Dashboard />
			<h4>MY ACCOUNT</h4>
			<h3>Order history</h3>
			<table className='table'>
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

	);
};

export default OrderHistoryList;