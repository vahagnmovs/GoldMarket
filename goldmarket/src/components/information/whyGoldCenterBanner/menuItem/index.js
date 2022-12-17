import "src/style/components/_Why_Gold_Center.scss"
 const MenuItem = ({ imgSrc, title }) => {



    return(
        <div className="item_menu_div">
            <img  src={imgSrc} />
            <div className="item_title">
               <span> {title} </span>
            </div>
        </div>
    )
}

export default MenuItem