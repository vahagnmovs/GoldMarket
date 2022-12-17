import React, {useState} from 'react';
import Buyer from "./buyer";
import Seller from "./seller";


const Login = () => {
    return (
        <div>
            <h3>LOGIN</h3>
            <div>
                <input type="email" defaultValue={"E-MAIL"}/>
                <input type="password" defaultValue={"PASSWORD"}/>
                <button>LOGIN</button>
            </div>
            <p>FORGOT YOUR PASSWORD </p>
            <p>NEW CUSTOMER?</p>
            <div>
                <h3>START NEW</h3>
                <button>REGISTRATION</button>
            </div>
        </div>
    );
};

export default Login;