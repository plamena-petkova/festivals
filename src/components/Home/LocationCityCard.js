import styles from "./Home.module.css";


const LocationCityCard = (props) => {
    return (
        <article className={styles["city-item"]}>
    
        <article className={styles["city-item-img"]}><img
                src={props.festival.imgUrlLoc} alt=""/>
            <p className={styles["city-name"]}>{props.festival.location}</p>
           
        </article>
    </article>
    );
}

export default LocationCityCard;