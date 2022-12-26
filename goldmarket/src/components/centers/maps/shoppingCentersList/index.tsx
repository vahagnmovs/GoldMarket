import React from 'react';
import DrawMapOrShoppingCenters from 'src/components/centers/maps/drawMapOrShoppingCenter/indec';
import Footer from 'src/components/footer';
import Header from 'src/components/header/header';
import Navbar from 'src/components/navbarr';
import { MAP } from 'src/data/mapData';

const ShoppingCentersList = () => {
	return (
		<>
		<Header />
		<Navbar/>
		<div className="map_show_more">
			<div className="Shopping_centers">
				<h3>Shopping centers</h3></div>
			<div className="flex flex-wrap justify-between ">
				{
					MAP.map(item => <DrawMapOrShoppingCenters key={item.id} {...item} />)
				}
			</div>
		</div>
		<Footer />
		</>
		
	);
};

export default ShoppingCentersList;