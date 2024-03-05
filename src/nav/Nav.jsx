import { useState } from 'react';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
import logo from '../images/logo.svg';

export default function Nav(){
    //state to handle mobile flyout menu
    const [open, setOpen] = useState(false);
    const handleMenu = () => setOpen(!open);

    return(
        <nav>
          <section className="links">
            <button className="menu" onClick={handleMenu}><svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/></svg></button>
            <img src={logo} alt="logo" />
          </section>
          <section className="links">
            <img src={cart} alt="cart" />
            <img src={avatar} alt="avatar" />
          </section>
            {open && 
            <menu>
                <ul>
                    <li>Home</li>
                    <li>Shoes</li>
                </ul>
            </menu>
            }
        </nav>
    )
}