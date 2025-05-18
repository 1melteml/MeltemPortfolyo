import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Word Benzeri Uygulama",
            description: "QT DESİGNER'da çizimi yapılıp entegre edilmiş word uygulaması",
            image: "/arkaplan3.jpg", // public klasöründe olmalı
            link: "https://github.com/1melteml/WordUygulamasi"
        },
        {
            title: "Soru Bankası",
            description: "Python kullanılarak oluşturulmuş soru bankası uygulaması",
            image: "/arkaplan3.jpg",
            link: "https://github.com/1melteml/SoruBankasi"
        },
        {
            title: "Yurtdışı Vize Randevu Uygulaması",
            description: "Python kullanılarak oluşturulmuş vize randevusu uygulaması",
            image: "/VizeRandevu.png",
            link: "https://github.com/1melteml/VizeUygulamasi"
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
