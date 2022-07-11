import { useEffect } from "react";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import * as ticketService from "../../services/ticketService"
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {

    const {user} = useAuthContext();

    const [tickets, setTickets] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);

//    let total = tickets.map(x => x.ticketPrice*x.ticketQuantity);
//    let totalPricePerTickets = total.reduce((a,v) => a + v ,0);

   const moveTotalSum = (ticketSum) => {
        setTotalPrice(ticketSum)
    return ticketSum;
    }

    useEffect(() => {
        ticketService.getAllTickets(user.id)
                     .then(data => {
                        setTickets(data);
                        console.log(data)

                     })
    }, [user.id]);

    // useEffect(() => {
    //     setTotalPrice(totalPricePerTickets)

    // }, [totalPricePerTickets])



    return (
    <section className={styles["cart-wrapper"]}>
        <article className={styles["cart"]}>
            <h4 className={styles["fest-title"]}>Tickets:</h4> 
             
            {tickets.length > 0
            ? tickets.map(ticket => <CartItem key={ticket.id} ticket={ticket} moveTotalSum={moveTotalSum}/>)
            : <h3>No tickets in the cart</h3>}
                <article className={styles["total-cart-wrapper"]}>
                    <p className={styles["total-cart"]}>Total:{totalPrice}lv</p>
                </article>
                {/* <p className={styles["total"]}>{ticketSum}lv</p>  */}
                <article className={styles["tickets-cart"]}>
                    <button type="submit" className={styles["cart-ticket-btn"]}>Check Out</button>
                </article>
        
        </article>
    </section>
    );
}

export default Cart;