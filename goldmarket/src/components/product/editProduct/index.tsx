import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux-hooks';

import CrateInput from '../createInput';
import { product, products, ProductsTypes } from './data';
import { initialClarity, initialCollection, initialColor, initialCut, initialDiamondColor, initialFinenes, initialForWhom, initialMetal, initialPublish, sizeListData, weightListData } from 'src/components/constants';
import EditCreator from './editCreator';
import EditWeigthZize from './editWeightSize';
import EditWeigthSize from './editWeightSize';
import EditPublishStone from './editPublishStone';
import AddProduct from '../AddProduct';
import EditdImages from './editImage';

const EditProduct = () => {

	const [formData, setFormData] = useState(product)
	const [diamond, setDimonds] = useState(formData!.diamond);
	const [weight, setWeight] = useState<any>([]);
	const [size, setSize] = useState<any>([]);
	const [prices, setPrices] = useState(formData!.prices);
	const [publish, setBublish] = useState<boolean | undefined>(formData!.publish);
	const [stone, setStone] = useState<boolean | undefined>(formData!.stone);
	const [images, setImgSrces] = useState(formData!.images);
	const [showSlice, setShowSlice] = useState(false);


   useEffect(() => {
	//@ts-ignore
		setFormData({...formData, diamond});
	}, [diamond]);

	useEffect(() => {
	//@ts-ignore
		setFormData({...formData, weight});
	}, [weight]);
	useEffect(() => {
	//@ts-ignore
		setFormData({...formData, size});
	}, [size]);

	useEffect(() => {
	//@ts-ignore
		setFormData({...formData, prices});
	}, [prices]);

   useEffect(() => {
		//@ts-ignore
		setFormData({...formData, publish});
	}, [publish]);

	useEffect(() => {
		//@ts-ignore
		setFormData({...formData, stone});
	}, [stone])

	useEffect(() => {
		//@ts-ignore
		setFormData({...formData, images});
	}, [images]);
	

	// const { id }: any = useParams();
	// const product = useAppSelector(({ products }) => products);

   const handleChangeFormData = ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		// console.log(name, 'name', value);

		if (formData?.name) {
			setFormData((prev: any) => {
				return {
					...formData,
					[name]: value,
				}
			});
		};
	};


	const toggleShowSlice = () => setShowSlice(!showSlice);

	const handleDimonds = ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		setDimonds({...diamond, [name]: value});
	};

	const handleWeight = (value: string[] | number[]) => {
		setWeight((prev: []) => [...value]);
	};
	const handleSize = (value: string[] | number[]) => {
		setSize((prev: []) => [...value]);
	};

	const handlePrice = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = target;

		setPrices({...prices, [name]: value});
	};

	const handleBoolean = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target;

		if (name === 'publish') {
			if (value === 'yes') setBublish(true); 
			else setBublish(false); 
		}

		else if (name === 'stone') {
			if (value === 'yes') setStone(true); 
			else setStone(false); 
		}
	}; 

	const handleImgSrces = (arr: []) => setImgSrces(prev => [...arr]);

	
	// console.log(formData?.collection);
	
		return (
			<div>EditProduct
				<CrateInput title={'name'} value={formData!.name} handleChangeData={handleChangeFormData} />
			   <CrateInput title={'description'} value={formData!.description} handleChangeData={handleChangeFormData}/>

			   <EditCreator name={'metal'} data={initialMetal} defaultValue={formData!.metal} handleChangeData={handleChangeFormData} />
			   <EditCreator name={'forWhom'} data={initialForWhom} defaultValue={formData!.forWhom} handleChangeData={handleChangeFormData} />
			   <EditCreator name={'collection'} data={initialCollection} defaultValue={formData!.collection} handleChangeData={handleChangeFormData} />
            <EditPublishStone name={'publish'} defaultValue={formData?.publish} handleBoolean={handleBoolean} />
            
			   <EditCreator name={'fineness'} data={initialFinenes} defaultValue={formData!.fineness} handleChangeData={handleChangeFormData} />
			   <EditCreator name={'color'} data={initialColor} defaultValue={formData!.color} handleChangeData={handleChangeFormData} />

            <EditWeigthSize name={'weight'} listData={weightListData} initialCheckdArr={formData!.weight}  handleWeight={handleWeight} />
            <EditWeigthSize name={'size'} listData={sizeListData} initialCheckdArr={formData!.size}  handleWeight={handleSize} />


				<CrateInput title={'count'} value={formData!.count} handleChangeData={handleChangeFormData} />
			   <CrateInput title={'discount'} value={formData!.discount} handleChangeData={handleChangeFormData} />
				<EditPublishStone name={'stone'} defaultValue={formData!.stone} handleBoolean={handleBoolean} />

				<div>
				    <label> ADD STOUNS ATRIBUTS
			    		  <input type='checkbox' onChange={toggleShowSlice} checked={showSlice}/>
				    </label>
				{
					showSlice ||
					<>
			       <EditCreator name={'diamondColor'} data={initialDiamondColor} defaultValue={formData!.diamond.diamondColor} handleChangeData={handleDimonds} />
			       <EditCreator name={'clarity'} data={initialClarity} defaultValue={formData!.diamond.clarity} handleChangeData={handleDimonds} />
			       <EditCreator name={'cut'} data={initialCut} defaultValue={formData!.diamond.cut} handleChangeData={handleDimonds} />
                <CrateInput title={'carat'} value={formData!.diamond.carat} handleChangeData={handleDimonds} />
                <CrateInput title={'pcs'} value={formData!.diamond.pcs} handleChangeData={handleDimonds} />
					</>
				}
			   </div>

			   <CrateInput title={'price'} value={formData!.prices.price} handleChangeData={handlePrice} />
			   <CrateInput title={'oldPrice'} value={formData!.prices.oldPrice} handleChangeData={handlePrice} />
			   <CrateInput title={'code'} value={formData!.code} handleChangeData={handleChangeFormData} />


            <EditdImages initialData={images} handleImgSrces={handleImgSrces} />

				

            <button onClick={() => console.log(formData)}>save product</button>


			</div>
	);
};

export default EditProduct;