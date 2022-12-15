import React, {Component, useState} from 'react';
import {TUser} from "./type";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {setUser} from 'src/store/users/usersSlice'

const SingIn = () => {

    const dispatch = useAppDispatch()

    const [isBuyer, setIsBuyer]  = useState(true)

    const [firstName,  setFirstName] = useState("")
    const [lastName,  setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [error, setError] =useState("")



    const  toggleIsBuyer  = () => {
        setIsBuyer(!isBuyer)
    }

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
            if (password !== confirmPassword) {
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
            createUserWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                        phoneNumber,
                        lastName,
                        firstName,
                    }))
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }


    //TODO: look
    const addUserParams = (e: React.ChangeEvent<HTMLInputElement>, action:string) => {
        switch (action){
            case "FIRST NAME" :{
                return setFirstName(e.target.value);
            }
            case "LAST NAME" :{
                return setLastName(e.target.value)
            }
            case "EMAIL" :{
                return setEmail(e.target.value)
            }
            case "PHONE NUMBER" :{
                return setPhoneNumber(e.target.value)
            }
            case "PASSWORD" :{
                return setPassword(e.target.value)
            }
            case "CONFIRM PASSWORD" :{
                return setConfirmPassword(e.target.value)
            }
            case "COMPANY NAME": {
                return setCompanyName(e.target.value)
            }
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
                           defaultValue={firstName}
                           onChange={(e) => addUserParams(e,"FIRST NAME")}
                    />
                    <input type="text"
                           placeholder={"LAST NAME"}
                           defaultValue={lastName}
                           onChange={(e) => addUserParams(e,"LAST NAME")}
                    />
                    <input type="emails"
                           placeholder={"EMAIL"}
                           defaultValue={email}
                           onChange={(e) => addUserParams(e,"EMAIL")}
                    />
                    <input type="number"
                           placeholder={"PHONE NUMBER"}
                           defaultValue={phoneNumber}
                           onChange={(e) => addUserParams(e,"PHONE NUMBER")}
                    />
                    <input type="password"
                           placeholder={"PASSWORD"}
                           defaultValue={password}
                           onChange={(e) => addUserParams(e,"PASSWORD")}
                    />
                    <input type="password"
                           placeholder={"CONFIRM PASSWORD"}
                           defaultValue={confirmPassword}
                           onChange={(e) => addUserParams(e,"CONFIRM PASSWORD")}
                    />

                    {
                        isBuyer &&
                        <input type="text"
                               placeholder={"COMPANY NAME"}
                               defaultValue={companyName}
                               onChange={(e) => addUserParams(e,"COMPANY NAME")}
                        />
                    }
                    <button>SING IN</button>
                </form>
            <span>HAVE AN ACCOUNT? LOGIN</span>
        </div>
    );
};

export default SingIn;