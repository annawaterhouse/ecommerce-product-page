import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Details() {
  const { cart, setCart } = useContext(CartContext);
  //handle product quantity
  const [count, setCount] = useState(1);
  const handleInc = () => setCount(count + 1);
  const handleDec = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  //typically would use either be handled by the client with context, provider and local storage
  //or by the server with useParams() and an API call
  //handle add to cart
  const handleCart = () => {
    setCart(count + cart);
    alert(`${count} item(s) added to cart`);
  };

  return (
    <section className="flow-content">
      <article className="wrapper details">
        <h2>Sneaker Company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <ul className="pricing">
          <li className="h1 flex_pricing">$125.00 <span className="discount">50%</span></li>
          <li className="original">$250.00</li>
        </ul>
        <section className="flex_btns">
          <div className="btns btn_group">
            <button className="btn_dec" onClick={handleDec}>
              -
            </button>
            <p className="btn_counter">{count}</p>
            <button className="btn_inc" onClick={handleInc}>
              +
            </button>
          </div>
          <button className="btns btn_cart" onClick={handleCart}>
            Add to cart
          </button>
        </section>
      </article>
    </section>
  );
}
