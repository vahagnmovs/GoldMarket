import React,{ useState, useEffect } from 'react';

type TProps = {
   name: string;
   listData: string[] | number[];
   initialCheckdArr: string[] | number[];
   handleWeight: (value: string[] | number[]) => void;
}

   
const EditWeigthSize = ({ name, listData, initialCheckdArr, handleWeight }: TProps) => {

const [checkedList, setCheckedList] = useState<any>(initialCheckdArr);
const [mutateList, setMutateList] = useState<string[]>([]);
const [flag, setFlag] = useState(true);



  
	useEffect(() => {
		handleWeight(checkedList);  
	}, [checkedList]);

   useEffect(() => {
      //@ts-ignore
      setMutateList(listData.reduce((aggr: any, el: never) => {  // ????
            const newObj = {id: el, completed: initialCheckdArr.includes(el) ? true : false }
            aggr.push(newObj)
            return aggr;
      }, []))
  }, [])


	const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked  } = event.target;

      setMutateList((prev: any) => prev.map((elem: any) => {
         if(name == elem.id) return {...elem, completed: !(elem.completed)}
         return elem
      }))

		if (checked) {
         setCheckedList([...checkedList, +value]);
		} else {
			const filteredList = checkedList.filter((item: number | string) => item !== +value);
			setCheckedList(filteredList);
		}
	};

	const handleFlag = () => setFlag(!flag);


  return (
    <div>
       <span style={{cursor: 'pointer'}} onClick={handleFlag}> {name} </span>
       {flag || 
       <>
       {
          mutateList.length !== 0 
          &&
          mutateList.map((el:any) => {
            return <div key={Math.random()}>
                <label> {el.id} </label>
                <input name={el.id}
                       type='checkbox' 
                       onChange={handleChecked} 
                       value={el.id} 
                       checked={el.completed}
                />
            </div>
          })
       }
       
       </>}

    </div>
  )
}

export default EditWeigthSize