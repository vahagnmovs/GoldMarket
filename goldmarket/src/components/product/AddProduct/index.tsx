import React, { useState, useEffect } from 'react'
import { filters, initialDimonds, initialPrices, initialState } from 'src/components/constants'
import CrateInput from '../createInput'

import { AddImages } from './addImages'
import Creator from './creator'

 



export const AddProduct: React.FC = () => {
   
    // const dispatch = useDispatch()
    // dispatch(addProduct(formData))


    /////// ============================================

    const [formData, setFormData] = useState(initialState);


    const [PRICES, setPrices] = useState(initialPrices)
    const [DIMONDS, setDimonds] = useState(initialDimonds)
    const [IMAGES, setImgSrces] = useState([])


    useEffect(() => {
        setFormData({ ...formData, IMAGES }
    )}, [IMAGES])

    useEffect(() => {
        setFormData({ ...formData, DIMONDS }
    )}, [DIMONDS])

    useEffect(() => {
        setFormData({ ...formData, PRICES }
    )}, [PRICES])

    const handleImgSrces = (arr: []) => setImgSrces(prev => [...arr])

    const handleChangeFormData = ({ target }: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormData({ 
            ...formData, 
            [name]: value,
            IMAGES,
            PRICES
        })
    }
    
    const handleDimonds = ({ target }: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target

        setDimonds({...DIMONDS, [name]: value})
    }

    const handlePrice = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target

        setPrices({...PRICES, [name]: value })
    }

    const disAdd = (formData.NAME.trim().length === 0) || (formData.DESCRIPTION.trim().length === 0) ||
                   (formData.WIGHT.trim().length === 0) || (formData.STONE.trim().length === 0) || 
                   (formData.CARAT.trim().length === 0) || (formData.CODE.trim().length === 0)

    


    const handleSave = () => {
        console.log(formData, 'formData')
    }


    return(
        <div className='addProduct'>

            <CrateInput title='NAME' value={formData.NAME} handleChangeData={handleChangeFormData} />
            <CrateInput title='DESCRIPTION' value={formData.DESCRIPTION} handleChangeData={handleChangeFormData} />
            <hr></hr>
            <Creator data={filters.firstCategory} handleChangeData={handleChangeFormData} />
        
            <hr></hr>
            <Creator data={filters.productDetals} handleChangeData={handleChangeFormData} />
            <CrateInput title='WIGHT' value={formData.WIGHT} handleChangeData={handleChangeFormData} />
    
            <hr></hr>
            <Creator data={filters.DIMONDS} handleChangeData={handleDimonds} />
            <CrateInput title={'STONE'} value={formData.STONE} handleChangeData={handleChangeFormData} />
            <CrateInput title={'CARAT'} value={formData.CARAT} handleChangeData={handleChangeFormData} />
            <CrateInput title={'PCS'} value={formData.PCS} handleChangeData={handleChangeFormData} />

            <hr></hr>
            <CrateInput title={'PRICE'} value={formData.PRICES.PRICE} handleChangeData={handlePrice} />
            <CrateInput title={'OLDPRICE'} value={formData.PRICES.OLDPRICE} handleChangeData={handlePrice} />
            <CrateInput title={'CODE'} value={formData.CODE} handleChangeData={handleChangeFormData} />

            <AddImages handleImgSrces={handleImgSrces} />

            <button disabled={disAdd} onClick={handleSave}>save product</button>
        </div>
    )
}