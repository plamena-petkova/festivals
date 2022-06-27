import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as festivalService from "../../services/festivalService"


const FestivalCard = (props) => {

    const navigate = useNavigate();

    let [counter, setCounter] = useState(1);

    if(counter < 1) {
        setCounter(1);
    }

    if(counter > 5) {
        setCounter(5);
    }

    const onDeleteHandler = (e) => {
        e.eventPreventDefault();

        festivalService.remove(props.festival.objectId)
                        .then(() => {
                            navigate('/home')
                        })

    }


    return (
         <article className="fest-item">
    <article className="img-fest"><img
            src={props.festival.imgUrlFest}
            alt=""/></article>
    <p className="fest-text">{props.festival.festivalName}</p>
    <p className="fest-dates">{props.festival.date}</p>
    <p className="catalog-summary">{props.festival.summary}</p>
    <p className="catalog-location">{props.festival.location}</p>

    <div className="ticket-wrapper">
        <p className="price">Price: {props.festival.ticketPrice}lv</p>
        <button onClick={() => setCounter(counter - 1)} className="minus">-</button>
        <p  className="ticket-number">{counter}</p>
        <button onClick={() => setCounter(counter + 1)} className="plus">+</button>
    </div>
    <article className="tickets">
        <button type="submit" className="ticket-btn">Buy</button>
    </article>
    <article className="user-btn">
        <Link to={`/festivals/${props.festival.objectId}`} className="delete" onClick={onDeleteHandler}>Delete</Link>
        <Link to="/edit/:id" className="edit">Edit</Link>
        <Link to="" className="save">Save</Link>
    </article>
</article>
    );
}

export default FestivalCard;