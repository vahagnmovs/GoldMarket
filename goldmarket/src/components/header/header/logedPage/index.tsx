import React, {useState} from 'react';
import user1 from 'src/style/Icons/user.png';
import {useNavigate} from "react-router-dom";
import {TLogedPageProps} from "./type";

const LogedPage = ({toggleIsLogInUser, sellerBuyer, handelSeller}: TLogedPageProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const ls = require('local-storage')
    const user = ls(sellerBuyer)
    const navigate = useNavigate()
    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    const handelLogOut = () => {
        ls.clear()
        toggleIsLogInUser()
        navigate('/')
    }

    return (
            <li className={'flex align-center relative'}>
                <div onClick={toggleModal} className={'user_prof'}>{`${user.firstName} ${user.lastName[0]}.`}</div>
                <img  onClick={toggleModal} className={'user_icon'} src={user1} alt='user_icon'/>
                {
                    isOpenModal
                    &&
                    <div className={'user_prof_modal flex dir-col justify-around absolute'}>
                        <span className={'user_account block'} onClick={() => navigate('/dashboard')}>ACCOUNT</span>
                        <button onClick={handelLogOut}>LOG OUT</button>
                    </div>
                }
            </li>
    );
};

export default LogedPage;
