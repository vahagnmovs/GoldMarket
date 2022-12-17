import React, {Component, useEffect, useMemo, useState} from 'react';
import { TUser } from "./type";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setUser } from 'src/store/users/usersSlice'

const SignUp = () => {

    const dispatch = useAppDispatch()

    const [isBuyer, setIsBuyer]  = useState(true)
    const [passwordError, setPasswordError] =useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const [userSettings, setUserSettings] = useState<TUser >({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        companyName: "",
    })

    const  toggleIsBuyer  = () => {
        setIsBuyer(!isBuyer)
    }

    const addUserParams = (e: React.ChangeEvent<HTMLInputElement>, name:string) => {
        let userValue = e.target.value
        setUserSettings({
            ...userSettings,
            [name]: userValue
        })
    }


    const validatePassword = () => {
        let isValid = true
        setPasswordError("")
        if (userSettings.password !== '' && userSettings.confirmPassword !== '') {
            isValid = false
            setPasswordError("Please set password")
        } else if(userSettings.password[0] !== userSettings.password[0].toUpperCase() || !isNaN(+userSettings.password[0])) {
            isValid = false
            setPasswordError("First letter mast be uppercase")
        } else if(!userSettings.password.split("").filter(val => !isNaN(+val)).length) {
            isValid = false
            setPasswordError("Password mast includes number")
        } else if(userSettings.password.length < 8){
            isValid = false
            setPasswordError("Password minimum characters mast be 8")
        } else if(userSettings.password !== userSettings.confirmPassword) {
                isValid = false
        }
        return isValid
    }

    const validateConfirmPassword =(e: React.ChangeEvent<HTMLInputElement>) => {
        addUserParams(e,"confirmPassword")
        setConfirmPasswordError("")
        if(userSettings.password !== e.target.value) {
            setConfirmPasswordError('Passwords does not match')
        }
    }

    const register = (e: React.FormEvent) => {
        e.preventDefault()
            // Create a new user with email and password using firebase
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, userSettings.email, userSettings.password)
                .then(({user}) => {
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                        phoneNumber: userSettings.phoneNumber,
                        lastName: userSettings.lastName,
                        firstName: userSettings.firstName,
                    }))
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
    }

    return (
        <div>
            <div>
                <span onClick={toggleIsBuyer}>Seller</span>
                <span onClick={toggleIsBuyer}>Buyer</span>
            </div>
            <h3>Registration</h3>
            <span>With Goldcenter.am account, you can save time during checkout, access your shopping bag from any device and view your order history.</span>
            <form action="" onSubmit={register} name={"registration_form"}>
                <input type="text"
                       placeholder={"FIRST NAME"}
                       defaultValue={userSettings.firstName}
                       required
                       onChange={(e) => addUserParams(e,"firstName")}
                />
                <input type="text"
                       placeholder={"LAST NAME"}
                       defaultValue={userSettings.lastName}
                       required
                       onChange={(e) => addUserParams(e,"lastName")}
                />
                <input type="emails"
                       placeholder={"EMAIL"}
                       defaultValue={userSettings.email}
                       required
                       onChange={(e) => addUserParams(e,"email")}
                />
                <input type="number"
                       placeholder={"PHONE NUMBER"}
                       defaultValue={userSettings.phoneNumber}
                       required
                       onChange={(e) => addUserParams(e,"phoneNumber")}
                />
                <input type="password"
                       placeholder={"PASSWORD"}
                       defaultValue={userSettings.password}
                       required
                       minLength={6}
                       onBlur={validatePassword}
                       onChange={(e) => addUserParams(e,"password")}
                />
                <span>{ passwordError }</span>
                <input type="password"
                       placeholder={"CONFIRM PASSWORD"}
                       defaultValue={userSettings.confirmPassword}
                       required
                       minLength={6}
                       onChange={ validateConfirmPassword }
                />
                <span>{ confirmPasswordError }</span>

                {
                    isBuyer &&
                    <input type="text"
                           placeholder={"COMPANY NAME"}
                           defaultValue={userSettings.companyName}
                           required
                           onChange={(e) => addUserParams(e,"companyName")}
                    />
                }
                <button>SIGN UP</button>
            </form>
            <span>HAVE AN ACCOUNT? LOGIN</span>
        </div>
    );
};

export default SignUp;