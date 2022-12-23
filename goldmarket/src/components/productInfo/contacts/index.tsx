import React from 'react';

const Contacts = () => {
    // @ts-ignore
    return (
        <div className={'container'}>
            <div className={"Contact_page"}>
                <div className={'flex justify-between'}>
                    <div className={'product_infi_contact'}>
                        <h2>Contacts</h2>
                        <ul>
                            <li>VIBER/WHATSAPP ____________________________________________044 999 585</li>
                            <li>PHONE NUMBER ______________________________________________044 999 585</li>
                            <li>SELLER NAME____________________________________________</li>
                            <li>SELLER ADDRESS _____________________________________________PUSHKIN 21</li>
                            <li>E-MAIL ________________________________________________________ @ALDORO</li>
                            <li>FACEBOOK _______________________________________________FB.COM/ALDORO</li>
                        </ul>
                        <div>
                            <button>GO TO COMPANY PAGE</button>
                        </div>
                    </div>
                    <div>
                        <iframe src='https://www.google.com/maps/embed?pb'  width={'590px'} height={'365'}>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;