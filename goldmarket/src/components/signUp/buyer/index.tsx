import React from 'react';
import {useAppDispatch} from '../../../hooks/redux-hooks';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {addDoc, collection} from "firebase/firestore";
import {db} from 'src/firebase'
import {useNavigate} from "react-router-dom";

const passwordRegex = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$');

const BuyerSignUp = () => {
	const ls = require("local-storage")
  const navigate = useNavigate()

	const register = () => {
		// Create a new user with email and password using firebase
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
			.then(({user}) => {
				addDoc(collection(db, "buyers"), {
					firstName: formik.values.firstName,
					lastName: formik.values.lastName,
					email: user.email,
					buyerID: user.uid,
					cart: [],
					wishList: [],
					phone: formik.values.phoneNumber
				})
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			phoneNumber: '',
		},
		validationSchema: Yup.object({
			firstName: Yup
				.string()
				.max(10, 'name  must be 10 characters or less')
				.required('Required'),
			lastName: Yup
				.string()
				.max(15, 'name  must be be 15 characters or less')
				.required('Required'),
			email: Yup
				.string()
				.email('Invalid email  address')
				.required('Required'),
			password: Yup
				.string()
				.required('Required')
				.matches(passwordRegex, 'Password is not valid'),
			confirmPassword: Yup
				.string()
				.required('Required')
				.matches(passwordRegex, 'Confirm password is not valid')
				.oneOf([Yup.ref('password'), null], 'Passwords must match'),
			phoneNumber: Yup
				.string()
				.min(11, 'phone number must be 11 characters')
				.max(11, 'Phone number must be 11 characters')
				.required('Required'),
		}),
		onSubmit: () => {
			register();
			ls("buyer",formik.values)
			navigate('/')
		}
	});


	return (
		<div className={'buyer_registration'}>
			<div className={'buyer_input_inputno'}>
				<h3>Registration</h3>
				<span>With Goldcenter.am account, you can save time during checkout,<br/> access your shopping bagfrom any device and view your order history.</span>

				<form onSubmit={(e) => formik.handleSubmit(e)}>
					<div className={'buyer_input'}>
						<div className={'buyer_input_list'}>
							<div className={'form__group field'}>
								<input
									className={'form__field'}
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First Name"
									required
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.firstName}
								/>
								<label htmlFor='name' className='form__label'>First Name</label>
								{formik.touched.firstName && formik.errors.firstName ?
									<p>{formik.errors.firstName}</p> : null}
							</div>
							<div className={'form__group field'}>
								<input type="text"
									className={'form__field'}
									required
									id="lastName"
									name="lastName"
									placeholder="Last Name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastName}
								/>
								<label htmlFor='name' className='form__label'>Last Name</label>
								{formik.touched.lastName && formik.errors.lastName ?
									<p>{formik.errors.lastName}</p> : null}
							</div>
							<div className={'form__group field'}>
								<input type="number"
									className={'form__field'}
									required
									id="phoneNumber"
									name="phoneNumber"
									placeholder="Phone Number"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.phoneNumber}
								/>
								<label htmlFor='name' className='form__label'>Phone Number</label>
								{formik.touched.phoneNumber && formik.errors.phoneNumber ?
									<p>{formik.errors.phoneNumber}</p> : null}
							</div>
							<div className={'form__group field'}>
								<input type="email"
									className={'form__field'}
									required
									id="email"
									name="email"
									placeholder="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
								<label htmlFor='name' className='form__label'>Email</label>
								{formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
							</div>
							<div className={'form__group field'}>
								<input type="password"
									className={'form__field'}
									required
									id="password"
									name="password"
									placeholder="Password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
								<label htmlFor='name' className='form__label'>Password</label>
								{formik.touched.password && formik.errors.password ?
									<p>{formik.errors.password}</p> : null}
							</div>
							<div className={'form__group field'}>
								<input type="password"
									className={'form__field'}
									required
									id="confirmPassword"
									name="confirmPassword"
									placeholder="Confirm Password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.confirmPassword}
								/>
								<label htmlFor='name' className='form__label'>Password</label>
								{formik.touched.confirmPassword && formik.errors.confirmPassword ?
									<p>{formik.errors.confirmPassword}</p> : null}
							</div>
						</div>
						<button className='button-26' type={'submit'}>Sign Up</button>
						<p> Have an account? Login</p>
					</div>
				</form>
			</div>
		</div>
	)
	;
};

export default BuyerSignUp;