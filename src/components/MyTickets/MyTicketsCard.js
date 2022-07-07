import styles from "./MyTickets.module.css"

const MyTicketsCard = (props) => {

    console.log(props)

    return(
        <li className={styles["cart-item"]}>{props.festival.festivalName} {props.festival.location} qty:3 25lv Total:75lv</li>
    )

}

export default MyTicketsCard;