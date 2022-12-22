import React from 'react';

type TOrderHistory = {
    id: number;
    nam2: string;
    nam3: string;
    nam4: string;
}

const OrderHistory = ({ id, nam2, nam3, nam4 }: TOrderHistory) => {
	// FIXME: irakan OrderHistory anunner@  dnel
	return (
		<tr>
			<td>{id}</td>
			<td>{nam2}</td>
			<td>{nam3}</td>
			<td>{nam4}</td>
			<td><button>ivhrinvcr</button></td>
		</tr>
	);
};

export default OrderHistory;