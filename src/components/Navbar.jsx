import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/Minimalist.png'
import {FaShoppingCart} from 'react-icons/fa';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
        <nav className="container">
            <div className="logo-img">
                <Link to="/">
                    <img src={LogoImg} alt="logo" />
                </Link>
            </div>
            <div className="cart-icon">
                <Link to="/cartpage">
                    <FaShoppingCart className='icon'></FaShoppingCart>
                </Link>
            </div>
        </nav>
    </nav>
  )
}

export default Navbar;