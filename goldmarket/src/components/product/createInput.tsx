import React from 'react';
interface IProps {
	title: string | undefined
	value: string | number | undefined
    handleChangeData: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const CrateInput = ({ title, value, handleChangeData }: IProps) => {

	return(
		<div>
			<label> { title?.toUpperCase() } </label>
			<input type='text' name={title} placeholder={title} onChange={handleChangeData} value={value} />
		</div>
	);
};

export default CrateInput;