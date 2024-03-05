export default function Details() {
    return (
        <article className="block details">
            <h2>Sneaker Company</h2>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <ul className="pricing">
                <li>$125.00</li>
                <li>50%</li>
                <li className="self-align">$250.00</li>
            </ul>
            <section className="button">
                <button className="dec">-</button>
                <p>0</p>
                <button className="inc">+</button>
            </section>
            <button className="cart">add to cart</button>
        </article>
    )
}