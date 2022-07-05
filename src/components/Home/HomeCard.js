import { Link } from "react-router-dom";
import styles from "./Home.module.css"



const HomeCard = (props) => {

    
    return (
        <article className={styles["popular-fest-item"]}>
        <article className={styles["img-fest"]}>
            <img src={props.festival.imgUrlFest} alt=""/>
        </article>

        <p className={styles["popular-fest-text"]}>{props.festival.festivalName}</p>
        <p className={styles["popular-fest-dates"]}>{props.festival.date}</p>
        <section className={styles["tickets"]}>
            <Link to={`/festivals/${props.festival.id}`} className={styles["ticket-btn"]}>Details</Link>
        </section>
    </article>
    );
}

export default HomeCard;