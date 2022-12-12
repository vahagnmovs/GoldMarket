import React, {useState} from 'react';
import "../styleProductPage.css"


const ProductWeight = ({weight}) => {
    const [indexWeight, setIndexWeight] = useState(0);

    const clickWeight = (i) => {
        setIndexWeight(index => index = i)
    }

    return (
        <>
            <p>WEIGHT:</p>
            <div style={{display: "flex", flexDirection: "row",}}>
                {weight.map((item, i) => <ul
                    key={i}
                    onClick={() => (clickWeight(i))}>
                    <li
                        style={{border: "1px solid black", padding: "7px 20px 5px 20px", cursor:"pointer"}}
                        className={indexWeight === i ? "activeWeight" : ""}
                    >{item}</li>
                </ul>)}
            </div>
        </>
    );
};

export {ProductWeight};