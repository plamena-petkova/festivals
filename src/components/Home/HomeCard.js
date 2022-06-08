import { NavLink } from "react-router-dom";



const HomeCard = () => {
    return (
        <article className="popular-fest-item">
        <article className="img-fest"><img
                src="https://images.squarespace-cdn.com/content/v1/5736fb5427d4bd28d9838277/1624114204638-K564KSFPZEN9BU1WQKLV/IMG_20210614_175654_088.png?format=2500w"
                alt=""/></article>

        <p className="popular-fest-text">OPEN BUZLUDZHNavLink 2022</p>
        <p className="popular-fest-dates">10.02.2022-13.02.2022</p>
        <section className="tickets">
            <NavLink to="#" className="ticket-btn">Buy Ticket</NavLink>
        </section>
    </article>
    );
}

export default HomeCard;