const Buyer = () => {
    return (
        <div>
            <h3>Description</h3>
            <span>With Goldcenter.am account, you can save time during checkout, access your shopping bag from any device and view your order history.</span>
            <div>
                <input type="text" placeholder={"FIRST NAME"}/>
                <input type="text" placeholder={"LAST NAME"}/>
                <input type="emails" placeholder={"EMAIL"}/>
                <input type="number" placeholder={"PHONE NUMBER"}/>
                <input type="password" placeholder={"PASSWORD"}/>
                <input type="password" placeholder={"CONFIRM PASSWORD"}/>
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