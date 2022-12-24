import React, {useState} from 'react';
import open_filter from "../../../style/Icons/open.png";

type TInputBooleans = {
    title: string,
    data: string[],
    name: string,
    getInput: (e: string, title: string) => void
}

const InputBooleans = ({title, name, data, getInput}: TInputBooleans) => {

    const [showFlag, setShowFlag] = useState(false)

    const handleFlag = () => {
        setShowFlag(!showFlag)
    }

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, title: string) => {
        getInput(e.target.id, title)
    }

    return (
        <div>

            <div className={'button_open_filter flex justify-between align-center text-center'}>
                <p onClick={handleFlag}>{title.toUpperCase()}</p>
                <img src={open_filter}/>
            </div>

            {
                showFlag &&
                // @ts-ignore
                data.map(el => <input type="radio" id={el} name={name} onChange={(e) => handleChecked(e, title)}/>)
            }
        </div>
    );
};

export default InputBooleans;
