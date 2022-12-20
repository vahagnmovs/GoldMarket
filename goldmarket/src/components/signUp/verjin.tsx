import React, {useState} from 'react';
import {useAppDispatch} from '../../hooks/redux-hooks';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const passwordRegex = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$');

const Verjin = () => {

	const dispatch = useAppDispatch();

	const [isBuyer, setIsBuyer] = useState(true);


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
		onSubmit: (values) => {
			console.log(values);
		}
	});

	// const dispatch = useAppDispatch()
	//
	// const [isBuyer, setIsBuyer] = useState(true)

	// const register = (e: React.FormEvent) => {
	//     e.preventDefault()
	//     // Create a new user with email and password using firebase
	//     const auth = getAuth()
	//     createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
	//         .then(({user}) => {
	//             dispatch(setUser({
	//                 email: user.email,
	//                 id: user.uid,
	//                 token: user.refreshToken,
	//                 phoneNumber: formik.values.phoneNumber,
	//                 lastName: formik.values.lastName,
	//                 firstName: formik.values.firstName,
	//             }))
	//         })
	//         .catch((error) => {
	//             const errorCode = error.code;
	//             const errorMessage = error.message;
	//         });
	// }
	return (
		<div>
			<h3>Registration</h3>
			<span>With Goldcenter.am account, you can save time during checkout, access your shopping bag from any device and view your order history.</span>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<input type="text"
						id="firstName"
						name="firstName"
						placeholder="First Name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.firstName}
					/>
					{formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
				</div>
				<div>
					<input type="text"
						id="lastName"
						name="lastName"
						placeholder="Last Name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.lastName}
					/>
					{formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
				</div>
				<div>
					<input type="email"
						id="email"
						name="email"
						placeholder="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
				</div>
				<div>
					<input type="password"
						id="password"
						name="password"
						placeholder="Password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					{formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
				</div>
				<div>
					<input type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Confirm Password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.confirmPassword}
					/>
					{formik.touched.confirmPassword && formik.errors.confirmPassword ?
						<p>{formik.errors.confirmPassword}</p> : null}
				</div>
				<div>
					<input type="number"
						id="phoneNumber"
						name="phoneNumber"
						placeholder="Phone Number"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.phoneNumber}
					/>
					{formik.touched.phoneNumber && formik.errors.phoneNumber ?
						<p>{formik.errors.phoneNumber}</p> : null}
				</div>
				<button type={'submit'}>Sign Up</button>
			</form>

		</div>
	);
};

export default Verjin;