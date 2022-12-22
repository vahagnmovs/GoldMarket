import React from 'react';
import 'src/style/components/_Why_Gold_Center.scss';
import {TMenuItemProps} from './type';
const MenuItem = ({ imgSrc, title }: TMenuItemProps) => {
	return(
		<div className="item_menu_div">
			<img  src={imgSrc} />
			<div className="item_title">
				<span> {title} </span>
			</div>
		</div>
	);
};

export default MenuItem;