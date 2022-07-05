
import { Link } from "react-router-dom";
import styles from "./Festival.module.css";
// import * as festivalService from "../../services/festivalService"


const FestivalCard = (props) => {

    return (
         <article className={styles["fest-item"]}>
                <article className={styles["img-fest"]}>
                    <img src={props.festival.imgUrlFest} alt=""/>
                </article>
                    <p className={styles["fest-text"]}>{props.festival.festivalName}</p>
                    <p className={styles["fest-dates"]}>{props.festival.date}</p>
                    <p className={styles["catalog-summary"]}>{props.festival.summary}</p>
                    <p className={styles["catalog-location"]}>{props.festival.location}</p>
                <article className={styles["tickets"]}>
                    <Link to={`/festivals/${props.festival.id}`} className={styles["ticket-btn"]}>Details</Link>
                </article>
        </article>
    );
}

export default FestivalCard;