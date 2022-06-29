import "./cart.css"

const Cart = () => {
    return (
    <section class="cart-wrapper">
        <article class="cart">
            <h4 class="fest-title">Festival:</h4> 
                <div class="ticket-wrapper">
                    <p class="fest-text-ticket">OPEN BUZLUDZHA 2022</p>
                    <p class="price">Price: 25lv</p>
                    <button class="minus">-</button>
                    <p class="ticket-number">1</p>
                    <button class="plus">+</button>
                </div>
                <div class="ticket-wrapper">
                    <p class="fest-text-ticket">OPEN BUZLUDZHA 2022</p>
                    <p class="price">Price: 25lv</p>
                    <button class="minus">-</button>
                    <p class="ticket-number">1</p>
                    <button class="plus">+</button>
                </div>
                <div class="ticket-wrapper">
                    <p class="fest-text-ticket">OPEN BUZLUDZHA 2022</p>
                    <p class="price">Price: 25lv</p>
                    <button class="minus">-</button>
                    <p class="ticket-number">1</p>
                    <button class="plus">+</button>
                </div>
                <article class="total-cart-wrapper">
                    <p class="total-cart">Total: 75lv</p>
                </article>
            
                <article class="tickets-cart">
                    
                    <button type="submit" class="cart-ticket-btn">Check Out</button>
                </article>
        
        </article>
    </section>
    );
}

export default Cart;