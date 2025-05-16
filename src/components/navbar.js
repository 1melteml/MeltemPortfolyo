import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">🌸 Portfolyo</div>
            <ul className="nav-links">
                <li><a href="#hero">Ana Sayfa</a></li>
                <li><a href="#about">Ben Kimim?</a></li>
                <li><a href="#skills">Yeteneklerim</a></li>
                <li><a href="#portfolio">Portfolyo</a></li>
                <li><a href="#contact">İletişim</a></li>
                <li><a href="#sociallinks">Sosyal Medya</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
