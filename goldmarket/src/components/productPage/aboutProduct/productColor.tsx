import React, {Component} from 'react';

class ProductColor extends Component {
	render() {
		return (

			<div className={'metal_collor'}>
				<p> Metall color:</p>
				<div className={'collor'}>
				</div>
				<div className={'fines  text-center'}>
					<span>
						Fineness: 585 - 14k
					</span>
				</div>
			</div>
		);
	}
}

export {ProductColor};