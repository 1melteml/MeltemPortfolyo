import React, { useEffect } from 'react';
import './about.css';

const About = () => {

    useEffect(() => {
        const options = { threshold: 0.6 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, options);

        // Başlığı gözlemle
        const title = document.querySelector('.section-title');
        if (title) observer.observe(title);

        // Paragrafları gözlemle
        const paragraphs = document.querySelectorAll('.about-text p');
        paragraphs.forEach(p => observer.observe(p));

        // Cleanup
        return () => {
            if (title) observer.unobserve(title);
            paragraphs.forEach(p => observer.unobserve(p));
        };
    }, []);

    return (
        <section id="about" className="about-section">
            <h2 className="section-title">Ben Kimim?</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src="/meltemfoto.jpg" alt="Meltem" />
                </div>
                <div className="about-text">
                    <p>
                        Merhaba! Ben Meltem. 29 Temmuz 2005 tarihinde Balıkesir'de doğdum. Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Frontend geliştirme ve yaratıcı tasarımlara ilgim var.
                    </p>
                    <p>
                        Yazılım dünyasında problem çözmeyi ve yenilikçi çözümler üretmeyi seviyorum. Frontend teknolojileri başta olmak üzere; React, JavaScript, HTML ve CSS ile kullanıcı dostu, estetik arayüzler tasarlıyorum. Aynı zamanda backend ve veritabanı konularına da ilgi duyuyorum ve sürekli kendimi geliştirmeye devam ediyorum.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
