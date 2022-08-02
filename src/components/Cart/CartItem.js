import { useCallback, useEffect } from "react";
import { useState } from "react";
import ConfirmDialog from "../common/modal/ConfirmDialog";
import styles from "./Cart.module.css"


const CartItem = (props) => {

    console.log(props)
 
    const [ticketSum, setTicketSum] = useState(0);
    const [ticketQty, setTicketQty] = useState(Number(props.ticket.ticketQuantity));
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);



    useEffect(() => {
        let totalPrice = ticketQty*props.ticket.ticketPrice;
        setTicketSum(totalPrice);
    }, [props.ticket.ticketPrice, ticketQty]);

 

   const deleteClickHandler = useCallback((e) => {
    e.preventDefault();
    setShowDeleteDialog(true);
}, []);

   


    return (
        <>
        <ConfirmDialog show={showDeleteDialog} onClose={()=> setShowDeleteDialog(false)} onSave={() => props.onDelete(props.ticket.id)}  />
        <td>
            <p className={styles["fest-text-ticket"]}>{props.ticket.festivalName}</p>
        </td>
        <td>
            <p className={styles["price"]}>Price: {props.ticket.ticketPrice}lv</p>
        </td>
        <td>
            <p className={styles["ticket-number"]}>{ticketQty}</p>
        </td>
        <td>
            <p className={styles["total"]}>{ticketSum}lv</p> 
        </td>
        <td className={styles['btns-cart']}>
            <button onClick={deleteClickHandler} className={styles['btn-del']}><i className="fa-solid fa-trash-can"></i></button>
        </td>
        </>
    );
}

export default CartItem; 