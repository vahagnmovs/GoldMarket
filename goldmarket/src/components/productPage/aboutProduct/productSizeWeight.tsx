import React, {useState} from 'react';
import '../styleProductPage.css';

interface ProductWeightProps {
    sizeOrWeight: number[]
    title: string
}
const ProductSizeWeight = ({sizeOrWeight, title}:ProductWeightProps, ) => {
	const [indexSizeOrWeight, setIndexSizeOrWeight] = useState(0);
	const clickElement = (i: number) => {
		setIndexSizeOrWeight(i);
	};
	return (
		<>
			<p>{title}</p>
			<div style={{display: 'flex', flexDirection: 'row',}}>
				{sizeOrWeight.map((item, i) =>(
					<ul
						key={i}
						onClick={() => (clickElement(i))}
					>
						<li
							style={{border: '1px solid black', padding: '7px 20px 5px 20px', cursor:'pointer'}}
							className={indexSizeOrWeight === i ? 'activeWeight' : ''}
						>{item}
						</li>
					</ul>
				))}
			</div>
		</>
	);
};

export {ProductSizeWeight} ;