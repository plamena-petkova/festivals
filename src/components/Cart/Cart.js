import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import * as ticketService from "../../services/ticketService"
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {

    const {user} = useAuthContext();
    const navigate = useNavigate()

    const [tickets, setTickets] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);


    useEffect(() => {
        ticketService.getAllTicketsByUserId(user.id)
                     .then(data => {
                        setTickets(data);
                     })
    }, [user.id]);
    
    // let sum = (ticketSum) => {
    //     setTotalPrice(ticketSum);     
    // }

    useEffect(() => {
        let total = tickets.map(x => x.ticketPrice*x.ticketQuantity);
        let totalPricePerTickets = total.reduce((a,v) => a + v ,0);
        setTotalPrice(totalPricePerTickets)
    }, [tickets])

   const onCheckOut = (e) => {

    e.preventDefault();

        const ticketId = tickets.map(ticket => ticket.id)
        console.log(ticketId);

        for(let id of ticketId) {
            ticketService.deleteTicketsById(id)
                         .then(navigate('/home'))
        }

                    
    }

    

    return (
    <section className={styles["cart-wrapper"]}>
        <article className={styles["cart"]}>
            <h4 className={styles["fest-title"]}>Tickets:</h4> 
             
            {tickets.length > 0
            ? tickets.map(ticket => <CartItem key={ticket.id} ticket={ticket}  />)
            : <h3>No tickets in the cart</h3>}
                <article className={styles["total-cart-wrapper"]}>
                    <p className={styles["total-cart"]}>Total:{totalPrice}lv</p>
                </article>
                <article className={styles["tickets-cart"]}>
                    <button onClick={onCheckOut} className={styles["cart-ticket-btn"]}>Check Out</button>
                </article>
        
        </article>
    </section>
    );
}

export default Cart;



