import React, { useEffect, useRef } from 'react';
import './portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Word Benzeri Uygulama",
            description: "QT DESİGNER'da çizimi yapılıp entegre edilmiş word uygulaması",
            image: "/WordBenzeri.jpeg", // public klasöründe olmalı
            link: "https://github.com/1melteml/WordUygulamasi"
        },
        {
            title: "Soru Bankası",
            description: "Python kullanılarak oluşturulmuş soru bankası uygulaması",
            image: "/SoruBankasi.jpeg",
            link: "https://github.com/1melteml/SoruBankasi"
        },
        {
            title: "Yurtdışı Vize Randevu Uygulaması",
            description: "Python kullanılarak oluşturulmuş vize randevusu uygulaması",
            image: "/VizeRandevu.png",
            link: "https://github.com/1melteml/VizeUygulamasi"
        },
        {
            title: "Tarım Aracı",
            description: "Arduino kullanılarak oluşturulan hareketli tarım aracı",
            image: "/TarımAraci2.jpeg",
            link: "https://github.com/1melteml/Arduino"
        }
    ];

    const titleRef = useRef(null);

    useEffect(() => {
        const titleEl = titleRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animasyonu sıfırla ve tekrar başlat
                        titleEl.style.animation = 'none';
                        // Tarayıcıya stil değişikliğini fark ettirip yeniden animasyon başlatma
                        void titleEl.offsetWidth;
                        titleEl.style.animation = '';
                    }
                });
            },
            { threshold: 0.1 } // %10 göründüğünde tetiklesin
        );

        if (titleEl) {
            observer.observe(titleEl);
        }

        return () => {
            if (titleEl) {
                observer.unobserve(titleEl);
            }
        };
    }, []);

    return (
        <section id="portfolio" className="portfolio">
            <h2 ref={titleRef}>Portfolyo</h2>
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
