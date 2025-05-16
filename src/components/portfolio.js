import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Kişisel Blog",
            description: "React ile geliştirilen responsive blog sitesi.",
            image: "/images/blog.png", // public klasöründe olmalı
            link: "#"
        },
        {
            title: "Film API Uygulaması",
            description: "OMDB API kullanılarak yapılmış arama uygulaması.",
            image: "/images/movieapp.png",
            link: "#"
        },
        {
            title: "Hava Durumu App",
            description: "OpenWeather API ile anlık hava durumu gösterimi.",
            image: "/images/weather.png",
            link: "#"
        }
    ];

    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolyo</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="portfolio-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="portfolio-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noreferrer">Görüntüle</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
