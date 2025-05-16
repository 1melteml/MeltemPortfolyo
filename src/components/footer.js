import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Tüm hakları saklıdır. | Tasarım 💖 ile yapıldı</p>
        </footer>
    );
};

export default Footer;
