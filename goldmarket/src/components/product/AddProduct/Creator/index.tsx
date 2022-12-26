import React from 'react';
interface IProps {
    data: any
    handleChangeData: (evt: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void
}

const Creator: React.FC<IProps> = ({ data, handleChangeData }) => {

	return(
		<div className={'flex dir-col add_product_input align-center'}>
			{
				data.map((elem: any) => {
					const key = Object.keys(elem).join();
              
					return <div key={elem.key} className={'flex dir-col'}>
						<label> {key.toUpperCase()} </label>
						<select name={key} onChange={handleChangeData}>
							<option selected disabled>{key}</option>
							{ elem[key].map((el: any) => <option key={el} value={el}> {el} </option>) }
						</select> 
					</div>;                      
				})
			}   
		</div>
	);
};


export default Creator;


