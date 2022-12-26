import React from 'react';
import { Collections } from 'src/data/categoryData';
import Navbar from 'src/components/navbarr';
import Footer from 'src/components/footer';
import Header from 'src/components/header/header';
import DrawCategoryOrCollection from 'src/components/centers/categorys/drawCategoryOrCollection';

const CollectionsList = () => {
	return (<>
		<Header />
		<Navbar />
		<div className={'shou_Collections'}>
			<div className={'product_show_more'}>
				<div className={'Collections'}>
					<h3>Collections</h3>
				</div>
				<div className=" colection flex flex-wrap justify-between">
					{
						Collections.map(item => <DrawCategoryOrCollection key={item.id} {...item} />)
					}

				</div>
			</div>
		</div>
		<Footer />
	</>


	);
};

export default CollectionsList;