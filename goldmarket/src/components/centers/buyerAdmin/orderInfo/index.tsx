import React from 'react'

type TOrderInfo ={
   time : string;
   total : string;
   orderNumber : string;
   soldBy : string;
}

const OrderInfo = ({time, total, orderNumber, soldBy} : TOrderInfo) => {
  return (
    <div>
      <div>
         <p>TIME PLACED</p>
         <p>{time}</p>
         <p>TOTAL</p>
         <p>{total}</p>
      </div>
      <div>
         <p>ORDER NUMBER</p>
         <p>{orderNumber}</p>
         <p>SALD BY</p>
         <p>{soldBy}</p>

      </div>
    </div>
  )
}

export default OrderInfo