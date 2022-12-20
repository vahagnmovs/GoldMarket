import React from 'react';

interface IProps  {
    prices: {
        price: string
        oldPrice: string
    } 

    code: string
    handlePrice: (evt: React.ChangeEvent<HTMLInputElement>) => void
    handleState: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const ProductPrice: React.FC<IProps> = ({ prices: { price, oldPrice }, code, handlePrice, handleState }) => {


	return(
		<div>
			<h3> ADD PRODUCT PRICE </h3>
			<div>
				<p> PRODUCT PRICE </p>
				<input type='number' name='price' onChange={handlePrice} value={price} />
			</div>

			<div>
				<p> OLD PRICE </p>
				<input type='number' name='oldPrice' onChange={handlePrice}  value={oldPrice} />
			</div>

			<div>
				<p> PRODUCT CODE </p>
				<input type='text' name='code' onChange={handleState} value={code} />
			</div>
		</div>
	);
};

export default ProductPrice;