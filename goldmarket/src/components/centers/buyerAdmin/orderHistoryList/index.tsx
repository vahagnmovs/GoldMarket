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
			<table className='table'>
				<tr>
					<td>ORDER DATE & TIME</td>
					<td>ORDER NUMBER</td>
					<td>SOLD BY</td>
					<td>ORDER TOTAL</td>
					<td>ACTION</td>
				</tr>
				{data.map(item => <OrderHistory key={item.id} {...item} />)}
			</table>
		</div>

	);
};

export default OrderHistoryList;