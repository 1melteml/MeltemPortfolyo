import React, { useEffect, useState, useRef } from 'react';
import './hero.css';

const Hero = () => {
    const title = "Merhaba, Ben Meltem";
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

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
            <p className="hero-subtext">doldurulacak 🎨</p>
        </section>
    );
};

export default Hero;
