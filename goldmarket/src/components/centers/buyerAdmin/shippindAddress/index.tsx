import React from 'react';

type TShippindAddress = {
   fullNamme : string;
   address : string;
}

const ShippindAddress = ({fullNamme, address} : TShippindAddress) => {
  return (
    <div>
      <p>{fullNamme}</p>
      <p>{address}</p>
    </div>
  );
};

export default ShippindAddress;