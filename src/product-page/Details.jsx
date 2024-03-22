import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Details() {
  const { cart, setCart } = useContext(CartContext);
  //handle add to cart button copy
  const [isAdded, setIsAdded] = useState(false);
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
    setIsAdded(true);
    setCart(count + cart);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <section className="flow-content">
      <article className="wrapper details">
        <h2>Sneaker Company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <ul className="pricing">
          <li className="h1 flex_pricing">$125.00 <span className="discount">50%</span></li>
          <li className="original">$250.00</li>
        </ul>
        <section className="buttons">
          <div className="button btn_group">
            <button className="btn_dec" onClick={handleDec}>
              -
            </button>
            <p className="btn_counter">{count}</p>
            <button className="btn_inc" onClick={handleInc}>
              +
            </button>
          </div>
          <button className="button btn_cart" onClick={handleCart}>
            {isAdded ? "Added to cart" : "Add to cart"}
          </button>
        </section>
      </article>
    </section>
  );
}
