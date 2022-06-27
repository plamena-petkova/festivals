import { Link } from "react-router-dom";



const HomeCard = (props) => {

    
    return (
        <article className="popular-fest-item">
        <article className="img-fest"><img
                src={props.festival.imgUrlFest}
                alt=""/></article>

        <p className="popular-fest-text">{props.festival.festivalName}</p>
        <p className="popular-fest-dates">{props.festival.date}</p>
        <section className="tickets">
            <Link to="/" className="ticket-btn">Details</Link>
        </section>
    </article>
    );
}

export default HomeCard;