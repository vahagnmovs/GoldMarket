import React from 'react';
const Card = ({image}: any) => {
	return (
		<div>
			<div style={{
				width: 200,
				height: 200,
				border: '1px solid gray',
				color: 'rgba(255, 255, 255, 0.5)',
			}}>
				<img src={image} height={198} alt="no Photo"/>
			</div>
		</div>
	);
};
export default Card;
