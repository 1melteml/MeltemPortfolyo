import React from 'react';
import './hero.css';

const Hero = () => {
    const title = "Merhaba, Ben  Meltem"; // Başlık buradan yönetilir

    return (
        <section id="hero" className="hero">
            <h1 className="animated-title">
                {title.split('').map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char}
          </span>
                ))}
            </h1>
            <p className="hero-subtext">doldurulacak 🎨</p>
        </section>
    );
};

export default Hero;
