import { Link } from "react-router-dom";


const Festivals = () => {
    return (
        <section class="catalog">
        <article class="fest-item">
            <article class="img-fest"><img
                    src="https://images.squarespace-cdn.com/content/v1/5736fb5427d4bd28d9838277/1624114204638-K564KSFPZEN9BU1WQKLV/IMG_20210614_175654_088.png?format=2500w"
                    alt=""/></article>
            <p class="fest-text">OPEN BUZLUDZHA 2022</p>
            <p class="fest-dates">10.02.2022-13.02.2022</p>
            <p class="catalog-summary">Bizludzha fest for the monument!</p>
            <p class="catalog-location">Buzludzha</p>

            <div class="ticket-wrapper">
                <p class="price">Price: 25lv</p>
                <button class="minus">-</button>
                <p class="ticket-number">1</p>
                <button class="plus">+</button>
            </div>
            <article class="tickets">
                <button type="submit" class="ticket-btn">Buy Ticket</button>
            </article>
            <article class="user-btn">
                <Link to="/delete/:id" class="delete">Delete</Link>
                <Link to="/edit/:id" class="edit">Edit</Link>
                <Link to="" class="save">Save</Link>
            </article>
        </article>
    </section>
    );
}

export default Festivals;