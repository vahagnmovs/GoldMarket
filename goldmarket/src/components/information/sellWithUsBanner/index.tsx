import React from 'react';
import 'src/style/components/_banner.scss';
import banner1 from 'src/style/img/banner_sell.png';

const SellWithUs = () => {

	return (
		<div className={'banner_sell_with_us'}>
				<div className={'container relative'}>
					<div className={'banner_sell_with_us_text absolute'}>
						<h3>Sell with us</h3>
						<p>With a long history of fine craftsmanship,<br /> Italian gold jewelry from brings sophistication
							and style to any outfit. </p>
						<button>START SELLING</button>
					</div>
				</div>
		</div>
	);
};

export default SellWithUs;
