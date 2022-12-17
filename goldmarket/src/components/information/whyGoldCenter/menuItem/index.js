import '../index.css'

 const MenuItem = ({ imgSrc, title }) => {



    return(
        <div className='itemMenuDiv'>
            <img className='menuImg' src={imgSrc} />

            <div className='itemTitle'>
               <p> {title} </p> 
            </div>
        </div>
    )
}

export default MenuItem