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
      <div>
         <div>
            <img src={img} alt="productsImg" />
         </div>
         <div>
            <p>{name}</p>
            <p>BRILLIANT EXPRESSIONS</p>
            <p>Product code: <span>{productCode}</span></p>
            <p>Size: <span>{size}</span></p>
            <p>Color: <span>{gold}</span></p>
            <p>{price}</p>
         </div>

      </div>
   );
};

export default Products;