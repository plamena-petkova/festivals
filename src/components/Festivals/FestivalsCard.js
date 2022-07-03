
import { Link } from "react-router-dom";
// import * as festivalService from "../../services/festivalService"


const FestivalCard = (props) => {

    return (
         <article className="fest-item">
                <article className="img-fest">
                    <img src={props.festival.imgUrlFest} alt=""/>
                </article>
                    <p className="fest-text">{props.festival.festivalName}</p>
                    <p className="fest-dates">{props.festival.date}</p>
                    <p className="catalog-summary">{props.festival.summary}</p>
                    <p className="catalog-location">{props.festival.location}</p>
                <article className="tickets">
                    <Link to={`/festivals/${props.festival.id}`} className="ticket-btn">Details</Link>
                </article>
        </article>
    );
}

export default FestivalCard;