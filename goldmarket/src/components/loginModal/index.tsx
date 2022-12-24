import React, {useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, input: string) => {
        if(input === "email"){
            setEmail(e.target.value)
        }
        if(input === "password"){
            setPassword(e.target.value)
        }
    }
    const handelSignIn = (e:React.FormEvent) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <div>
                    <form className={'box'} onSubmit={handelSignIn}>
                        <h3 className={'logo'}>LOGIN</h3>
                        <div >
                            <div className='group'>
                                <input type='text' onChange={(e) => handleInput(e,"email")}  />
                                <span className='highlight'></span>
                                <span className='bar'></span>
                                <label>e-mail</label>
                            </div>
                            <div className='group'>
                                <input type='password' onChange={(e) => handleInput(e,"password")} />
                                <span className='highlight'></span>
                                <span className='bar'></span>
                                <label>Password</label>
                            </div>
                            <button className='button-65'>Login</button>

                            <span className='forgot_password'>Forgot your password?</span>

                            <div className="separator">New customer?</div>

                            <h3>Start Now</h3>
                            <h4 className={'titleRegistre'}>With Goldcenter.am account, you can save time during checkout, access your shopping bag from any device and view your order history.</h4>
                            <button className='button-65 btn_registration'>REGISTRATION</button>

                        </div>
                    </form>
        </div>
    );
};

export default Login;