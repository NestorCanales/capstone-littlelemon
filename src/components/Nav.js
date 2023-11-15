import React, {useState} from 'react';
import logo from '../images/Logo.svg';
import './Nav.css';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='navbar'>
            {/* Content for Nav */}
            <a href='/'>
                <img src={logo} alt="Logo" />
            </a>
            <button className="hamburger" onClick={toggleMobileMenu}>
                {/* Icon for hamburger menu (you can replace this with an actual icon) */}
                ☰
            </button>
            <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;