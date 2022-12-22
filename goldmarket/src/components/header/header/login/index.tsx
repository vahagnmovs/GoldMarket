import React, { useState } from 'react';
import user from 'src/style/Icons/user.png';

const Login = () => {
	const [isOpenLogInModal, setIsOpenLogInModal] = useState(false);

	return (
		<div className='relative'>
			{
				isOpenLogInModal
					?
					<div className='modal_login'>
						<h3>LOGIN</h3>
						<span>X</span>
						<div>
							<input type='email' placeholder={'E-MAIL'} />
							<input type='password' placeholder={'PASSWORD'} />
							<button>LOGIN</button>
						</div>
						<span>FORGOT YOUR PASSWORD?</span>
						<span>NEW CUSTOMER? </span>
						<h3>Start Now</h3>
						<button>REGISTRATION</button>
					</div>
					:
					<li onClick={() => setIsOpenLogInModal(true)} className={'login_content flex align-center'}>
						<span>LOGIN</span>
						<img className={'user_icon'} src={user} alt='user_icon' />
					</li>
			}
		</div>
	);
};

export default Login;