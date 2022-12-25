import React from 'react';
import { useNavigate } from 'react-router-dom';

type TOrderHistory = {
    id: number;
    nam2: string;
    nam3: string;
    nam4: string;
}

const OrderHistory = ({ id, nam2, nam3, nam4 }: TOrderHistory) => {

	// FIXME: irakan OrderHistory anunner@  dnel
	const navigate = useNavigate();
	const handleNavigateOrderInfo = () => {
		navigate('/orderinfo');
	}; 

	return (
			<tbody >
			<tr>
				<td>{id}</td>
				<td>{nam2}</td>
				<td>{nam3}</td>
				<td>{nam4}</td>
				<td ><button  onClick={handleNavigateOrderInfo}>{'DETALES >'}</button></td>
			</tr>

			</tbody>



	);
};

export default OrderHistory;