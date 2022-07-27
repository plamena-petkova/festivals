import { useEffect } from "react";
import { useState } from "react";
import styles from "./Cart.module.css"

const CartItem = (props) => {

    const [ticketSum, setTicketSum] = useState(0);
    const [ticketQty, setTicketQty] = useState(Number(props.ticket.ticketQuantity));


    // const moveTotalSumHandler = () => {
    //     props.sum(ticketSum);
    // }

    useEffect(() => {
        let totalPrice = ticketQty*props.ticket.ticketPrice;
        setTicketSum(totalPrice);
    }, [props.ticket.ticketPrice, ticketQty]);

    // const decrease = () => {
    //     setTicketQty(ticketQty => ticketQty - 1)
    // }

    // const increase = () => {
    //     setTicketQty(ticketQty => ticketQty + 1);
    // }

   


    return (
        <>
        <td>
            <p className={styles["fest-text-ticket"]}>{props.ticket.festivalName}</p>
        </td>
        <td>
            <p className={styles["price"]}>Price: {props.ticket.ticketPrice}lv</p>
        </td>
        {/* <button className={styles["minus"]} disabled={ticketQty === 1} onChange={moveTotalSumHandler()} onClick={decrease}>-</button> */}
        <td>
            <p className={styles["ticket-number"]}>{ticketQty}</p>
        </td>
        {/* <button className={styles["plus"]} disabled={ticketQty === 5} onChange={moveTotalSumHandler()}  onClick={increase}>+</button> */}
        <td>
            <p className={styles["total"]}>{ticketSum}lv</p> 
        </td>
        </>
    );
}

export default CartItem;