import React from 'react';
import DrawShoppingCenterRegion from 'src/components/centers/maps/drawShoppingCentersRegion';
import 'src/style/components/_centr_style.scss';
import { MAP } from 'src/data/mapData';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import Header from 'src/components/header/header';
import Navbar from 'src/components/navbarr';
import Footer from 'src/components/footer';


const ShoppingCentersRegionsList = () => {
	const { id } = useParams();
	const currentCity = useMemo(() => MAP.find(city => city.id === id), [id]);
	return (
		<div >
			<Header />
			<Navbar />
			<div className="shopping_center_contener">
				<div className="shopping_center_list">
					<div className="shopping_center_region">
						<h3>{`Shopping centers ${currentCity?.title}`}</h3>
					</div>
					<div className={'flex flex-wrap justify-between'}>
						{
							currentCity?.shops.map(item => <DrawShoppingCenterRegion key={item.id} {...item} />)
						}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default ShoppingCentersRegionsList;