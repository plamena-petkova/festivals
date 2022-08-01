import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import * as ticketService from "../../services/ticketService"
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {

    const { user } = useAuthContext();
    const navigate = useNavigate()

    const [tickets, setTickets] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);


    useEffect(() => {
        ticketService.getAllTicketsByUserId(user.id)
            .then(data => {
                setTickets(data);
            })
    }, [user.id]);


    useEffect(() => {
        let total = tickets.map(x => x.ticketPrice * x.ticketQuantity);
        let totalPricePerTickets = total.reduce((a, v) => a + v, 0);
        setTotalPrice(totalPricePerTickets)
    }, [tickets])



    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    const onCheckOut = (e) => {
        e.preventDefault();




        const ticketId = tickets.map(ticket => ticket.id)
        console.log(ticketId);

        for (let id of ticketId) {
            ticketService.deleteTicketsById(id)
                .then(navigate('/home'))
        }
    }



    return (
        <section className={styles["cart-wrapper"]}>
            <article ref={componentRef} className={styles["cart"]}>
                <h4 className={styles["fest-title"]}>Tickets:</h4>
                <table>
                    {tickets.length > 0 
                    ? <tr>
                        <th>Festival Name</th>
                        <th>Festival Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    : null}
                
                    {tickets.length > 0
                        ? tickets.map(ticket => <tr key={ticket.id}> <CartItem ticket={ticket} /></tr>)
                        : <tr className={styles["no-tickets"]}>No tickets in the cart</tr>}
                </table>
                {totalPrice < 1
                    ? null
                    : <>
                        <article className={styles["total-cart-wrapper"]}>
                            <p className={styles["total-cart"]}>Total:{totalPrice}lv</p>
                        </article>
                        <article className={styles["tickets-cart"]}>
                            <button onClick={(event) => { onCheckOut(event); handlePrint(); }} className={styles["cart-ticket-btn"]}>Check Out</button>
                        </article>
                    </>
                }



            </article>
        </section>
    );
}

export default Cart;



