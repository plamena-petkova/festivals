import { Link } from "react-router-dom";


const LocationCityCard = (festival) => {
    return (
        <article className="city-item">
    
        <article className="city-item-img"><img
                src={festival.imgUrlLoc} alt=""/>
            <p className="city-name"><Link to="/" className="city-btn">{festival.location}</Link> </p>
           
        </article>
    </article>
    );
}

export default LocationCityCard;