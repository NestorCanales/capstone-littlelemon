import React from 'react';
import banner from '../images/banner.jpeg';
import './Header.css';

const Header=()=>{
    return(
        <header>
            <section className="left-content">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="button-reserve">Reserve Table</button>
            </section>
            <section className="right-content">
                <img src={banner} alt="Delicious Food" />
            </section>
        </header>
    );
}

export default Header;