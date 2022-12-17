import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type LoginTypes = {
    handleLogin: (email: string, password: string) => void
}

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        switch (name) {
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
        }
    }

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
            } )
            .catch(console.error)
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <div>
                <input type="email"
                       value={email}
                       placeholder={"E-MAIL"}
                       onChange={(e) => handleInput(e, "email")}
                />
                <input type="password"
                       value={password}
                       placeholder={"PASSWORD"}
                       onChange={(e) => handleInput(e, "password")}
                />
                <button onClick={handleLogin}>Sign In</button>
            </div>
        </div>
    );
};

export default Login;



