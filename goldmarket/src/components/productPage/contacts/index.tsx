import React from 'react';
const Contacts = () => {
	return (
		<div style={{display:'flex', justifyContent:'space-around'}}>

			<div>
				<h2 style={{color:'#1D3865'}}>Contacts</h2>
				<div>
					<ul >
						<li>VIBER/WHATSAPP _______________________044 999 585</li>
						<li>PHONE NUMBER _______________________044 999 585</li>
						<li>SELLER NAME _______________________</li>
						<li>SELLER ADDRESS _______________________ PUSHKIN 21</li>
						<li>E-MAIL _______________________ @ALDORO</li>
						<li>FACEBOOK _______________________ FB.COM/ALDORO</li>
					</ul>
					<div>
						<button>GO TO COMPANY PAGE</button>
					</div>
				</div>
			</div>
			<div>
				<h2 >map</h2>
			</div>
		</div>
	);
};

export default Contacts;