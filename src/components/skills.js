import React from 'react';
import './skills.css';

const skills = [
    { name: 'Java', level: 'İleri Düzey', icon: '/icons/java-logo.png', url: 'https://www.oracle.com/java/' },
    { name: 'JavaScript', level: 'İleri Düzey', icon: '/icons/js-logo.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'C#', level: 'Orta Seviye', icon: '/icons/csharp-logo.png', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    { name: 'HTML5', level: 'İleri Düzey', icon: '/icons/html-logo.png', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS3', level: 'İleri Düzey', icon: '/icons/css-logo.png', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Python', level: 'Orta Seviye', icon: '/icons/python-logo.png', url: 'https://www.python.org/' },
    { name: 'React.js', level: 'İleri Düzey', icon: '/icons/react-logo.png', url: 'https://react.dev/' },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title animated-title">
                {'Neler Yapabilirim?'.split('').map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <a
                        href={skill.url}
                        target="_blank" // Yeni sekmede açılması için
                        rel="noopener noreferrer" // Güvenlik için önerilir
                        className="skill-card-link" // Stil vermek için bir sınıf ekledik
                        key={index}
                        style={{ textDecoration: 'none', color: 'inherit' }} // Link stilini kaldırmak ve rengi korumak için
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