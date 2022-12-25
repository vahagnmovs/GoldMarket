import React from 'react';
import {TPaymentsMethods} from '../../data/footerData';
import {Link} from 'react-router-dom';

type TFooterPayments = {
    data: TPaymentsMethods[]
}

const FooterPayment = ({data}: TFooterPayments) => {
	return (
	//FIXME: change key...
		<>
			<h3>PAYMENTS METHODS</h3>
			<ul className={'payment_icons flex'}>
				{data.map(elem =>
					<li key={Math.random()}>
						<Link to={elem.path} target={elem.target}>
							<img src={elem.img} alt=""/>
						</Link>
					</li>
				)}
			</ul>
		</>
	);
};

export {FooterPayment};