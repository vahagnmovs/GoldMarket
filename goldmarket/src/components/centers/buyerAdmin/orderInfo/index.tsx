import React from 'react'

type TOrderInfo ={
   time : string;
   total : string;
   orderNumber : string;
   soldBy : string;
}

const OrderInfo = ({time, total, orderNumber, soldBy} : TOrderInfo) => {
  return (
    <div className={'orderinfo'}>
      <div>
         <h1>TIME PLACED</h1>
         <p>{time}</p>
         <h1>TOTAL</h1>
         <p>{total}</p>
      </div>
      <div>
         <h1>ORDER NUMBER</h1>
         <p>{orderNumber}</p>
         <h1>SALD BY</h1>
         <p>{soldBy}</p>

      </div>
    </div>
  )
}

export default OrderInfo