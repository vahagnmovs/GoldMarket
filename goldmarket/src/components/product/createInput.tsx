import React from 'react';
interface IProps {
    title: string
    value: string
    handleChangeData: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const CrateInput = ({ title, value, handleChangeData }: IProps) => {

	return(
		<div>
			<label> { title } </label>
			<input type='text' name={title} placeholder={title} onChange={handleChangeData} value={value} />
		</div>
	);
};

export default CrateInput;