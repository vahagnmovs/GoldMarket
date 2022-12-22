import React, {useEffect, useState} from 'react';
import {filters, initialDimonds, initialPrices, initialState, sizeListData, weightListData} from 'src/components/constants';
import CrateInput from '../createInput';

import AddImages from './addImages';
import Creator from './Creator';
import PublishSelecStoneBollean from './PublishSelecStoneBollean';
import WeightSizeCratorValue from './WeightSizeCratorValue';

export type TWeight = {
	name: { key: number[] | string[]} | {}
}

const AddProduct: React.FC = () => {


	const [formData, setFormData] = useState(initialState);

	const [PRICES, setPrices] = useState(initialPrices);
	const [DIMOND, setDimonds] = useState(initialDimonds);
	const [IMAGES, setImgSrces] = useState([]);
	
	const [WIEGHT, setWeight] = useState<any>([]);
	const [SIZE, setSize] = useState<any>([]);
	
	const [PUBLISH, setBublish] = useState<boolean | undefined>();
	const [SELECTSTONE, setSelectStone] = useState<boolean | undefined>();
	
	const [showSlice, setShowSlice] = useState(false);



	useEffect(() => {
		setFormData({...formData, IMAGES});
	}, [IMAGES]);

	useEffect(() => {
		setFormData({...formData, DIMOND});
	}, [DIMOND]);

	useEffect(() => {
		setFormData({...formData, PRICES});
	}, [PRICES]);

	useEffect(() => {
		setFormData({...formData, WIEGHT});
	}, [WIEGHT]);
    
	useEffect(() => {
		setFormData({...formData, SIZE});
	}, [SIZE]);

	useEffect(() => {
		setFormData({...formData, PUBLISH});
	}, [PUBLISH]);
    
	useEffect(() => {
		setDimonds({...DIMOND, SELECTSTONE});
	}, [SELECTSTONE]);



	const handleImgSrces = (arr: []) => setImgSrces(prev => [...arr]);

	const handleChangeFormData = ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		setFormData({
			...formData,
			[name]: value,
			IMAGES,
		});
	};
     
	const handleDimonds = ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		setDimonds({...DIMOND, [name]: value});
	};

	const handlePrice = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		setPrices({...PRICES, [name]: value});
	};

	const disAdd = (formData.NAME.trim().length === 0) || (formData.DESCRIPTION.trim().length === 0) ||
                   (formData.CODE.trim().length === 0);


	const toggleShowSlice = () => setShowSlice(!showSlice);

	const handleWeight = (value: string[] | number[]) => {
		setWeight((prev: []) => [...value]);
	};
	const handleSize = (value: string[] | number[]) => {
		setSize((prev: []) => [...value]);
	};

	const handleBoolean = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target;

		if (name === 'PUBLISH') {
			if (value === 'yes') setBublish(true); 
			else setBublish(false); 
		}

		else if (name === 'SELECTSTONE') {
			if (value === 'yes') setSelectStone(true); 
			else setSelectStone(false); 
		}
	}; 


	const handleSave = () => {
		console.log(formData, 'formData');
	};

	return (
		<div className='addProduct'>
			<CrateInput title='NAME' value={formData.NAME} handleChangeData={handleChangeFormData} />
			<CrateInput title='DESCRIPTION' value={formData.DESCRIPTION} handleChangeData={handleChangeFormData}/>

			<Creator data={filters.firstCategory} handleChangeData={handleChangeFormData} />
			<PublishSelecStoneBollean name={'PUBLISH'} handleBoolean={handleBoolean} />

			<Creator data={filters.productDetals} handleChangeData={handleChangeFormData} />
			<WeightSizeCratorValue name={'WEIGHT'} listData={weightListData} handleWeight={handleWeight} />
			<WeightSizeCratorValue name={'SIZE'} listData={sizeListData} handleWeight={handleSize} />
			<CrateInput title='COUNT' value={formData.COUNT} handleChangeData={handleChangeFormData} />
			<CrateInput title='DISCOUNT' value={formData.DISCOUNT} handleChangeData={handleChangeFormData} />

			<div>
				<label> ADD STOUNS ATRIBUTS
					<input type="checkbox" onChange={toggleShowSlice} checked={showSlice}/>
				</label>
				{
					showSlice
					||
					<>
						<Creator data={filters.dimonds} handleChangeData={handleDimonds}/>
						<CrateInput title='CARAT' value={formData.DIMOND.CARAT} handleChangeData={handleDimonds} />
						<CrateInput title='PCS' value={formData.DIMOND.PCS} handleChangeData={handleDimonds} />
			            <PublishSelecStoneBollean name={'SELECTSTONE'} handleBoolean={handleBoolean} />
					</>
				}
			</div>

			<CrateInput title={'PRICE'} value={formData.PRICES.PRICE} handleChangeData={handlePrice} />
			<CrateInput title={'OLDPRICE'} value={formData.PRICES.OLDPRICE} handleChangeData={handlePrice} />
			<CrateInput title={'CODE'} value={formData.CODE} handleChangeData={handleChangeFormData} />
 
 			<AddImages handleImgSrces={handleImgSrces} />

			<button disabled={disAdd} onClick={handleSave}>save product</button>
		</div>
	);
};


export default AddProduct;