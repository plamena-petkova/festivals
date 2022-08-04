import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print"
import  QRCode  from "qrcode";
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
    const [infoCode, setInfoCode] = useState('tickets');
    const [src, setSrc] = useState('');


    useEffect(() => {
        ticketService.getAllTicketsByUserId(user.id)
            .then(data => {
                setTickets(data);
                const infoQr = data.map(x => [x.ticketQuantity, x.festivalName]);
                let arr = Array.prototype.concat.apply([], infoQr);
                setInfoCode(arr.join(' '));
                QRCode.toDataURL(infoCode).then(data => setSrc(data))
            })
    }, [user.id, infoCode]);



    useEffect(() => {
        let total = tickets.map(x => x.ticketPrice * x.ticketQuantity);
        let totalPricePerTickets = total.reduce((a, v) => a + v, 0);
        setTotalPrice(totalPricePerTickets);

    }, [tickets]);


    const onDelete = (ticketId) => {

            ticketService.deleteTicketsById(ticketId)
                .then(navigate('/home'))
        }


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    const onCheckOut = (e) => {
        e.preventDefault();

        const ticketId = tickets.map(ticket => ticket.id)

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
                    ? (
                    <thead>
                    <tr>
                        <th>Festival Name</th>
                        <th>Festival Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    )
                    : null}
                <tbody>
                    {tickets.length > 0
                        ? tickets.map(ticket =><tr key={ticket.id}><CartItem ticket={ticket} onDelete={onDelete} /></tr>)
                        : <tr><td className={styles["no-tickets"]}>No tickets in the cart</td></tr>}
                </tbody>
                </table>
                {totalPrice < 1
                    ? null
                    : <>
                        <article className={styles["total-cart-wrapper"]}>
                            <p className={styles["total-cart"]}>Total:{totalPrice}lv</p>
                        </article>
                        <article className={styles["tickets-cart"]}>
                            <button onClick={(event) => { onCheckOut(event); handlePrint();  }} className={styles["cart-ticket-btn"]}>Check Out</button>
                        </article>
                    </>
                }

                {src 
                    ? 
                    (<div>
                    <img className={styles['qrcode']} src={src} alt="qrcode" />
                    </div>) 
                    : null}
                    
            </article>
        </section>
    );
}

export default Cart;



