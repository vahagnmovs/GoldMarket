import React from 'react';
import GoldPriceList from './goldPriceList';
import PhoneNumber from './phoneNumber';
import 'src/style/base/_globals.scss';

const PriceList = () => {

	return (
		<div className={'bg_color'}>
			<div className={'container_price'}>
				<div className={'container_price2'}>
					<div className={'Phone'}>
						<PhoneNumber />
					</div>
					<div >
						<GoldPriceList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceList;