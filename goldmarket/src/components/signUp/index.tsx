import React, {useState} from 'react';
import SellerSignUp from './seller';
import BuyerSignUp from './buyer';
import Header from "../header/header";
import Navbar from "../navbarr";
import Footer from "../footer";

const SignUp = () => {

	const [isBuyer, setIsBuyer] = useState(true);
	const toggleIsBuyer = () => {
		setIsBuyer(true);
	};
	const toggleIsSeller = () => {
		setIsBuyer(false);
	};

	return (
		<>
			<Header/>
			<Navbar/>
			<div className={'sign_up_container'}>
				<div className={'sign_up_content'}>
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
			</div>
			<Footer/>
		</>

	);
};

export default SignUp;