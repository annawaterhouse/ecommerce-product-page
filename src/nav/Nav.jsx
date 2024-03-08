import { useState } from "react";
import avatar from "../images/image-avatar.png";
import shop from "../images/icon-cart.svg";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import Cart from "./Cart";
import x from "../images/icon-close.svg";
import { useContext } from 'react';
import { CartContext } from '../CartContext'

export default function Nav() {
  //get cart state
  const { cart, setCart } = useContext(CartContext);
  //state to handle mobile flyout menu
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => setOpenMenu(!openMenu);
  //handle cart preview
  const [openCart, setOpenCart] = useState(false);
  const handleCart = () => {
    setOpenCart(true);
  }

  return (
    <section className="wrapper">
      <nav>
        <section className="nav_left">
          <img src={menu} alt="nav_menu" onClick={handleMenu} />
          <img src={logo} alt="nav_logo" />
          <ul className="desktop_nav">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </section>
        <section className="nav_right">
          <div className="nav_cart_container">
            <img src={shop} alt="nav_cart" onClick={handleCart} />
            {cart > 0 && <div className="nav_cart_icon">{cart}</div>}
          </div>
          { openCart && <Cart cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} />}
          <img src={avatar} alt="nav_avatar" />
        </section>
        {openMenu && (
          <menu className="flyout">
            <ul className="flyout_links flow-content">
              <li onClick={handleMenu}>
                <img src={x} alt="nav_menu" />
              </li>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </menu>
        )}
      </nav>
    </section>
  );
}
