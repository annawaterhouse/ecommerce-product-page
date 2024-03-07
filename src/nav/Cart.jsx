import trash from "../images/icon-delete.svg";
import product from "../images/image-product-1-thumbnail.jpg";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";

Cart.propTypes = {
  cart: PropTypes.number.isRequired,
    setCart: PropTypes.func.isRequired,
  openCart: PropTypes.bool.isRequired,
  setOpenCart: PropTypes.func.isRequired,
};

export default function Cart({ cart, setCart, openCart, setOpenCart }) {
  const ref = useRef(null);
  //handle delete item from cart and close the preview
  const handleDelete = () => {
    setCart(0);
  };
  //close cart preview when clicked outside the flyout menu
  useEffect(() => {
    const checkClickAway = (e) => {
      if (openCart && ref.current && !ref.current.contains(e.target)) {
        setOpenCart(false);
      }
    };
    document.addEventListener("mousedown", checkClickAway);
    document.addEventListener("touchstart", checkClickAway);
    return () => {
      document.removeEventListener("mousedown", checkClickAway);
      document.removeEventListener("touchstart", checkClickAway);
    };
  }, [openCart, setOpenCart]);

  return (
    <section className="cart_preview" ref={ref}>
      <h3>Cart</h3>
      {cart ? (
        <>
          <article className="item">
            <img src={product} alt="product_thumbnail" />
            <div>
              <h4 className="item_title">Fall Limited Edition Sneakers</h4>
              <p className="item_price">
                $125.00 x {cart}<span className="item_total">${125*cart}</span>
              </p>
            </div>
            <img src={trash} alt="delete_item" onClick={handleDelete} />
          </article>
          <div>
            <button className="btns btn_checkout">Checkout</button>
          </div>
        </>
      ) : (
        <p className="item">Your cart is empty</p>
      )}
    </section>
  );
}
