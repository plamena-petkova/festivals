

const Cart = () => {
    return (
    
    <article class="cart">
        <p class="fest-text">OPEN BUZLUDZHA 2022</p>
        <div class="ticket-wrapper">
                <p class="price">Price: 25lv</p>
                <button class="minus">-</button>
                <p class="ticket-number">1</p>
                <button class="plus">+</button>
            </div>
            <article class="tickets">
                <button type="submit" class="ticket-btn">Buy Ticket</button>
            </article>
    </article>
       
    );
}

export default Cart;