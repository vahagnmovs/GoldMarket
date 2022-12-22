import React, { useState } from 'react';
import user from 'src/style/Icons/user.png';

const Login = () => {

	const [isOpenLogInModal, setIsOpenLogInModal] = useState(false);

	return (
		<div>
			{
				isOpenLogInModal
					?
					<form className={'box'}>
						<h1 className={'logo'}>LOGIN</h1>
						<div>
							<div className='group'>
								<input type='text' required />
								<span className='highlight'></span>
								<span className='bar'></span>
								<label>Name</label>
							</div>

							<div className='group'>
								<input type='text' required />
								<span className='highlight'></span>
								<span className='bar'></span>
								<label>Email</label>
							</div>
							<button className='button-65'>Submit</button>

							<p>Forgot your password?</p>

							<div className="separator">New customer?</div>

							<h2>Start Now</h2>
							<button className='button_2 button-65'>REGISTRATION</button>
						</div>
					</form>


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