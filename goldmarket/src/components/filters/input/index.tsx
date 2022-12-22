import React, {useState} from 'react';

type TInputTypes = {
    title: string,
    data: string[],
    getInput: (e: boolean, title: string, name: string) => void
}

const InputArrays = ({title, data, getInput}: TInputTypes) => {
	const [hoverFlag, setHoverFlag] = useState(false);
	const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
		getInput(e.target.checked, title, name);
	};

	const handleFlag = () => {
		setHoverFlag(!hoverFlag);
	};

	return (
		<div>
			<p onClick={handleFlag}>{title.toUpperCase()}</p>
			{
				hoverFlag &&
                data.map(el => <div key={el}>
                	<input type="checkbox" id={el} onChange={(e) => handleChecked(e, el)}/>
                	<label htmlFor={el}>{el}</label>
                </div>)
			}
		</div>
	);
};

export default InputArrays;
