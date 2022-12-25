import React from 'react';
import settins from 'src/style/Icons/settins.svg';
import dashboard from 'src/style/Icons/dashboard.svg';
import order from 'src/style/Icons/order.svg';
import delivery from 'src/style/Icons/delivery.svg';
import logout from 'src/style/Icons/logout.svg';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
	const handleNavigateOrderHistory = () => {
		navigate('/orderhistory');
	};
	const handleNavigateDeliveryAddress = () => {
		navigate('/deliveryaddress');
	};
	const handleNavigateDashboard = () => {
		navigate('/dashboard');
	};
	const handleNavigateSettings = () => {
		navigate('/settings');
	};

	return (
		<div>
			<ul className='ul'>
				<li onClick={handleNavigateDashboard}>
					<img src={dashboard} alt='dashboard' />
					<span>DASHBOARD</span>
				</li>
				<li onClick={handleNavigateOrderHistory}>
					<img src={order} alt='order' />
					<span>ORDER HISTORY</span>
				</li>
				<li onClick={handleNavigateDeliveryAddress}>
					<img src={delivery} alt='delivery' />
					<span>DELIVERY ADDRESS</span>
				</li>
				<li onClick={handleNavigateSettings}>
					<img src={settins} alt='settins' />
					<span>SETTINGS</span>
				</li>
				<li>
					<img src={logout} alt='logout' />
					<span>LOG OUT</span>
				</li>
			</ul>
		</div>
	);
};

export default Dashboard;