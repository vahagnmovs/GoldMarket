import React, { useRef } from 'react';
import SearchCategory from './openingNavbar';
import Search from './search';


function Navbar() {
	return (
		// products_manu
		<div className='products_manu-content'>
			<div className={'container-top products_manu flex justify-between align-center'}>
				<nav className={'navbar flex justify-between align-center'}>
					<ul className={'navbar_ul flex justify-between align-center'}>
						<div className={'flex justify-between align-center'}>
							<SearchCategory title={'GOLD JEWELRY'} />
						</div>
						<div className={'flex justify-between align-center'}>
							<SearchCategory title={'SILVER JEWELRY'} />
						</div>
						<div className={'flex justify-between align-center'}>
							<SearchCategory title={'WATCHES'} />
						</div>
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