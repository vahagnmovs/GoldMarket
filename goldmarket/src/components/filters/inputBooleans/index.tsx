import React, {useState} from 'react';

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
            <p onClick={handleFlag}>{title.toUpperCase()}</p>
            {
                showFlag &&
                // @ts-ignore
                data.map(el => <input type="radio" id={el} name={name} onChange={(e) => handleChecked(e, title)}/>)
            }
        </div>
    );
};

export default InputBooleans;
