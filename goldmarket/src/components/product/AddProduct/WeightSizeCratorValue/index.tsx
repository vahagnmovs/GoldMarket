import React, { useState, useEffect } from 'react';

type TProps = {
    listData: number[] | string[]
    handleWeight: (value: string[] | number[]) => void
    name: string
	 initialCheckdArr?: any
}

const WeightSizeCratorValue = ({ listData, name, handleWeight }: TProps) => {

	const [checkedList, setCheckedList] = useState<string[]>([]);
	const [flag, setFlag] = useState(true);
  
	useEffect(() => {
		handleWeight(checkedList);
	}, [checkedList]);



	const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked  } = event.target;
 
		if (checked) {
			setCheckedList([...checkedList, value]);
		} else {
			const filteredList = checkedList.filter((item) => item !== value);
			setCheckedList(filteredList);
		}
	};


	const handleFlag = () => setFlag(!flag);


	return (
		<div className={'flex dir-col add_product_input '}>
			<span style={{cursor: 'pointer'}} onClick={handleFlag}> {name.toUpperCase()} </span>
			{flag || listData.map((item, index) => {
				return (
					<div key={index} className="checkbox-container flex dir-col ">
						<label>
							<input
								type="checkbox"
								name={name}
								value={item}
								onChange={handleSelect}
							/>
							{item}</label>
					</div>
				);
			})}
		</div>
	);
};

export default WeightSizeCratorValue;