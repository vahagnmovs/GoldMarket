import React from 'react';
import Header from 'src/components/header/header';
import Dashboard from '../dashboard';
import OrderInfo from '../orderInfo';
import PaymentInfo from '../paymentinfo';
import Products from '../products';
import ShippindAddress from '../shippindAddress';

// FIXME: datan pozel erb irakan datan klini 
const orderInfoData = [
	{
		id: "1",
		img: 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/the-tiffany-setting-engagement-ring-in-platinum-22086588_995766_ED_M.jpg',
		price: '$500',
		productName: 'Aquamarine and 1/4 ct. tw. Diamond Ring in 10K Rose Gold',
		productCode: 'AL0456',
		size: '55',
		color: 'Gold',
		fullNamme: 'JON DOE',
		creditCard: ' **** **** **** 9466',
		items: '1659$',
		address: '950 Ridge RD C25, P4332 Claymont, DE 19703-3538United States',
		time: 'NOV 3, 2021 AT 1:36 AM',
		total: '$850 (1 ITEM)',
		orderNumber: '05-07817-78619',
		soldBy: 'ALDORO, BRILLIANT EXPRESSIONS'
	}, {
		id: "2",
		img: 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/the-tiffany-setting-engagement-ring-in-platinum-22086588_995766_ED_M.jpg',
		price: '$500',
		productName: 'Aquamarine and 1/4 ct. tw. Diamond Ring in 10K Rose Gold',
		productCode: 'AL0456',
		size: '55',
		color: 'Gold',
		fullNamme: 'JEINN LI',
		creditCard: ' **** **** **** 9466',
		items: '1659$',
		address: '950 Ridge RD C25, P4332 Claymont, DE 19703-3538United States',
		time: 'NOV 3, 2021 AT 1:36 AM',
		total: '$850 (1 ITEM)',
		orderNumber: '05-07817-78619',
		soldBy: 'ALDORO, BRILLIANT EXPRESSIONS'

	}
]
const OrderInfoList = () => {
	return (<>
		<Header />
		<div className='dash'>
			<Dashboard />
		</div>
		<div className='container'>
			<div className='OrderInfoList'>
				<div>
					<h3>Order info</h3>
					{orderInfoData.map(item => <OrderInfo key={item.id} time={item.time}
						total={item.total} orderNumber={item.orderNumber} soldBy={item.soldBy} />)}
				</div>
				<div>
					<h3>Shippind address</h3>
					{orderInfoData.map(item => <ShippindAddress key={item.id} fullNamme={item.fullNamme}
						address={item.address} />)}
				</div>
				<div>
					<h3>Payment info</h3>
					{orderInfoData.map(item => <PaymentInfo key={item.id} creditCard={item.creditCard}
						fullNamme={item.fullNamme} items={item.items} total={item.total} />)}
				</div>
				<div>
					<h3>Products (2)</h3>
					{orderInfoData.map(item => <Products key={item.id} name={item.productName}
						img={item.img} price={item.price} gold={item.color} size={item.size}
						productCode={item.productCode} />)}
				</div>
			</div>
		</div>

	</>


	);
};

export default OrderInfoList;