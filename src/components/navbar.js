import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <div className="logo">🌸 Portfolyo</div>

            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>

            <ul className="nav-links">
                <li><a href="#hero" onClick={() => setIsActive(false)}>Ana Sayfa</a></li>
                <li><a href="#about" onClick={() => setIsActive(false)}>Ben Kimim?</a></li>
                <li><a href="#skills" onClick={() => setIsActive(false)}>Yeteneklerim</a></li>
                <li><a href="#portfolio" onClick={() => setIsActive(false)}>Portfolyo</a></li>
                <li><a href="#contact" onClick={() => setIsActive(false)}>İletişim</a></li>
                <li><a href="#sociallinks" onClick={() => setIsActive(false)}>Sosyal Medya</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
