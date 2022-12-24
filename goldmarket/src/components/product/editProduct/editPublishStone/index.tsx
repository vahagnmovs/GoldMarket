import React, { useEffect, useState } from 'react'

interface IProps {
   name: string
   defaultValue: any
   handleBoolean: (evt: React.ChangeEvent<HTMLSelectElement>) => void
}

const EditPublishStone = ({ name, defaultValue, handleBoolean }: IProps) => {

  const [value, setValue] = useState('')

  useEffect(() => {
      if(defaultValue) setValue('yes')
      else setValue('no')
  }, [value])


return (
   <div>
      <label>{name.toUpperCase()}</label>
      <select name={name} defaultValue={value} onChange={handleBoolean}>
         <option disabled>{name}</option>
         <option value={'yes'}>yes</option>
         <option value={'no'}>no</option>
      </select>
   </div>
);
}

export default EditPublishStone