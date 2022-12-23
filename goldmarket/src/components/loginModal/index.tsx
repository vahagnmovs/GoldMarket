import React, { useState } from 'react';
import user from 'src/style/Icons/user.png';

const Login = () => {

    const [isOpenLogInModal, setIsOpenLogInModal] = useState(false);

    return (
        <div>
                    <form className={'box'}>
                        <h3 className={'logo'}>LOGIN</h3>
                        <div >
                            <div className='group'>
                                <input type='text' required />
                                <span className='highlight'></span>
                                <span className='bar'></span>
                                <label>e-mail</label>
                            </div>

                            <div className='group'>
                                <input type='text' required />
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