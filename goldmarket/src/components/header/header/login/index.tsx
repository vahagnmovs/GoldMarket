import React, {useState, useRef} from 'react';
import user from 'src/style/Icons/user.png';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {TLoginProps} from "./type";
import {collection, getDocs} from "firebase/firestore";
import {db} from 'src/firebase'
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import {useNavigate} from "react-router-dom";

const Login = ({toggleIsLogInUser, handelSeller}: TLoginProps) => {

	const [isOpenLogInModal, setIsOpenLogInModal] = useState(false);
	const [isBuyer, setIsBuyer] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [modal, setModal] = useState(false);
	const [error, setError] = useState('')
	const colRefBuyers = collection(db, "buyers")
	const colRefSellers = collection(db,"sellers")
	const ls = require('local-storage');
	const ref = useRef<null>(null);
	const navigate = useNavigate()

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>, input: string) => {
		if (input === "email") {
			setEmail(e.target.value)
		}
		if (input === "password") {
			setPassword(e.target.value)
		}
	}

	const toggleSellerSignIn = (e:React.FormEvent) => {
		e.preventDefault()
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				getDocs(colRefSellers)
					.then((snapshot) => {
						const sellers: any = []
						snapshot.docs.forEach((doc) => {
							sellers.push({
								...doc.data(),
							})
						})
						return sellers.find((seller: any) => seller.sellerID === user.uid)
					})
					.then(docSnap => {
						console.log(docSnap,";;;;;asjdhabx")
						if (docSnap.firstName) {
							ls('seller', docSnap)
							toggleIsLogInUser()
						}
					})
					.catch((error) => {
						setError("user do not find")
					})
			})
	}

	const toggleBuyerSignIn = (e:React.FormEvent) => {
		e.preventDefault()
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				getDocs(colRefBuyers)
					.then((snapshot) => {
						const buyers: any = []
						snapshot.docs.forEach((doc) => {
							buyers.push({
								...doc.data(),
							})
						})
						return buyers.find((buyer: any) => buyer.buyerID === user.uid)
					})
					.then(docSnap => {
						if (docSnap.firstName) {
							ls('buyer', docSnap)
							toggleIsLogInUser()
						}
					})
					.catch((error) => {
						setError("user do not find")
						console.log("saasaaaassss")
					})
			})
	}

	const toggleModal = () => {
		setModal(!modal);
	};

	useOnClickOutside(ref, () => setIsOpenLogInModal(false));

	const handelBuyer = () => {
		handelSeller('buyer')
		setIsBuyer(false)
	}
	const handelSellerChange = () => {
		handelSeller('seller')
		setIsBuyer(true)
	}

	return (
		<>
			<li onClick={() => setIsOpenLogInModal(true)} className={'login_content flex align-center'}>
				<span>LOGIN</span>
				<img className={'user_icon'} src={user} alt='user_icon' />
			</li>

			{
				isOpenLogInModal
				&&
				
				<div className="modal" >
					<div>{error}</div>
					<div onClick={toggleModal} className="overlay"></div>
					<div ref={ref}>


						<form className={'box'} onSubmit={ isBuyer ? toggleSellerSignIn : toggleBuyerSignIn }>
							<button className="close-modal" onClick={() => setIsOpenLogInModal(false)}>
								X
							</button>
							<h3 className={'logo'}>LOGIN</h3>
							<div>
								<div className={"logo_top_bottom"}>
									<span onClick={handelBuyer}>BUYER</span>
									<span onClick={handelSellerChange}>SELLER</span>
								</div>
								<span>{error}</span>
								<div className='group'>
									<input type='email'
										   onChange={(e) => handleInput(e,"email")}
										   value={email}
									/>
									<span className='highlight'></span>
									<span className='bar'></span>
									<label>e-mail</label>
								</div>

								<div className='group'>
									<input type='password'
										   onChange={(e) => handleInput(e,"password")}
										   value={password}/>
									<span className='highlight'></span>
									<span className='bar'></span>
									<label>Password</label>
								</div>
								<button className='button-65' type={"submit"}>Login</button>

								<span className='forgot_password'>Forgot your password?</span>

								<div className="separator">New customer?</div>

								<h3>Start Now</h3>
								<button className='button-65 btn_registration' onClick={() => navigate("/signUp")}>REGISTRATION</button>
							</div>
						</form>
					</div>
				</div>

			}
		</>
	);
	};



export default Login;