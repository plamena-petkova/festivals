
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
// import { useAuthContext } from "../../context/AuthContext";
import * as festivalService from '../../services/festivalService'
import styles from "./MyTickets.module.css";


const MyTickets = () => {

    const params = useParams();
    
    const [festival, setFestival] = useState();

    const ownerId = params.userId;

    useEffect(() => {
        festivalService.getByOwner(ownerId)
                       .then(festivalData => {
                        setFestival(festivalData);
                        console.log(festivalData)
                       })
    }, [ownerId])


    return (
        <section className={styles["my-tickets"]}>
        <article className={styles["table-my-tickets"]}>
        <h1 className={styles["cart-title"]}>My Tickets</h1>
        <ul className={styles["cart-content"]}>
            <li className={styles["cart-item"]}>Buzludzha Fest Peak Buzludhza qty:3 25lv Total:75lv</li>
        </ul>
    </article>
    </section>
    );
}

export default MyTickets;