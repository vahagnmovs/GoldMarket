import React from 'react';
interface IProps {
	title: string | undefined
	value: string | number | undefined
    handleChangeData: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const CrateInput = ({ title, value, handleChangeData }: IProps) => {

	return(
		<div className={'flex dir-col add_product_input align-center '}>
			<label> { title?.toUpperCase() } </label>
			<input className={'add_product_input_de'} type='text' name={title} placeholder={title} onChange={handleChangeData} value={value} />
		</div>
	);
};

export default CrateInput;