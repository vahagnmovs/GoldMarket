import React from 'react';
import {useState} from 'react';
import './index.css';

type RedirectProps = {
    url: string,
}

const Redirect = ({url}: RedirectProps) => {
	const [isRedirect, setIsRedirect] = useState(false);

	const handleRedirect = () => {
		setIsRedirect(!isRedirect);
	};

	if (isRedirect) {
		window.location.href = url;
		return null;
	}

	return (
		<div>
			<div className={'redirect-container'}>
				<h2>You are About to redirect to external link</h2>

				<button onClick={handleRedirect}>Confirm</button>
			</div>
			<figure>
				<div></div><div></div>
				<div></div><div></div>
				<div></div><div></div>
				<div></div><div></div>
			</figure>

		</div>
	);
};

export default Redirect;