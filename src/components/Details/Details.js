import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import styles from "./Details.module.css";
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
         <article className={styles["tickets"]}>
            <button type="submit" className={styles["ticket-btn"]}>Buy</button>
         </article>
        <article className={styles["user-btn"]}>
        <button className={styles["delete"]} onClick={deleteClickHandler}>Delete</button>
        <Link to={`/edit/${festival.id}`} className={styles["edit"]}>Edit</Link>
        </article>
        </>
        )

    const btn = (    
                <article className={styles["tickets"]}>
                    <button type="submit" className={styles["ticket-btn"]}>Buy</button>
                </article>
                )   

    return (
        <>
    <ConfirmDialog show={showDeleteDialog} onClose={()=> setShowDeleteDialog(false)} onSave={deleteHandler} />
    <article className={styles["fest-item"]}>
                <article className={styles["img-fest"]}>
                    <img src={festival.imgUrlFest} alt="fest"/>
                </article>
    <p className={styles["fest-text"]}>{festival.festivalName}</p>
    <p className={styles["fest-dates"]}>{festival.date}</p>
    <p className={styles["catalog-summary"]}>{festival.summary}</p>
    <p className={styles["catalog-location"]}>{festival.location}</p>
 

    <div className={styles["ticket-wrapper"]}>
        <p className={styles["price"]}>Price: {festival.ticketPrice}lv</p>
        <button onClick={()=> setCounter(counter => counter - 1)} className={styles["minus"]}>-</button>
        <p  className={styles["ticket-number"]}>{counter}</p>
        <button onClick={()=> setCounter(counter => counter + 1)} className={styles["plus"]}>+</button>
    </div>

        { author
        ? ownerBtn
        : btn }
        </article>
        </>
    );
    
}
    

export default Details;