import React, {useState} from 'react';
import "../styleProductPage.css"
const ProductSize = ({size}) => {
    const [indexSize, setIndexSize] = useState(0)

    const clickSize = (i) => {
        setIndexSize(index => index = i)
    }
    return (
        <>
            <p>SIZE:</p>
            <div style={{display: "flex", flexDirection: "row"}}>
                {size.map((size, i) => <ul
                    key={i}
                    onClick={() => (clickSize(i))}>
                    <li
                        className={indexSize === i ? "activeSize" : ""}
                        style={{border: "1px solid black", padding: "7px 20px 5px 20px", cursor:"pointer"}}>{size}</li>
                </ul>)}
            </div>
        </>
    );
};

export { ProductSize};