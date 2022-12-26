import React from 'react';
interface IProps {
    name: string
    data: any 
    handleChangeData: (evt: React.ChangeEvent<HTMLSelectElement>) => void
}

const AddColor: React.FC<IProps> = ({ name, data, handleChangeData }) => {

	return(
		<div className={'flex dir-col add_product_input'}>
         <label> {name.toUpperCase()} </label>
         <select name={name} onChange={handleChangeData}>
            <option selected disabled>{name}</option>
            {
				  data.map((elem: any) => <option key={elem} value={elem}> {elem} </option>)
            }   
         </select> 
		</div>
	);
};


export default AddColor;