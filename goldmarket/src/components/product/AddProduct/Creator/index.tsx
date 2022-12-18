
interface IProps {
    data: any
    handleChangeData: (evt: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void
}

const Creator: React.FC<IProps> = ({ data, handleChangeData }) => {

    return(
        <div>
         {
            data.map((elem: any) => {
              const key = Object.keys(elem).join()
              
              return <div>
                  <label> {key} </label>
                  <select name={key} onChange={handleChangeData}>
                      <option selected disabled>{key}</option>
                      { elem[key].map((el: any) => <option value={el}> {el} </option>) }
                  </select> 
              </div>
                                    
            })
         }   
        </div>
    )
}


export default Creator

