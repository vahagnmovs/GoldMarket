import React from 'react';

type TProducts = {
   name : string
   img: string;
   price: string;
   gold: string;
   size: string;
   productCode: string;
}
const Products = ({ name, img, price, gold, size, productCode }: TProducts) => {
   return (
      <div className={' gap2 flex'} >
         <div className={'products_img'} >
            <img src={img} alt="productsImg" />
         </div>
         <div className={'product_info_order'}>
            <p>{name}</p>
            <h1>BRILLIANT EXPRESSIONS</h1>
            <h1>Product code: <span>{productCode}</span></h1>
            <h6>Size: <span>{size}</span></h6>
            <h6>Color: <span>{gold}</span></h6>
            <h2>{price}</h2>
         </div>

      </div>
   );
};

export default Products;