import { Link } from "react-router-dom";



const HomeCard = (festival) => {
    return (
        <article className="popular-fest-item">
        <article className="img-fest"><img
                src={festival.imgUrlName}
                alt=""/></article>

        <p className="popular-fest-text">{festival.name}</p>
        <p className="popular-fest-dates">{festival.date}</p>
        <section className="tickets">
            <Link to="/" className="ticket-btn">Buy Ticket</Link>
        </section>
    </article>
    );
}

export default HomeCard;