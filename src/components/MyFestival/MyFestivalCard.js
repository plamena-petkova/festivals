import { Link } from "react-router-dom";
import styles from "./MyFestival.module.css"

const MyFestivalCard = (props) => {


    return(
        <div className={styles["list-wrapper"]}>
        <li className={styles["cart-item"]}>{props.festival.festivalName} {props.festival.location} <Link to={`/festivals/${props.festival.id}`} className={styles['ticket']}>Details</Link></li> 
        </div>
    )

}

export default MyFestivalCard;