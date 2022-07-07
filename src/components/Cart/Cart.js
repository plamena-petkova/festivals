import { useEffect } from "react";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import * as ticketService from "../../services/ticketService"
// import * as festivalService from "../../services/festivalService"
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {

    const {user} = useAuthContext();

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        ticketService.getAllTickets(user.id)
                     .then(data => {
                        setTickets(data);
                        console.log(data);

                     })
    }, [user.id])



    return (
    <section className={styles["cart-wrapper"]}>
        <article className={styles["cart"]}>
            <h4 className={styles["fest-title"]}>Festival:</h4> 
             
            {tickets.length > 0
            ? tickets.map(x => <CartItem key={x.id} ticket={x}/>)
            : <h3>No tickets in the cart</h3>}
                <article className={styles["total-cart-wrapper"]}>
                    <p className={styles["total-cart"]}>Total: 75lv</p>
                </article>
            
                <article className={styles["tickets-cart"]}>
                    <button type="submit" className={styles["cart-ticket-btn"]}>Check Out</button>
                </article>
        
        </article>
    </section>
    );
}

export default Cart;