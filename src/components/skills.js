import React from 'react';
import './skills.css';

const skills = [
    { name: 'React.js', level: 'İleri Düzey', icon: '⚛️' },
    { name: 'JavaScript', level: 'İleri Düzey', icon: '🟨' },
    { name: 'Node.js', level: 'Orta Seviye', icon: '🌿' },
    { name: 'MongoDB', level: 'Orta Seviye', icon: '🍃' },
    { name: 'HTML & CSS', level: 'İleri Düzey', icon: '🎨' },
    { name: 'Git / GitHub', level: 'İyi', icon: '🧠' },
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
                    <div className="skill-card" key={index}>
                        <span className="skill-icon">{skill.icon}</span>
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
