
interface IProps {
    title: string
    value: string
    handleChangeData: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const CrateInput: React.FC<IProps> = ({ title, value, handleChangeData }) => {



    return(
        <div>
            <label> {title} </label>
            <input type='text' name={title} placeholder={title} onChange={handleChangeData} value={value} />
        </div>
    )
}

export default CrateInput