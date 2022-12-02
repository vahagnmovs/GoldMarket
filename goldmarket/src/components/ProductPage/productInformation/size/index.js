import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clickSize } from "../../../../store/sellersSlice";

const Sizes = () => {
    const dispatch = useDispatch();
    const stateInfo = useSelector(state => state.sellerStore)
    const { indexSize } = stateInfo;
    const productSize = useSelector(state => state.sellerStore.IMAGESINFORMATION);
    const {SIZE} = productSize;

    return (
        <>
            <p>SIZE:</p>
            <div style={{display: "flex", flexDirection: "row"}}>
                {SIZE.map((size, i) => <ul
                    key={i}
                    onClick={() => dispatch(clickSize(i))}>
                    <li
                        className={indexSize === i ? "activeSize" : ""}
                        style={{border: "1px solid black", padding: "7px 20px 5px 20px", cursor:"pointer"}}>{size}</li>
                </ul>)}
            </div>
        </>
    );
};

export default Sizes;