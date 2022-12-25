import React from 'react';
import trash from 'src/style/Icons/trash.svg';

type TDeliveryAddress = {
    addressId: string;
    city: string;
    name: string;
    radio: string;
    region: string;
    surname: string;
    country: string;
    phoneNumber: string;
    handleEdit: (addressId: string) => void;
    handleDelete: (addressId: string) => void;

}

const DeliveryAddress = ({
                             addressId,
                             city,
                             name,
                             radio,
                             region,
                             surname,
                             country,
                             handleEdit,
                             phoneNumber,
                             handleDelete
                         }: TDeliveryAddress) => {

    return (
        <div id={addressId} className={'user_addres'}>
            <div className={'a1'}>
                <div className={'user_addres_title  flex justify-between align-center'}>
                    <span>MY ADDRESS NAME</span>
                    <div className={'flex align-center'}>
                        <h1>MAKE DEFAULT</h1><input type="radio" name={radio}/>
                    </div>
                </div>
                <div className={"user_info_1"}>
                    <span>{`${name}${', '}`}</span>
                    <span>{`${surname}${', '}`}</span>
                    <span>{`${city}${', '}`}</span>
                    <span>{`${region}${', '}`}</span>
                    <span>{`${country}${', '}`}</span>
                    <span>{phoneNumber}</span>
                </div>
                <hr/>
                <div className={'button_edit_address align-center flex justify-between'}>
                    <button onClick={() => handleEdit(addressId)}>EDIT ADDRESS</button>
                    <img src={trash} alt="trash" onClick={() => handleDelete(addressId)}/>
                </div>

            </div>
        </div>
    );
};

export default DeliveryAddress;