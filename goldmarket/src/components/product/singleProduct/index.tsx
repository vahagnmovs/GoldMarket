import React from 'react'

import { useParams } from 'react-router-dom'
import { product } from "src/components/constants"
import { ProductDetals } from './productDetals'


export const SingleProduct: React.FC = () => {

    const { id }: any = useParams()
    // console.log(id)

    // any-n dzel, verevy tal type handleProduct-i

    const handleProduct: any = product.reduce((aggr, product) => {
       if (product.id != id) return product 
        return aggr 
    }, {})

    // console.log(handleProduct, 'handleProduct')
    
    const { photo, name } = handleProduct

    return(
        <div >

            <div className='single'>
                <img className='productItemPhoto' src={photo} />
                <div> <h3> {name} </h3> </div>
                <div> 
                    <button>X</button>    
                    <button>X</button>    
                </div> 
            </div>


            <ProductDetals product={handleProduct} />
        </div>
    )
}

