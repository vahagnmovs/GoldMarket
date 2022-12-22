import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux-hooks';
import AddProduct from '../AddProduct';

const EditProduct = () => {
  
    const { id }: any = useParams();

    console.log(id)
    const product = useAppSelector(({ products }) => products);
    console.log(product)

    // const find = product.find((el) => console.log(e))
    
    return (
      <div>EditProduct

        <AddProduct />

      </div>
    )
}

export default EditProduct;