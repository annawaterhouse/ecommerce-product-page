import { useState } from 'react';
import avatar from '../images/image-avatar.png';
import shop from '../images/icon-cart.svg';
import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';

export default function Nav(){
    //state to handle mobile flyout menu
    const [open, setOpen] = useState(false);
    const handleMenu = () => setOpen(!open);

    return(
        <nav>
          <section className="nav_left">
            <img src={menu} alt="nav_menu" />
            <img src={logo} alt="nav_logo" />
          </section>
          <section className="nav_right">
            <img src={shop} alt="nav_cart" />
            <img src={avatar} alt="nav_avatar" />
          </section>
            {open && 
            <menu className="flyout">
                <ul>
                    <li onClick={handleMenu}>x</li>
                    <li>Home</li>
                    <li>Shoes</li>
                </ul>
            </menu>
            }
        </nav>
    )
}