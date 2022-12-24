import React, {useState} from 'react';
import user from 'src/style/Icons/user.png';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {TLoginProps} from "./type";
import {collection, getDocs} from "firebase/firestore";
import {db} from 'src/firebase'

const Login = ({toggleIsLogInUser}: TLoginProps) => {

	const [isOpenLogInModal, setIsOpenLogInModal] = useState(false);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState('')
	const colRef = collection(db, "buyers")
	const ls = require('local-storage');

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>, input: string) => {
		if (input === "email") {
			setEmail(e.target.value)
		}
		if (input === "password") {
			setPassword(e.target.value)
		}
	}

	const toggleUserSignIn = (e:React.FormEvent) => {
		e.preventDefault()
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				getDocs(colRef)
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
						} else {
							// doc.data() will be undefined in this case
							console.log("No such document!");
						}
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						throw new Error(`${errorCode}`)
					})
			})
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
					<form className={'box'} onSubmit={ toggleUserSignIn }>
						<h3 className={'logo'}>LOGIN</h3>
						<div>
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
							<button className='button-65'>Login</button>

							<span className='forgot_password'>Forgot your password?</span>

							<div className="separator">New customer?</div>

							<h3>Start Now</h3>
							<button className='button-65 btn_registration'>REGISTRATION</button>
						</div>
					</form>
			}
		</>
	);
	};



export default Login;