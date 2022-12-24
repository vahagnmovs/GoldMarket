import React from 'react';
interface IProps {
    name: string
    data: any 
    defaultValue: string | number
    handleChangeData: (evt: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void
}

const EditCreator: React.FC<IProps> = ({ name, data, defaultValue, handleChangeData }) => {

   // console.log(defaultValue);

	return(
		<div>
         <label> {name.toUpperCase()} </label>
         <select name={name} defaultValue={defaultValue} onChange={handleChangeData}>
            <option disabled>{name}</option>
            {
				  data.map((elem: any) => <option key={elem} value={elem}> {elem} </option>)
            }   
         </select> 
		</div>
	);
};


export default EditCreator;