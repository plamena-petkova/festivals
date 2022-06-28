import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import * as festivalService from "../../services/festivalService"

const Details = () => {

    const params = useParams();

       const [festival, setFestival] = useState([]);


    useEffect(()=> {

        festivalService.getById(params.id)
        .then(result => setFestival(result))

    }, [params.id]);
    
    const navigate = useNavigate();

    let [counter, setCounter] = useState(1);

    if(counter < 1) {
        setCounter(1);
    }

    if(counter > 5) {
        setCounter(5);
    }

    const onDeleteHandler = (e) => {
        e.preventDefault();

        console.log('clicked');
        console.log(festival.objectId)

        festivalService.remove(festival.id)
                        .then(() => {
                            navigate('/home')
                        })

    }



    return (
    <article className="fest-item details">
                <article className="img-fest">
                    <img src={festival.imgUrlFest} alt="fest"/>
                </article>
    <p className="fest-text">{festival.festivalName}</p>
    <p className="fest-dates">{festival.date}</p>
    <p className="catalog-summary">{festival.summary}</p>
    <p className="catalog-location">{festival.location}</p>
    <article className="tickets">
    </article>

    <div className="ticket-wrapper">
        <p className="price">Price: {festival.ticketPrice}lv</p>
        <button onClick={() => setCounter(counter - 1)} className="minus">-</button>
        <p  className="ticket-number">{counter}</p>
        <button onClick={() => setCounter(counter + 1)} className="plus">+</button>
    </div>
    <article className="tickets">
        <button type="submit" className="ticket-btn">Buy</button>
    </article>
    <article className="user-btn">
        <button className="delete" onClick={onDeleteHandler}>Delete</button>
        <Link to={`/edit/${festival.id}`} className="edit">Edit</Link>
        <button to="" className="save" type="submit">Save</button>
    </article>
        </article>
    );
}

export default Details;