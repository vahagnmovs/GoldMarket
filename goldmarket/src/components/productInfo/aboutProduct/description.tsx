import React from 'react';
import { ProductsTypes, DiamondTypes } from 'src/data/products';

interface DescriptionProps {
	infoProduct: ProductsTypes
}
const Description = ({ infoProduct }: DescriptionProps) => {
	const { carat, color, clarity, cut, pcs, }: DiamondTypes = infoProduct.diamond;
	const { name, metal, fineness, weight } = infoProduct;
	return (
		<div className={'description_page'}>
			<div className={'description_into'}>
				<h1>Description</h1>
				<table className={'table-price'} >
					<tbody>
						<tr>
							<th className={'large-width'}>NAME</th>
							<th>CONDITION</th>
							<th>ORIGIN</th>
							<th>material</th>
							<th>fineness</th>
							<th>weight</th>
						</tr>
						<tr >
							<td>{name}</td>
							<td>NEW</td>
							<td>ARMENIA</td>
							<td>{metal}</td>
							<td>{fineness}</td>
							{/*//FIXME:*/}
							{/*<th>{weight[indexweight]}</th>*/}
						</tr>
						<tr >
							<td className={'large-width'}>STONE</td>
							<td>CARAT</td>
							<td>PCS</td>
							<td>COLOR</td>
							<td>CLARITY</td>
							<td>CUT</td>
						</tr>
						<tr>
							<td>DIAMOND</td>
							<td>{carat}CT</td>
							<td>26</td>
							<td>{color}</td>
							<td>{clarity}</td>
							<td>{cut}</td>
						</tr>
						<tr>
							<td>2 DIAMOND</td>
							<td>{carat}CT</td>
							<td>26</td>
							<td>{color}</td>
							<td>{clarity}</td>
							<td>{cut}</td>
						</tr>
						<tr>
							<th >TOTAL</th>
							<th>{carat + carat} CT</th>
							<th>52</th>
						</tr>
					</tbody>

				</table>
			</div>

		</div>
	);
};

export { Description };