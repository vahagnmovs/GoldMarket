import React from 'react';
type LoginProps = {
    handelLoginClose: () => void,
}

const LoginModal = ({handelLoginClose}: LoginProps) => {
    return (
        <div>
            <div>
                <p>HAVE AN ACCOUNT ?</p>
                <p onClick={handelLoginClose}>X</p>
            </div>
            <div>
                <button>LOGIN</button>
            </div>
            <div>
                <p>NEW CUSTOMER? </p>
                <button>REGISTRATION</button>
            </div>
        </div>
    );
};

export default LoginModal;