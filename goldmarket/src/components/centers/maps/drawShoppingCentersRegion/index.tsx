import React from 'react';
import { TDataProps } from 'src/components/centers/types';

const DrawShoppingCenterRegion = ({ id, title, img }: TDataProps) => {
	return (
		<div id={id} className="product">
			<img src={img} alt="Nkar" />
			<div className={'img-title  text-center'}>
				<h4>{title} </h4>
			</div>
		</div>
	);
};
export default DrawShoppingCenterRegion;