import React from 'react';
import SearchCategory from './openingNavbar';
import open from 'src/style/Icons/open.png';
import search from 'src/style/Icons/search.png';
import Search from './search';

function Navbar() {
	return (
		// products_manu
		<div className='products_manu-content'>
			<div className={'container-top products_manu flex justify-between align-center'}>
				<nav className={'navbar flex justify-between align-center'}>
					<ul className={'navbar_ul flex justify-between align-center'}>
							<SearchCategory title={'GOLD JEWELRY'} />
						<li className={'flex justify-between align-center'}>
							<SearchCategory title={'SILVER JEWELRY'} />
						</li>
						<li className={'flex justify-between align-center'}>
							<SearchCategory title={'WATCHES'} />
						</li>
						<li className={'flex'}>
							<div>STORES</div>
						</li>
					</ul>
				</nav>

				{/*searching*/}
				<>
					<Search />
				</>
			</div>
		</div >
	);

}

export default Navbar;