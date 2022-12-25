import React, {useState} from 'react'
import Header from 'src/components/header/header'
import Dashboard from '../dashboard'

// FIXME: import voch irakan dataic
import {data} from '../deliveryAddressList'

const SettingsList = () => {
    const [changeSetting, setChangeSetting] = useState(data)
    const [setting, setSetting] = useState(true)


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setChangeSetting({...changeSetting, [name]: value});
    }
    const handleSave = () => {
        setSetting(false);
        setTimeout(() => {
            setSetting(true);
        }, 500);
        data.name = changeSetting.name
        data.surname = changeSetting.surname
        data.email = changeSetting.email
        data.phoneNumber = changeSetting.phoneNumber
    }
    return (
        <>
            <Header/>
            <div className='dash'>
                <Dashboard/>
            </div>
            <div className='container  title_setings'>
                <h3>Settings</h3>
                {setting ?
                    <div>

                        <h4>Personal information</h4>
                        <div className={'settings_input  align-center flex '}>
                            <div className={'dir-col flex'}>
                                <input type="text" onChange={handleOnChange} value={changeSetting.name} name={'name'}
                                       placeholder='NAME'/>
                                <input type="email" onChange={handleOnChange} value={changeSetting.email} name={'email'}
                                       placeholder='EMAIL'/>
                            </div>
                            <div className={'dir-col flex'}>
                                <input type="text" onChange={handleOnChange} value={changeSetting.surname}
                                       name={'surname'} placeholder='SURNAME'/>
                                <input type="text" onChange={handleOnChange} name={'phoneNumber'}
                                       value={changeSetting.phoneNumber} placeholder='PHONE'/>
                            </div>

                        </div>
                        <div className={'settings_save_input'}>
                            <button onClick={handleSave}>SAVE</button>
                        </div>

                    </div> : <div className={'loading text-center'}>Loding...</div>
                }
            </div>
        </>
    )
}

export default SettingsList