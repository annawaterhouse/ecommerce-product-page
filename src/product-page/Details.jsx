import { useState } from "react";

export default function Details() {
  //handle product quantity
  const [count, setCount] = useState(1);
  const handleInc = () => setCount(count + 1);
  const handleDec = () => setCount(count - 1);
  
  //typically would use either be handled by the client with context, provider and local storage
  //or by the server with useParams() and an API call
  
  //handle add to cart
    const handleCart = () => {
        if (count === 0) {
        alert("Please select a quantity");
        } else {
        alert(`Added ${count} to cart`);
        }
    };

  return (
    <article className="block details">
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <ul className="pricing">
        <li className="price">$125.00</li>
        <li className="discount">50%</li>
        <li className="original">$250.00</li>
      </ul>
      <section className="btns btn_group">
        <button className="btn_dec" onClick={handleDec}>
          -
        </button>
        <p className="btn_counter">{count}</p>
        <button className="btn_inc" onClick={handleInc}>
          +
        </button>
      </section>
      <button className="btns btn_cart" onClick={handleCart}>Add to cart</button>
    </article>
  );
}
