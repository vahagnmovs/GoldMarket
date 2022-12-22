import React, {useState} from 'react';
import SellerSignUp from './seller';
import BuyerSignUp from './buyer';

const signUp = () => {

	const [isBuyer, setIsBuyer] = useState(true);
	const toggleIsBuyer = () => {
		setIsBuyer(true);
	};
	const toggleIsSeller = () => {
		setIsBuyer(false);
	};

	return (
		<div>
			<span onClick={toggleIsBuyer}>BUYER</span>
			<span onClick={toggleIsSeller}>SELLER</span>
			{
				isBuyer
					?
					<BuyerSignUp/>
					:
					<SellerSignUp/>
			}
		</div>
	);
};

export default signUp;