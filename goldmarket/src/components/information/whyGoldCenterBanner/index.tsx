import React from 'react';
import {menuInfo} from './constants';
import MenuItem from './menuItem';

const WhyGoldCenter = () => {
	return (
		<div className={'bg_white'}>
			<div className={'why_gold_center container justify-between'}>
				<div className="why_gold_center text-center">
					<h3>Why Goldcenter ?</h3>
					<p>
						WHIT A LONG HISTORY OF FINE CRAFTSMAANSHIP,<br/>
						ITALIAN GOLD JEWELRY BRINGS SHOPSISTICATION<br/>
						AND STYLE TO ANY OUTFIT
					</p>
				</div>
				<div className="container_menu flex text-center">
					{menuInfo.map(e => <MenuItem key={e.id} {...e} />)}
				</div>
			</div>
		</div>
	);
};

export default WhyGoldCenter;