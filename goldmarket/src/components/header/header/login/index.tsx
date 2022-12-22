import React, {useState} from 'react';
import Buyer from './buyer';
import Seller from './seller';
import user from 'src/style/Icons/user.png';
import LogInBuyer from './buyer';


const Login = () => {

	const [isOpenLogInModal, setIsOpenLogInModal] = useState(false);

	return (
		<div>
			{
				isOpenLogInModal
					?
					<LogInBuyer/>
					:
					<li onClick={() => setIsOpenLogInModal(true)} className={'login_content flex align-center'}>
						<span>LOGIN</span>
						<img className={'user_icon'} src={user} alt="user_icon"/>
					</li>
			}
		</div>
	//
		// <div>
		// 	<h3>LOGIN</h3>
		// 	<div>
		// 		<input type="email" defaultValue={'E-MAIL'}/>
		// 		<input type="password" defaultValue={'PASSWORD'}/>
		// 		<button>LOGIN</button>
		// 	</div>
		// 	<p>FORGOT YOUR PASSWORD </p>
		// 	<p>NEW CUSTOMER?</p>
		// 	<div>
		// 		<h3>START NEW</h3>
		// 		<button>REGISTRATION</button>
		// 	</div>
		// </div>
	);
};

export default Login;