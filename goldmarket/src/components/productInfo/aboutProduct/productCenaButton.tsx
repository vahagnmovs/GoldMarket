import React from 'react';

function ProductCenaButton() {
	return (
		<div className={'price_sellers_button_ext'}>
			<div >
				<span className={'new_price'}>1350$</span>
				<span className={'old_price'}>2100$</span>
			</div>
			<button>ADD TO CART </button>
			<div className={'sellers_by_title'}>
				<p>DESCRIPTION:</p>
				<span>
                                This vertical crescent moon diamond pendant
                                is an fashionable and gorgeous piece of jewelry.
                                The celestial necklace is perfect accompanyment to
                                any outfit and makes a great gift. With diamond accents
                                on a 925 sterling silver 18 chain this necklace is
                                custom made to sparkle for the perfect present for a
                                friend, daughter, partner, or self.
				</span>
			</div>
		</div>

	);
}

export {ProductCenaButton};