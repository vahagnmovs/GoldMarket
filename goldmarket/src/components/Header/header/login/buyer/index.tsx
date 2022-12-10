import React from 'react';

const Buyer = () => {
    return (
        <div>
            <h3>Description</h3>
            <span>With Goldcenter.am account, you can save time during checkout, access your shopping bag from any device and view your order history.</span>
            <div>
                <input type="text" defaultValue={"FIRST NAME"}/>
                <input type="text" defaultValue={"LAST NAME"}/>
                <input type="emails" defaultValue={"EMAIL"}/>
                <input type="number" defaultValue={"PHONE NUMBER"}/>
                <input type="password" defaultValue={"PASSWORD"}/>
                <input type="password" defaultValue={"CONFIRM PASSWORD"}/>
                <div>
                    <label>
                        <input type="radio" name={"a"}/>
                        MANUFACTURER
                    </label>
                    <label>
                        <input type="radio"  name={"a"} />
                        SERVICE
                    </label>
                </div>
                <button>SING IN</button>
            </div>
            <span>HAVE AN ACCOUNT? LOGIN</span>
        </div>
    );
};

export default Buyer;