
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import * as festivalService from '../../services/festivalService'
import styles from "./MyTickets.module.css";
import MyTicketsCard from "./MyTicketsCard";


const MyTickets = () => {

    const {user} = useAuthContext()
    
    const [festivals, setFestivals] = useState([]);



    useEffect(() => {
        festivalService.getByOwner(user.id)
                       .then(festivalData => {
                        console.log(festivalData);
                        setFestivals(festivalData);
                        
                       })
    }, [user.id])


    return (
        <section className={styles["my-tickets"]}>
        <article className={styles["table-my-tickets"]}>
        <h1 className={styles["cart-title"]}>My Tickets</h1>
        <ul className={styles["cart-content"]}>
           {festivals.length > 0
           ? festivals.map(x => <MyTicketsCard key={x.id} festival={x} />)
           : <h1>No Music Festivals which you had created!</h1>
           }

   
      
     
        </ul>
    </article>
    </section>
    );
}

export default MyTickets;