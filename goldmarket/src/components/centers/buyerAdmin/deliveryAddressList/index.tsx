import React from 'react';
import Dashboard from '../dashboard';
import DeliveryAddress from '../deliveryAddress';

// FIXME: hanel datan erb irakan datan unenanq

const data = [{
	id: '1',
	name: 'VAHAGN',
	lastName: 'MOVSESYAN',
	ridge: '950 Ridge RD C25',
	claymont: 'P4332 Claymont',
	xx: 'DE 19703-3538',
	yy: 'United States(302)xxxxx67'
}, {
	id: '2',
	name: 'VAHAGN',
	lastName: 'MOVSESYAN',
	ridge: '950 Ridge RD C25',
	claymont: 'P4332 Claymont',
	xx: 'DE 19703-3538',
	yy: 'United States(302)xxxxx67'
}, {
	id: '3',
	name: 'VAHAGN',
	lastName: 'MOVSESYAN',
	ridge: '950 Ridge RD C25',
	claymont: 'P4332 Claymont',
	xx: 'DE 19703-3538',
	yy: 'United States(302)xxxxx67'
}];
const DeliveryAddressList = () => {
	return (
		<div>
			<Dashboard />
			{data.map(item => <DeliveryAddress radio={'radio'} key={item.id} {...item} />)}
		</div>
	);
};

export default DeliveryAddressList;