import { useEffect } from "react";
import { useState } from "react";
import styles from "./Cart.module.css"

const CartItem = (props) => {

    const [ticketSum, setTicketSum] = useState(0);

    const [ticketQty, setTicketQty] = useState(Number(props.ticket.ticketQuantity))

    

    const moveTotalSumHandler = () => {
        props.moveTotalSum(ticketSum);
    }

    useEffect(() => {
        let totalPrice = ticketQty*props.ticket.ticketPrice;
        setTicketSum(totalPrice);
    }, [props.ticket.ticketPrice, ticketQty])


    return (
        <div className={styles["ticket-wrapper"]}>
        <p className={styles["fest-text-ticket"]}>{props.ticket.festivalName}</p>
        <p className={styles["price"]}>Price: {props.ticket.ticketPrice}lv</p>
        <button className={styles["minus"]} disabled={ticketQty === 1}  onChange={moveTotalSumHandler()} onClick={(e)=> {(setTicketQty(ticketQty => ticketQty - 1))} }>-</button>
        <p className={styles["ticket-number"]}>{ticketQty}</p>
        <button className={styles["plus"]} disabled={ticketQty === 5} onChange={moveTotalSumHandler()} onClick={(e)=> {(setTicketQty(ticketQty => ticketQty + 1))}}>+</button>
        <p className={styles["total"]}>{ticketSum}lv</p> 
    </div>
    );
}

export default CartItem;