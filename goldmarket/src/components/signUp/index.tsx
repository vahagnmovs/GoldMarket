import React, {useState} from 'react';
import SellerSignUp from './seller';
import BuyerSignUp from './buyer';

const SignUp = () => {

	const [isBuyer, setIsBuyer] = useState(true);
	const toggleIsBuyer = () => {
		setIsBuyer(true);
	};
	const toggleIsSeller = () => {
		setIsBuyer(false);
	};

	return (
		<div className={'sing_up_container'}>
			<div className={'buyer_seller flex '}>
				<button onClick={toggleIsBuyer}>BUYER</button>
				<button onClick={toggleIsSeller}>SELLER</button>
			</div>

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

export default SignUp;