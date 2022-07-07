import { useState } from "react";
import styles from "./Cart.module.css"

const CartItem = (props) => {

    const [ticketQty, setTicketQty] = useState(Number(props.ticket.ticketQuantity))

    let totalPrice = ticketQty*props.ticket.ticketPrice


    return (
        <div className={styles["ticket-wrapper"]}>
        <p className={styles["fest-text-ticket"]}>{props.ticket.festivalName}</p>
        <p className={styles["price"]}>Price: {props.ticket.ticketPrice}lv</p>
        <button className={styles["minus"]} disabled={ticketQty === 1} onClick={()=> setTicketQty(ticketQty => ticketQty - 1)}>-</button>
        <p className={styles["ticket-number"]}>{ticketQty}</p>
        <button className={styles["plus"]} disabled={ticketQty === 5} onClick={()=> setTicketQty(ticketQty => ticketQty + 1)}>+</button>
        <p className={styles["total"]}>{totalPrice}lv</p> 
    </div>
    );
}

export default CartItem;