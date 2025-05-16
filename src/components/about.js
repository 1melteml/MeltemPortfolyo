import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">Ben Kimim?</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src="/meltemfoto.jpg" alt="Meltem" />
                </div>
                <div className="about-text">
                    <p>
                        Merhaba! Ben Meltem. Frontend geliştirme ve yaratıcı pastel tasarımlara tutkuyla bağlıyım. Kullanıcı odaklı ve görsel olarak etkileyici arayüzler oluşturmayı seviyorum.
                    </p>
                    <p>
                        HTML, CSS, JavaScript ve React.js ile çalışıyorum. Boş zamanlarımda dijital çizimler yapar ve kahve eşliğinde kod yazarım ☕💻
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
