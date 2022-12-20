import React from 'react';
import banner2 from 'src/style/img/banner2.png';
import 'src/style/components/_banner.scss';

const AboutUs = () => {

	return (
		<div className={'banner_2'}>
			<div className="banner_2_center flex justify-between">
				<div className={'banner_img '}>
					<img src={banner2} alt={'banner2'}/>
				</div>
				<div className={'banner_2_title text-center'}>
					<h3>ABOUT US</h3>
					<p>lorem ipsumlorem lorem ipsumloremlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
						ipsumlorem ipsum </p>
					<button>ABOUT US</button>
				</div>
			</div>
		</div>

	);
};

export default AboutUs;
