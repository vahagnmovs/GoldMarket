import React from 'react';
import 'src/style/base/_globals.scss';
import { TGoldPriceListProps } from './type';

function GoldPriceList({ isShowMoreBtn }: TGoldPriceListProps) {
	return (
		<div>
			<div className={'bg_color'}>
				<table className={'table-price'}>
					<colgroup>
					</colgroup>
					<thead>
						<tr>
							<th className="large-width">GOLD</th>
							<th>BUY</th>
							<th>SELL</th>
							<th>+ OR -</th>
							<th>TIME</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className={'tr2'}>999 - 24k</td>
							<td>56.3</td>
							<td>56.9</td>
							<td className='green'>-0.20</td>
							<td>15:29:23</td>
						</tr>
						<tr>
							<td className="large-width">999 - 24k</td>
							<td>56.3</td>
							<td>56.9</td>
							<td className='green'>-0.20</td>
							<td>15:29:23</td>
						</tr>
					</tbody>

					<tr className={'tr2'}>
						<td className="large-width">999 - 24k</td>
						<td >56.3</td>
						<td>56.9</td>
						<td className='green'>-0.20</td>
						<td>15:29:23</td>
					</tr>
				</table>
				{
					isShowMoreBtn
					&&
					<table className={'table-price table_shoe_more'}>
						<tbody>
							<tr>
								<td className={'tr2'}>999 - 24k</td>
								<td>56.3</td>
								<td>56.9</td>
								<td className='green'>-0.20</td>
								<td>15:29:23</td>
							</tr>
							<tr>
								<td className="large-width">999 - 24k</td>
								<td>56.3</td>
								<td>56.9</td>
								<td className='green'>-0.20</td>
								<td>15:29:23</td>
							</tr>
						</tbody>
						<tfoot>
							<tr className={'tr2'}>
								<td className="large-width">999 - 24k</td>
								<td>56.3</td>
								<td>56.9</td>
								<td className='green'>-0.20</td>
								<td>15:29:23</td>
							</tr>
						</tfoot>
					</table>
				}
			</div>
		</div>
	);
}

export default GoldPriceList;