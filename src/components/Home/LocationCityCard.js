import { Link } from "react-router-dom";


const LocationCityCard = (props) => {
    return (
        <article className="city-item">
    
        <article className="city-item-img"><img
                src={props.festival.imgUrlLoc} alt=""/>
            <p className="city-name"><Link to="/" className="city-btn">{props.festival.location}</Link> </p>
           
        </article>
    </article>
    );
}

export default LocationCityCard;