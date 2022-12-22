import React from 'react';

const LogInBuyer = () => {
	return (
		<div>
			<h3>LOGIN</h3>
			<span>X</span>
			<div>
				<input type="email" placeholder={'E-MAIL'}/>
				<input type="password" placeholder={'PASSWORD'}/>
				<button>LOGIN</button>
			</div>
			<span>FORGOT YOUR PASSWORD?</span>
			<span>NEW CUSTOMER? </span>
			<h3>Start Now</h3>
			<button>REGISTRATION</button>
		</div>
	);
};

export default LogInBuyer;