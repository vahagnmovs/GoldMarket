import React from 'react';
import GoldPriceList from 'src/components/header/priceList/goldPriceList';
import settins from 'src/style/Icons/settins.svg';
import dashboard from 'src/style/Icons/dashboard.svg';
import order from 'src/style/Icons/order.svg';
import delivery from 'src/style/Icons/delivery.svg';
import logout from 'src/style/Icons/logout.svg';
import './style.css';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/orderhistory');
	};
	return (
		<div>
			<h2>Dashboard</h2>
			<ul className="ul">
				<li>MY ACCOUNT</li>
				<li>
					<img src={dashboard} alt="dashboard" />
					<span>DASHBOARD</span>
				</li>
				<li onClick={handleNavigate}>
					<img src={order} alt="order" />
					<span>ORDER HISTORY</span>
				</li>
				<li>
					<img src={delivery} alt="delivery" />
					<span>DELIVERY ADDRESS</span>
				</li>
				<li>
					<img src={settins} alt="settins" />
					<span>SETTINGS</span>
				</li>
				<li>
					<img src={logout} alt="logout" />
					<span>LOG OUT</span>
				</li>
			</ul>
		</div>
	);
};

export default Dashboard;