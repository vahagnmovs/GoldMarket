import React from 'react';
import '../loginModal/style.css';

const LoginModal = () => {
	return (
		<div className="modal_box">
			<div>
				<button>X</button>
				<h2>LOGIN</h2>
				<input type="email" placeholder="E-MAIL" />
				<input type="password" placeholder="PASSWORD" />
				<button>LOGIN</button>
				<p>FORGOT YOUR PASSWORD?</p>
				<p>NEW CUSTOMER?</p>
				<h2>START NOW</h2>
				<button>REGISTRATION</button>
			</div>
		</div>

	);
};

export default LoginModal;