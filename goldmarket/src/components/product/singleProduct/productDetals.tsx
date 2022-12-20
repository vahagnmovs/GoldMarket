import React from 'react';

interface IDetals {
    product: {
        [key: string]: string
    }
}

export const ProductDetals: React.FC<IDetals> = ({ product }) => {

	const productKeys = Object.keys(product).filter(e => {
		if (e !== 'id') {
			if (e !== 'photo') return e;
		}
	});
	// console.log(productKeys, 'productKeys')

	return (
		<div className='productDetals'>

			<h2> Product Detals </h2>
			<div className='categorys'>
				{
					productKeys.map(pr => {
                    
						return <div className='catItem' key={Math.random()}>
							<h5> {pr} </h5>
							<p> { product[pr] } </p>
						</div>;
					})
				}
			</div>
		</div>
	);
};
