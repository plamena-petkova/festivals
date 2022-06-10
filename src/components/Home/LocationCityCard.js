import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const LocationCityCard = (festival) => {
    return (
        <article className="city-item">
    
        <article className="city-item-img"><img
                src="https://amirrorofmind.files.wordpress.com/2017/11/cover.jpg?w=1304" alt=""/>
            <p className="city-name"><NavLink to="/" className="city-btn">{festival.location}</NavLink> </p>
        </article>
    </article>
    );
}

export default LocationCityCard;