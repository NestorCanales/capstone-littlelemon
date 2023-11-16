import React, {useState} from 'react';
import logo from '../images/Logo.svg';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='navbar'>
            {/* Content for Nav */}
            <Link to={'/'}>
                <img src={logo} alt="Logo" />
            </Link>
            <button className="hamburger" onClick={toggleMobileMenu}>
                {/* Icon for hamburger menu (you can replace this with an actual icon) */}
                ☰
            </button>
            <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;