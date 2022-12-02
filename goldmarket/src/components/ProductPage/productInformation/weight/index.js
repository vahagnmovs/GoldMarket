import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { clickWeight } from "../../../../store/sellersSlice";

const Weights = () => {
    const dispatch = useDispatch();
    const stateInfo = useSelector(state => state.sellerStore)
    const { indexWeight } = stateInfo;

    const imageInfo = useSelector(state => state.sellerStore.IMAGESINFORMATION);
    const { WEIGHT } = imageInfo;
    return (
        <>
            <p>WEIGHT:</p>
            <div style={{display: "flex", flexDirection: "row",}}>
                {WEIGHT.map((weight, i) => <ul
                    key={i}
                    onClick={() => dispatch(clickWeight(i))}>
                    <li
                        style={{border: "1px solid black", padding: "7px 20px 5px 20px", cursor:"pointer"}}
                        className={indexWeight === i ? "activeWeight" : ""}
                    >{weight}</li>
                </ul>)}
            </div>
        </>
    );
};

export default Weights;