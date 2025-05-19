import React, { useEffect, useState, useRef } from 'react';
import './hero.css';

const Hero = () => {
    const title = "Merhaba, Ben Meltem KESER!";
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(false);
                    setTimeout(() => setIsVisible(true), 100);
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // "Daha fazlasını göster" butonuna tıklanınca scroll fonksiyonu
    const scrollToBenKimim = () => {
        const benKimimSection = document.getElementById('about');
        if (benKimimSection) {
            benKimimSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero" ref={heroRef}>
            <h1 className={`animated-title ${isVisible ? 'animate' : ''}`}>
                {title.split('').map((char, index) => (
                    <span
                        key={index}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </h1>
            <p className={`hero-subtext ${isVisible ? 'animate-subtext' : ''}`}>
                2 yıldır bu sektörde kendimi geliştiriyorum.
            </p>

            {/* 4 Yan Yana Butonlar */}
            <div className="hero-button-group">
                <button className="hero-cta-multiple">Front-end Developer</button>
                <button className="hero-cta-multiple">React,js</button>
                <button className="hero-cta-multiple">Python</button>
                <button className="hero-cta-multiple">Creative Designer</button>
            </div>

            {/* Daha Fazlasını Göster Butonu */}
            <button
                className="hero-cta-more"
                onClick={scrollToBenKimim}
            >
                Daha fazlasını göster
            </button>

            <div className="scroll-indicator"></div>
            <div className="scroll-text">Kaydır</div>
        </section>
    );
};

export default Hero;
