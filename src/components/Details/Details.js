import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import ConfirmDialog from "../common/modal/ConfirmDialog";
import styles from "./Details.module.css";
import * as festivalService from "../../services/festivalService";
import * as ticketService from "../../services/ticketService"
import { useAuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../common/spinner/LoadingSpinner";

const Details = () => {

    const {user} = useAuthContext();
    
    const navigate = useNavigate();
    const params = useParams();

    const [festival, setFestival] = useState([]);
    const [tickets, setTickets] = useState([])
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    let [counter, setCounter] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        // setLoading(true);
        festivalService.getById(params.festivalId)
        .then(result => setFestival(result))
        setLoading(false);

    }, [params.festivalId]);

    useEffect(() => {
        setLoading(true);
        ticketService.getAllTickets(festival.id)
                     .then(data => {
                        setTickets(data);
                        setLoading(false);
                     })
    }, [festival.id])


    const ticketOwner = Boolean(festival.ownerId === user.id);
    let isBought = false;

    const userId = tickets.map(ticket => ticket.userId);
    
    if(userId.includes(user.id)) {
        isBought = true;
    }


    const deleteHandler = (e) => {
        e.preventDefault();

        if(user.id === festival.ownerId) {
            festivalService.remove(festival.id)
            .then(() => {
                navigate('/home')
            })
            // .finally(() => {
            //     showDeleteDialog(false);
        // });
        }
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }

    const addTicket = (e) => {
        e.preventDefault();

        try {
            ticketService.addTickets({festival}, counter, user.id)
            .then((ticket) => {
                navigate(`/cart`)});
        } catch(err) {
            console.log(err);
        }
    }


    const ownerBtn = 
        (
        <article className={styles["user-btn"]}>
        <button className={styles["delete"]} onClick={deleteClickHandler}>Delete</button>
        <Link to={`/edit/${festival.id}`} className={styles["edit"]}>Edit</Link>
        </article>
        )

    const btn = (    
                <article className={styles["tickets"]}>
                   {!user.id  || isBought === true
                    ? null
                    : <button className={styles["ticket-btn"]} onClick={addTicket}>Buy</button>
                   }   
                </article>
                )   

    return (
        <>
    { loading ? <LoadingSpinner /> : 
    (<>
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
        
            <button 
                disabled={counter === 1} 
                onClick={()=> setCounter(counter => counter - 1)} 
                className={styles["minus"]}
            >
            -
            </button>
            <p  className={styles["ticket-number"]}>{counter}</p>
            <button 
                disabled={counter === 5} 
                onClick={()=> setCounter(counter => counter + 1)} 
                className={styles["plus"]}
            >
            +
            </button>
    </div>
        
        { ticketOwner ? ownerBtn : btn}

    </article>
    </>)}
    </>
    );
    
}
    

export default Details;