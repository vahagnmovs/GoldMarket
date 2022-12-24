import React from 'react';

type TPaymentInfo = {
   creditCard: string;
   fullNamme: string;
   items: string;
   total: string;
}
const PaymentInfo = ({ creditCard, fullNamme, items, total }: TPaymentInfo) => {
   return (
      <div>
         <p>CREDIT CARD ..........<span>{creditCard}</span></p>
         <p>FULL NAME ..........<span>{fullNamme}</span></p>
         <p>DATE & TIME ..........<span>{ }</span></p>
         <p>2 ITEMS ..........<span>{items}</span></p>
         <p>ORDER TOTAL ..........<span>{total}</span></p>

      </div>
   );
};

export default PaymentInfo;