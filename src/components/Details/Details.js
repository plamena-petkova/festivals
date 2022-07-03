import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import "./details.css"
import * as festivalService from "../../services/festivalService"
import ConfirmDialog from "../common/modal/ConfirmDialog";
import { useAuthContext } from "../../context/AuthContext";

const Details = () => {

    const {user} = useAuthContext();

    const params = useParams();

    const [festival, setFestival] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(()=> {
        festivalService.getById(params.festivalId)
        .then(result => setFestival(result))

    }, [params.festivalId]);

    
    const navigate = useNavigate();

    let [counter, setCounter] = useState(1);

    if(counter > 5) {
        setCounter(5);
    }
    if(counter < 1) {
        setCounter(1);
    }

    const author = Boolean(festival.ownerId === user.id);

    
    const deleteHandler = (e) => {
        e.preventDefault();

        if(user.id === festival.ownerId) {
            festivalService.remove(festival.id)
            .then(() => {
                navigate('/home')
            })
            .finally(() => {
                showDeleteDialog(false);
        });
        }
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);


    }

    const ownerBtn = 
        (
        <>
         <article className="tickets">
            <button type="submit" className="ticket-btn">Buy</button>
         </article>
        <article className="user-btn">
        <button className="delete" onClick={deleteClickHandler}>Delete</button>
        <Link to={`/edit/${festival.id}`} className="edit">Edit</Link>
        </article>
        </>
        )

    const btn = (    
                <article className="tickets">
                    <button type="submit" className="ticket-btn">Buy</button>
                </article>
                )   

    return (
        <>
    <ConfirmDialog show={showDeleteDialog} onClose={()=> setShowDeleteDialog(false)} onSave={deleteHandler} />
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
        <button onClick={()=> setCounter(counter => counter - 1)} className="minus">-</button>
        <p  className="ticket-number">{counter}</p>
        <button onClick={()=> setCounter(counter => counter + 1)} className="plus">+</button>
    </div>

        { author
        ? ownerBtn
        : btn }
        </article>
        </>
    );
    
}
    

export default Details;