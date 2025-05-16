import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">🌸 Portfolyo</div>

            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#hero" onClick={toggleMenu}>Ana Sayfa</a></li>
                <li><a href="#about" onClick={toggleMenu}>Ben Kimim?</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Yeteneklerim</a></li>
                <li><a href="#portfolio" onClick={toggleMenu}>Portfolyo</a></li>
                <li><a href="#contact" onClick={toggleMenu}>İletişim</a></li>
                <li><a href="#sociallinks" onClick={toggleMenu}>Sosyal Medya</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
