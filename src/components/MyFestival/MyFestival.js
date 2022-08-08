
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import * as festivalService from '../../services/festivalService'
import styles from "./MyFestival.module.css";
import MyFestivalCard from "./MyFestivalCard";


const MyFestivals = () => {

    const {user} = useAuthContext()
    
    const [festivals, setFestivals] = useState([]);



    useEffect(() => {
        festivalService.getByOwner(user.id)
                       .then(festivalData => {
                        setFestivals(festivalData);
                        
                       })
    }, [user.id])


    return (
        <section className={styles["my-fest"]}>
        <article className={styles["table-my-fest"]}>
        <h1 className={styles["cart-title"]}>My Festivals</h1>
        <h5 className={styles["user-info"]}>  {user.username}  </h5>
        <h6 className={styles["user-info"]}>{user.firstName}  {user.lastName} {user.email}</h6>
        <ul className={styles["cart-content"]}>
           {festivals.length > 0
           ? festivals.map(x => <MyFestivalCard key={x.id} festival={x} />)
           : <li>No Music Festivals which you had created!</li>
           }
     
        </ul>
    </article>
    </section>
    );
}

export default MyFestivals;