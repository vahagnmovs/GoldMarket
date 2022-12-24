import React, {useState} from 'react';
import {TFilterKey} from "../filters";
import open_filter from "../../../style/Icons/open.png";

type TInputTypes = {
    title: TFilterKey,
    data: string[],
    getInput: (e: boolean, title: TFilterKey, name: string) => void
}

const InputArrays = ({title, data, getInput}: TInputTypes) => {
    const [hoverFlag, setHoverFlag] = useState(false)
    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        getInput(e.target.checked, title, name)
    }

    const handleFlag = () => {
        setHoverFlag(!hoverFlag)
    }

    return (
        <div>
            <div className={'button_open_filter flex justify-between align-center text-center'}>
                <p onClick={handleFlag}>{title.toUpperCase()}</p>
                <img src={open_filter}/>
            </div>
<div className={'open_filter2 flex dir-col'}>
    {
        hoverFlag &&

        data.map(el =>
            <div   key={el}>
                <input type="checkbox" id={el} onChange={(e) => handleChecked(e, el)}/>
                <label htmlFor={el}>{el}</label>
            </div>)
    }
</div>

        </div>
    );
};

export default InputArrays;
