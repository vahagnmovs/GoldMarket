import { useNavigate } from "react-router-dom";


interface mapProps{
    id:string;
    title: string;
    img:string;
}

const Map = ({id, title, img}: mapProps) => {
    const navigate = useNavigate()
    return (
        <div id={id} className="map" onClick={()=> navigate(`/shoppingcenter/${title}/${id}`)}>
            <img src={img} alt="Map" />
            <h4>{title}</h4>
        </div>
    );
}

export default Map;
