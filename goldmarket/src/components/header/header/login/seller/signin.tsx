import React, {useState} from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {setUser} from 'src/store/users/usersSlice';
import {useAppDispatch} from 'src/hooks/redux-hooks';
import {useAuth} from 'src/hooks/use-auth';

const SignIn = () => {
	const dispatch = useAppDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleRegister = () => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken,
					phoneNumber: '+37443999988',
				}));
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	return (
		<div>
			<h3>SIGN IN</h3>
			<div>
				<input type="email"
					value={email}
					placeholder={'E-MAIL'}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input type="password"
					value={password}
					placeholder={'PASSWORD'}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleRegister}>Sign In</button>
			</div>
		</div>
	);
};

export default SignIn;
