import React from 'react';
type TModalInput = {
   title : string
   inputValue?: string | undefined;
   name: string;
   handleOnCange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const ModalInput = ({title, inputValue, name, handleOnCange }: TModalInput) => {
   return (
      <div className={'flex dir-col input_title_text'}>
         <label>{title}</label>
         <input type="text" value={inputValue} name={name} onChange={handleOnCange} />
      </div>
   );
};

export default ModalInput;