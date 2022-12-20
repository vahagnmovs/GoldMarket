import React from 'react';
import svg from 'src/style/Icons/next-16.svg';
import { TDataProps } from 'src/components/centers/types';
import 'src/style/components/_centr_style.scss';

const DrawCategoryOrCollection = ({ id, title, img }: TDataProps) => {
	return (
		<div id={id} className="product">
			<img src={img} alt="Nkar" />
			<div className={'img-title  text-center'}>
				<h4>{title} </h4>
				<div>
					<span> EXPLORE </span>
					<img src={svg} alt="next" />
				</div>
			</div>
		</div>
	);
};
export default DrawCategoryOrCollection;