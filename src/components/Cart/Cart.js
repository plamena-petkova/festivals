import styles from "./Cart.module.css";

const Cart = () => {
    return (
    <section class={styles["cart-wrapper"]}>
        <article className={styles["cart"]}>
            <h4 className={styles["fest-title"]}>Festival:</h4> 
                <div className={styles["ticket-wrapper"]}>
                    <p className={styles["fest-text-ticket"]}>OPEN BUZLUDZHA 2022</p>
                    <p className={styles["price"]}>Price: 25lv</p>
                    <button className={styles["minus"]}>-</button>
                    <p className={styles["ticket-number"]}>1</p>
                    <button className={styles["plus"]}>+</button>
                </div>
                <div className={styles["ticket-wrapper"]}>
                    <p className={styles["fest-text-ticket"]}>OPEN BUZLUDZHA 2022</p>
                    <p className={styles["price"]}>Price: 25lv</p>
                    <button className={styles["minus"]}>-</button>
                    <p className={styles["ticket-number"]}>1</p>
                    <button className={styles["plus"]}>+</button>
                </div>
                <div className={styles["ticket-wrapper"]}>
                    <p className={styles["fest-text-ticket"]}>OPEN BUZLUDZHA 2022</p>
                    <p className={styles["price"]}>Price: 25lv</p>
                    <button className={styles["minus"]}>-</button>
                    <p className={styles["ticket-number"]}>1</p>
                    <button className={styles["plus"]}>+</button>
                </div>
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