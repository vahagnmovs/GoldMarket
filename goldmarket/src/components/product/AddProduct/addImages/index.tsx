import { useRef, useState, useEffect } from "react"

interface IProps {
    handleImgSrces: (arr: []) => void
}

export const AddImages: React.FC<IProps> = ({ handleImgSrces }) => {
    

    const [images, setImages] = useState<any>([])
    let idRef = useRef(0)

    function changeImageState(src: any){
      setImages([...images,...src])
    }
useEffect(() => {
    handleImgSrces(images)

}, [images.length])

     //

      const handleInputChange = (e: any) => {

        const { files } = e.target

        changeImageState([...files].map((file) => {
            return {
                src: URL.createObjectURL(file),
                id: ++idRef.current
            }
        }))
        e.target.value = ''
      }
      
     
      //
    const deleteImg = (id: string) => {
        setImages((prev: any) => prev.filter((img: any) => img.id !== id))
    }    

    // console.log(images, 'images')
    return(
        <div>
            <h3> ADD IMAGES / VIDEOS </h3>
            <input className='inputPhoto'  multiple={true} accept="image/jpeg , image/png" 
                   onChange={handleInputChange} type="file" />

            {
                images.length !== 0 
                  &&
                <div className="imgDiv">
                    {
                        images.map((e: any) =>  <div key={e.id}> 
                            <img src={e.src} />
                            <button onClick={() => deleteImg(e.id)}>X</button>
                        </div>)   
                    }
                </div>

            } 

            {/* <button onClick={() => handleImgSrces(images)}> add image </button>     */}
        </div>
    )
}



