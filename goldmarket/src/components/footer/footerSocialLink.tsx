import React,{useState} from 'react';
import {TSocialLinks} from '../../data/footerData';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import Redirect from "../redirect/redirect";

type TFooterSocialLinkProps = {
	data: TSocialLinks[];
}

const FooterSocialLink = ({ data}: TFooterSocialLinkProps) => {
	console.log(data,'data')
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();
	const [isRedirect, setIsRedirect] = useState(false);
	const [url, setUrl] = useState('./')

	const toggleModal = (url: string) => {
		setUrl(url)
		setModal(!modal);
	};

	if(modal) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}

	const handleRedirect = () => {
		setIsRedirect(!isRedirect);
	};

	if (isRedirect) {
		window.location.href = url;
		return null;
	}

	return (
	//FIXME: change key...
		<>
			{data.map(elem => <li key={Math.random()}>
				<button onClick={() => toggleModal(elem.path)} id={elem.img} className="btn-modal">
					<img src={elem.img} alt=""/>
				</button>
			</li>)}

			{modal && (
				<div className="modal">
					<div  className="overlay"></div>
					<div className="modal-content">

						<div className={'redirect-container'}>
							<h2>You are About to redirect to external link</h2>
							<button onClick={() => setIsRedirect(!isRedirect)} className={'show_more_btn'}>Confirm</button>
						</div>
						<figure>
							<div></div><div></div>
							<div></div><div></div>
							<div></div><div></div>
							<div></div><div></div>
						</figure>

						<button className="close-modal" onClick={() => setModal(!modal)}>
							X
						</button>
					</div>
				</div>
			)}

		</>
	);
};

export {FooterSocialLink};