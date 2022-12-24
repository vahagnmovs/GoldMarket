import React, {useEffect, useState} from 'react';
import {filters, initialColor, initialDimonds, initialPrices, initialState, sizeListData, weightListData} from 'src/components/constants';
import CrateInput from '../createInput';

import AddImages from './addImages';
import Creator from './Creator';
import PublishSelecStoneBollean from './PublishSelecStoneBollean';
import WeightSizeCratorValue from './WeightSizeCratorValue';

import { useAppDispatch } from 'src/hooks/redux-hooks';
import { addProduct } from 'src/store/products/productSlice';
import AddColor from './Creator/addColor';

 
const AddProduct: React.FC = () => {

	const [formData, setFormData] = useState(initialState);

	const [prices, setPrices] = useState(initialPrices);
	const [diamond, setDimonds] = useState(initialDimonds);
	
	const [weight, setWeight] = useState<any>([]);
	const [size, setSize] = useState<any>([]);
	
	const [publish, setBublish] = useState<boolean | undefined>();
	const [stone, setSone] = useState<boolean | undefined>(false);
	const [newProduct, setNewProduct] = useState<boolean | undefined>(false);

	const [showSlice, setShowSlice] = useState(false);
	const [images, setImgSrces] = useState([]);

	const dispatch = useAppDispatch();

	useEffect(() => {
		setFormData({...formData, images});
	}, [images]);

	useEffect(() => {
		setFormData({...formData, diamond});
	}, [diamond]);

	useEffect(() => {
		setFormData({...formData, prices});
	}, [prices]);

	useEffect(() => {
		setFormData({...formData, weight});
	}, [weight]);
    
	useEffect(() => {
		setFormData({...formData, size});
	}, [size]);

	useEffect(() => {
		setFormData({...formData, publish});
	}, [publish]);
    
	useEffect(() => {
		setFormData({...formData, stone});
	}, [stone]);

	useEffect(() => {
		setFormData({...formData, newProduct});
	}, [newProduct]);



	const handleImgSrces = (arr: []) => setImgSrces(prev => [...arr]);

	const handleChangeFormData = ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		setFormData({
			...formData,
			[name]: value,
		});
	};
     
	const handleDimonds = ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		setDimonds({...diamond, [name]: value});
	};

	const handlePrice = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		setPrices({...prices, [name]: value});
	};

	const disAdd = (formData.name.trim().length === 0) || (formData.description.trim().length === 0) ||
                   (formData.code.trim().length === 0);


	const toggleShowSlice = () => setShowSlice(!showSlice);

	const handleWeight = (value: string[] | number[]) => {
		setWeight((prev: []) => [...value]);
	};

	const handleSize = (value: string[] | number[]) => {
		setSize((prev: []) => [...value]);
	};

	const handleBoolean = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target;

		if (name === 'publish') {
			if (value === 'yes') setBublish(true); 
			else setBublish(false); 
		}

		else if (name === 'stone') {
			if (value === 'yes') setSone(true); 
			else setSone(false)
		}

		else if (name === 'newProduct') {
			if (value === 'yes') setNewProduct(true); 
			else setNewProduct(false)
		}

	}; 


	const handleSave = () => {
		console.log(formData, 'add object')
		dispatch(addProduct(formData));
	};


	return (
		<div className='addProduct'>

			<CrateInput title='name' value={formData.name} handleChangeData={handleChangeFormData} />
			<CrateInput title='description' value={formData.description} handleChangeData={handleChangeFormData}/>

			<Creator data={filters.firstCategory} handleChangeData={handleChangeFormData} />
			<PublishSelecStoneBollean name={'publish'} handleBoolean={handleBoolean} />
			<PublishSelecStoneBollean name={'stone'} handleBoolean={handleBoolean} />
			<PublishSelecStoneBollean name={'newProduct'} handleBoolean={handleBoolean} />

			<Creator data={filters.productDetals} handleChangeData={handleChangeFormData} />
			<WeightSizeCratorValue name={'weight'} listData={weightListData} handleWeight={handleWeight} />
			<WeightSizeCratorValue name={'size'} listData={sizeListData} handleWeight={handleSize} />
			<CrateInput title='count' value={formData.count} handleChangeData={handleChangeFormData} />
			<CrateInput title='discount' value={formData.discount} handleChangeData={handleChangeFormData} />
			<CrateInput title='bestSales' value={formData.bestSales} handleChangeData={handleChangeFormData} />


			<AddColor name={'color'} data={initialColor}  handleChangeData={handleChangeFormData} />

			<div>
				<label> ADD STOUNS ATRIBUTS
					<input type="checkbox" onChange={toggleShowSlice} checked={showSlice}/>
				</label>
				{
					showSlice ||
					<>
					   <Creator data={filters.dimonds} handleChangeData={handleDimonds}/>
					   <CrateInput title='carat' value={formData.diamond.carat} handleChangeData={handleDimonds} />
					   <CrateInput title='pcs' value={formData.diamond.pcs} handleChangeData={handleDimonds} />
					</>
				}
			</div>

			<CrateInput title={'price'} value={formData.prices.price} handleChangeData={handlePrice} />
			<CrateInput title={'oldPrice'} value={formData.prices.oldPrice} handleChangeData={handlePrice} />
			<CrateInput title={'code'} value={formData.code} handleChangeData={handleChangeFormData} />
			<AddImages handleImgSrces={handleImgSrces} />


			<button disabled={false} onClick={handleSave}>save product</button>
		</div>
	);
};


export default AddProduct;