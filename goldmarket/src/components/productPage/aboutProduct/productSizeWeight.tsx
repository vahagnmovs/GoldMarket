import React, { useState } from 'react';


interface ProductWeightProps {
	sizeOrWeight: string[]
	title: string
}
const ProductSizeWeight = ({ sizeOrWeight, title }: ProductWeightProps,) => {
	const [indexSizeOrWeight, setIndexSizeOrWeight] = useState(0);
	const clickElement = (i: number) => {
		setIndexSizeOrWeight(i);
	};
	return (
		<div className={'size_title'}>
			<p>{title}</p>
			<div className={'elements_size flex text-center'} >
				{sizeOrWeight.map((item, i) => (
					<ul key={i} onClick={() => (clickElement(i))}>
						<li className={indexSizeOrWeight === i ? 'activeWeight' : ''}>{item}</li>
					</ul>
				))}
			</div>
		</div>
	);
};

export { ProductSizeWeight };