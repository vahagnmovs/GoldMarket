import React from 'react';
import Header from 'src/components/header/header';
import Dashboard from '../dashboard';
import Products from '../products';


// FIXME: datan pozel erb irakan datan klini 

const orderInfoData = {
    id: "1",
    fullNamme: 'JON DOE',
    creditCard: ' **** **** **** 9466',
    items: '1659$',
    address: '950 Ridge RD C25, P4332 Claymont, DE 19703-3538United States',
    time: 'NOV 3, 2021 AT 1:36 AM',
    total: '$850 (1 ITEM)',
    orderNumber: '05-07817-78619',
    soldBy: 'ALDORO, BRILLIANT EXPRESSIONS',
    product: [{
        productId: '1',
        productCode: 'AL0456',
        size: '55',
        color: 'Gold',
        price: '$500',
        productName: 'Aquamarine and 1/4 ct. tw. Diamond Ring in 10K Rose Gold',
        img: 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/the-tiffany-setting-engagement-ring-in-platinum-22086588_995766_ED_M.jpg',
    }, {
        productId: '2',
        productCode: 'AL0456',
        size: '55',
        color: 'Gold',
        price: '$500',
        productName: 'Aquamarine and 1/4 ct. tw. Diamond Ring in 10K Rose Gold',
        img: 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/the-tiffany-setting-engagement-ring-in-platinum-22086588_995766_ED_M.jpg',
    }]
}
const OrderInfoList = () => {
    return (<>
            <Header/>
            <div className='dash'>
                <Dashboard/>
            </div>
            <div className='container'>
                <h3>Order info</h3>
                <div className='OrderInfoList flex '>
                    <div>
                        <h2>TIME PLACED</h2>
                        <p>{orderInfoData.time}</p>
                        <h2>TOTAL</h2>
                        <p>{orderInfoData.total}</p>
                    </div>
                    <div>
                        <h2>ORDER NUMBER</h2>
                        <p>{orderInfoData.orderNumber}</p>
                        <h2>SALD BY</h2>
                        <p>{orderInfoData.soldBy}</p>
                    </div>
                </div>
                <h3>Shippind address</h3>
                <div className='OrderInfoList2 flex '>
                    <div>
                        <h2>FULL NAME</h2>
                        <p>{orderInfoData.fullNamme}</p>
                    </div>
                    <div>
                        <h2>ADDREPP</h2>
                        <p>{orderInfoData.address}</p>
                    </div>
                </div>
                <div>
                    <div className={'ket2'}>
                        <h3>Payment info</h3>
                        <div className={'ket'}>
                            <p>CREDIT CARD ..........................................................................................................<span>{orderInfoData.creditCard}</span></p>
                            <p>FULL NAME .............................................................................................................<span>{orderInfoData.fullNamme}</span></p>
                            <p>DATE & TIME ............................................................................................................<span>{orderInfoData.time}</span></p>
                            <p>2 ITEMS ....................................................................................................................<span>{orderInfoData.items}</span></p>
                            <p>ORDER TOTAL ..........................................................................................................<span>{orderInfoData.total}</span></p>
                        </div>
                    </div>
                    <div>
                        <h3>Products (2)</h3>
                        {orderInfoData.product.map(item => <Products key={item.productId} name={item.productName}
                                                                     img={item.img} price={item.price} gold={item.color}
                                                                     size={item.size}
                                                                     productCode={item.productCode}/>)}
                    </div>
                </div>
            </div>
        </>


    );
};

export default OrderInfoList;