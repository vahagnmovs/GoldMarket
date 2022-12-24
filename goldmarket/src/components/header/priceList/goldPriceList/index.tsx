import React, {useState} from 'react';
import 'src/style/base/_globals.scss';
import { TGoldPriceListProps } from './type';
import {tableProductsPrice} from 'src/data/tableData'
import GoldPrice from "../goldPrice";
import newLengthTablePrice from "./newLengthTablePrice";

type TGoldPriceList = {
	show: boolean;
}


function GoldPriceList({show}: TGoldPriceList) {
	const [newLength, setNewLength] = useState(4)
	const [isShowMoreBtn, getIsShowMoreBtn] = useState(false);
	const goldPrice = newLengthTablePrice(tableProductsPrice, newLength)
	const handleLength = () => {
		if(newLength === 4){
			setNewLength(8);
			getIsShowMoreBtn(!isShowMoreBtn);
		}else{
			setNewLength(4);
			getIsShowMoreBtn(!isShowMoreBtn);
		}
	}
	return (
		<div>
			<div className={'bg_color'}>
				<table className={'table-price'}>
					<thead>
						<tr>
							<th className="large-width">GOLD</th>
							<th>BUY</th>
							<th>SELL</th>
							<th>+ OR -</th>
							<th>TIME</th>
						</tr>
					</thead>
					{goldPrice.map((item, i) => <GoldPrice key={item.time} index={i} gold={item.gold} buy={item.buy} sell={item.sell} incOrder={item.incOrder} time={item.time}/>
						)}
				</table>
				{show && <button className={'show_more_btn width_100'}
						 onClick={handleLength}>{isShowMoreBtn ? "SHOW LESS" : "SHOW MORE"}
				</button>}
			</div>
		</div>
	);
}

export default GoldPriceList;