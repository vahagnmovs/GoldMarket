import React from 'react';
import banner2 from 'src/style/img/banner2.png';

const AboutUs = () => {

	return (
		<div className={'container'}>
			<div className="bg_about flex justify-between align-center">
				<div className={'banner_img'}>
					<img src={banner2} alt={'banner2'}/>
				</div>
				<div className={'banner_about_text'}>
					<h3>ABOUT US</h3>
					<p>With a long history of fine craftsmanship, Italian gold jewelry from brings sophistication and style to any outfit.</p>
					<button>ABOUT US</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
