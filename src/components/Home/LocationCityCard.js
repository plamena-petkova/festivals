import { Link } from "react-router-dom";


const LocationCityCard = () => {
    return (
        <article className="city-item">
    
        <article className="city-item-img"><img
                src="https://amirrorofmind.files.wordpress.com/2017/11/cover.jpg?w=1304" alt=""/>
            <p className="city-name"><Link to="/" className="city-btn">Buzludzha</Link> </p>
        </article>
    </article>
    );
}

export default LocationCityCard;