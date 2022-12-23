import React, {createRef, RefObject, useRef} from 'react';
import Slider from 'react-slick';
import {products} from 'src/data/products';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/style/components/_mostViewed.scss';
import {Link} from "react-router-dom";

type TMostViewed = {
	title?: string
}

const MostViewed = ({title}:TMostViewed) => {
	const ref = useRef<any>(null);
	const handleNextSlide = () => {
		ref.current.slickNext();
	};

	const handlePrevSlide = () => {
		ref.current.slickPrev();
	};

	const settings = {
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: true,
		autoplay: true,
		arrows: false,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	};

	return (
		<div className={'most'}>
			<div className={'most_Viewed'}>
				<div className={'most_Viewed_title text-center justify-between  align-center'}>
					<h3>{title}</h3>
					<div className={'most_Viewed_button flex'}>
						<button className="show_more_btn" onClick={handlePrevSlide}>{"<"}<span></span></button>
						<button className="show_more_btn" onClick={handleNextSlide}>{">"}<span></span></button>

					</div>
				</div>
				<Slider ref={ref} {...settings}>
					{
						products.map(product =>
							<div key={product.productID}>
								<div className="badge_item_most">
									<div className="relative_most">
										<img  className={'relative_img'} src={product.images[0]} alt="list_item"/>
									</div>
									<div className="list_content">
										<div className="flex justify-between">
											<div>
												<span className="currentPrice">{product.prices.currentPrice}$</span>
												<span className="oldPrice">{product.prices.oldPrice}$</span>
											</div>
											<div>
												{/*FIXME: after having norm seller data will change this to normal seller name*/}
												{product.sellerID.split('-')[0]}
											</div>
										</div>
										<p>{product.name}</p>
									</div>
								</div>
							</div>
						)
					}
				</Slider>
			</div>
		</div>

	);
};

export default MostViewed;