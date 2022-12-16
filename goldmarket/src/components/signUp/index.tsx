import React, {Component, useState} from 'react';
import { IUser } from "./type";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setUser } from 'src/store/users/usersSlice'
import {log} from "util";

const SignUp = () => {

    const dispatch = useAppDispatch()

    const [isBuyer, setIsBuyer]  = useState(true)
    const [error, setError] =useState("")

    const [userSettings, setUserSettings] = useState<IUser>({
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
        if (userSettings.password !== '' && userSettings.confirmPassword !== ''){
            if (userSettings.password !== userSettings.confirmPassword) {
                isValid = false
                setError('Passwords does not match')
            }
        }
        return isValid
    }

    const register = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        if(validatePassword()) {
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
                <span>{error}</span>
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
                       onChange={(e) => addUserParams(e,"password")}
                />
                <input type="password"
                       placeholder={"CONFIRM PASSWORD"}
                       defaultValue={userSettings.confirmPassword}
                       required
                       minLength={6}
                       onChange={(e) => addUserParams(e,"confirmPassword")}
                />

                {
                    isBuyer &&
                    <input type="text"
                           placeholder={"COMPANY NAME"}
                           defaultValue={userSettings.companyName}
                           required
                           onChange={(e) => addUserParams(e,"companyName")}
                    />
                }
                <button>SING IN</button>
            </form>
            <span>HAVE AN ACCOUNT? LOGIN</span>
        </div>
    );
};

export default SignUp;