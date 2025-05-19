import React, { useEffect, useRef } from 'react';
import './skills.css';

const skills = [
    { name: 'Java', level: 'Orta Seviye', icon: '/icons/java-logo.png', url: 'https://www.oracle.com/java/' },
    { name: 'JavaScript', level: 'Orta Seviye', icon: '/icons/js-logo.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'C#', level: 'Orta Seviye', icon: '/icons/csharp-logo.png', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    { name: 'HTML5', level: 'Orta Seviye', icon: '/icons/html-logo.png', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS3', level: 'Orta Seviye', icon: '/icons/css-logo.png', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Python', level: 'Orta Seviye', icon: '/icons/python-logo.png', url: 'https://www.python.org/' },
    { name: 'React.js', level: 'Orta Seviye', icon: '/icons/react-logo.png', url: 'https://react.dev/' },
];

const Skills = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const spans = titleRef.current.querySelectorAll('span');
                if (entry.isIntersecting) {
                    spans.forEach((span, i) => {
                        span.style.animation = 'none';
                        // Reflow tetiklenerek animasyon sıfırlanır
                        void span.offsetWidth;
                        span.style.animation = `letterFade 0.4s forwards`;
                        span.style.animationDelay = `${i * 0.05}s`;
                    });
                }
            },
            { threshold: 0.6 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title animated-title" ref={titleRef}>
                {'Neler Yapabilirim?'.split('').map((char, index) => (
                    <span key={index}>
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <a
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skill-card-link"
                        key={index}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className="skill-card">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="skill-image"
                            />
                            <h3>{skill.name}</h3>
                            <p>{skill.level}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Skills;
