interface mapProps{
    id:string;
    title: string;
    img:string;
    handleShoppingCentr: (title:string)=> void
}

const Map = ({id, title, img, handleShoppingCentr}: mapProps) => {
    
    return (
        <div id={id} className="map" onClick={()=> handleShoppingCentr(title)}>
            <img src={img} alt="Map" />
            <h4>{title}</h4>
        </div>
    );
}

export default Map;
