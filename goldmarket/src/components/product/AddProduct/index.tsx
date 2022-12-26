import React, {useEffect, useState} from 'react';
import {
    filters,
    initialColor,
    initialDimonds,
    initialPrices,
    initialState,
    sizeListData,
    weightListData
} from 'src/components/constants';
import CrateInput from '../createInput';
import AddImages from './addImages';
import Creator from './Creator';
import PublishSelecStoneBollean from './PublishSelecStoneBollean';
import WeightSizeCratorValue from './WeightSizeCratorValue';
import {useAppDispatch} from 'src/hooks/redux-hooks';
import {addProduct} from 'src/store/products/productSlice';
import AddColor from './Creator/addColor';
import {db} from 'src/firebase';
import {addDoc, collection} from "firebase/firestore";
import {log} from "util";
import randomID from "src/hooks/uuid";
import {redirect} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import open from 'src/style/Icons/open.png'

export type TWeight = {
    name: { key: number[] | string[] }
}

const AddProduct: React.FC = () => {

    // const searchParams = new URLSearchParams(window.location.href);
    // const sellerID = searchParams.get('sellerID')
    const sellerID = 'A001';

    const [product, setProduct] = useState(initialState);

    const [prices, setPrices] = useState(initialPrices);
    const [diamond, setDimonds] = useState(initialDimonds);
    const [weight, setWeight] = useState<any>([]);
    const [size, setSize] = useState<any>([]);

    const [publish, setPublish] = useState<boolean | undefined>();
    const [stone, setStone] = useState<boolean | undefined>(false);
    const [newProduct, setNewProduct] = useState<boolean | undefined>(false);

    const [showSlice, setShowSlice] = useState(false);
    const [images, setImgSources] = useState([]);


    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        setProduct({...product, images});
    }, [images]);

    useEffect(() => {
        setProduct({...product, diamond});
    }, [diamond]);

    useEffect(() => {
        setProduct({...product, prices});
    }, [prices]);

    useEffect(() => {
        setProduct({...product, weight});
    }, [weight]);

    useEffect(() => {
        setProduct({...product, size});
    }, [size]);

    useEffect(() => {
        setProduct({...product, publish});
    }, [publish]);

    useEffect(() => {
        setProduct({...product, stone});
    }, [stone]);

    useEffect(() => {
        setProduct({...product, newProduct});
    }, [newProduct]);


    const handleImgSources = (arr: []) => setImgSources(prev => [...arr]);

    const handleChangeFormData = ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setProduct({
            ...product,
            sellerID,
            [name]: value,
        });
    };

    const handleDiamonds = ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setDimonds({...diamond, [name]: value});
    };

    const handlePrice = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setPrices({...prices, [name]: value});
    };

    const disAdd = (product.name.trim().length === 0) || (product.description.trim().length === 0) ||
        (product.code.trim().length === 0);


    const toggleShowSlice = () => setShowSlice(!showSlice);

    const handleWeight = (value: string[] | number[]) => {
        setWeight((prev: []) => [...value]);
    };
    const handleSize = (value: string[] | number[]) => {
        setSize((prev: []) => [...value]);
    };

    const handleBoolean = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;

        if (name === 'publish') {
            if (value === 'yes') setPublish(true);
            else setPublish(false);
        } else if (name === 'stone') {
            if (value === 'yes') setStone(true);
            else setStone(false);
        } else if (name === 'newProduct') {
            if (value === 'yes') setNewProduct(true);
            else setNewProduct(false);
        }
    };


    const handleSave = () => {
        // console.log(formData, 'formData')
        addDoc(collection(db, 'products'), {
            ...product
        })
            .then(() => navigate('/products'))
    };

    return (
        <div className='addProductz container  flex justify-between dir-col'>

            <div className={'flex justify-between'}>
                <div className={'flex dir-col  product_name_d'}>
                    <CrateInput title='name' value={product.name} handleChangeData={handleChangeFormData}/>
                    <CrateInput title='description' value={product.description}
                                handleChangeData={handleChangeFormData}/>
                </div>
                <div className={'flex dir-col  product_name_d align-center text-center'}>
                    <Creator data={filters.firstCategory} handleChangeData={handleChangeFormData}/>
                </div>
            </div>

            <div className={'flex justify-between product_name_d2'}>
                <div className={'flex dir-col  '}>
                    <PublishSelecStoneBollean name={'publish'} handleBoolean={handleBoolean}/>
                    <PublishSelecStoneBollean name={'stone'} handleBoolean={handleBoolean}/>
                    <PublishSelecStoneBollean name={'newProduct'} handleBoolean={handleBoolean}/>
                </div>


                <div className={'flex dir-col  '}>
                    <Creator data={filters.productDetails} handleChangeData={handleChangeFormData}/>
                    <div className={'checkbox11 text-center flex justify-between align-center'}>
                        <WeightSizeCratorValue name={'weight'} listData={weightListData} handleWeight={handleWeight}/>
                        <img src={open}/>
                    </div>
                    <div className={'checkbox11 text-center flex justify-between align-center'}>
                        <WeightSizeCratorValue name={'size'} listData={sizeListData} handleWeight={handleSize}/>
                        <img src={open}/>
                    </div>

                    <AddColor name={'color'} data={initialColor} handleChangeData={handleChangeFormData}/>

                </div>

            </div>

            <div className={'flex justify-between  product_name_d2'}>
                <div>
                    <CrateInput title='count' value={product.count} handleChangeData={handleChangeFormData}/>
                    <CrateInput title='discount' value={product.discount} handleChangeData={handleChangeFormData}/>
                    <CrateInput title='bestSales' value={product.bestSales} handleChangeData={handleChangeFormData}/>
                </div>

                <div>
                    <CrateInput title={'price'} value={product.prices.price} handleChangeData={handlePrice}/>
                    <CrateInput title={'oldPrice'} value={product.prices.oldPrice} handleChangeData={handlePrice}/>
                    <CrateInput title={'code'} value={product.code} handleChangeData={handleChangeFormData}/>
                </div>

            </div>

            <div className={'flex dir-col product_name_d_3'}>
                <div className={'align-center flex lab_chec '}>
                    <label> ADD STONE ATTRIBUTES
                        <input type="checkbox" onChange={toggleShowSlice} checked={showSlice}/>
                    </label>
                </div>

                {
                    showSlice ||
                    <>
                        <Creator data={filters.diamonds} handleChangeData={handleDiamonds}/>
                        <CrateInput title='carat' value={product.diamond.carat} handleChangeData={handleDiamonds}/>
                        <CrateInput title='pcs' value={product.diamond.pcs} handleChangeData={handleDiamonds}/>
                    </>
                }
            </div>
            <div className={'hitle_h33'}>
                <h3> ADD IMAGES / VIDEOS </h3>
            </div>
            <div className={'flex align-center justify-between end_add'}>
                <AddImages handleImgSrces={handleImgSources}/>
                <button disabled={false} onClick={handleSave}>save product</button>
            </div>

        </div>
    );
};


export default AddProduct;