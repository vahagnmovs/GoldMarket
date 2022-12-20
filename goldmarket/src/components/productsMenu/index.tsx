import React from 'react';
import { Outlet } from 'react-router-dom';



const SellerNavBar: React.FC = () => {


	return(
		<>
			<header className='header'>
				<div>
					<span> DASHBOARD </span>
				</div>
				<div>
					<span> PRODUCT </span>
				</div>
				<div>
					<span> SOLD </span>
				</div>
				<div>
					<span> FAKE JEWELRY </span>
				</div>
				<div>
					<span> SETTINGS </span>
				</div>
				<div>
					<span> LOG OUT </span>
				</div>
			</header>

			<main>
				<Outlet />
			</main>

		</>
	);
};

export default SellerNavBar;