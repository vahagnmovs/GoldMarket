import React from 'react';

// interface IDetals {
//     product: {
//         [key: string]: string
//     }
// }

export const ProductDetals: React.FC<any> = ({ product, product: { name }}) => {



	return (
		<div className='productDetals'>

			<div className='categorys'>
				{/* {name} */}
				{
					// productKeys.map(pr => {
                    
					// 	return <div className='catItem' key={Math.random()}>
					// 		<h5> {pr} </h5>
					// 		<p> { product[pr] } </p>
					// 	</div>;
					// })
				}
			</div>
		</div>
	);
};
