import React, { useEffect, useRef } from 'react';
import './contact.css';

const Contact = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const el = titleRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Animasyonu sıfırla
                    el.style.animation = 'none';

                    // Hemen sonra animasyonu tekrar başlat
                    setTimeout(() => {
                        el.style.animation = 'titlePop 1s ease-out forwards';
                    }, 20);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);

        return () => observer.unobserve(el);
    }, []);

    return (
        <section id="contact" className="contact">
            <h2 ref={titleRef}>İletişim</h2>
            <p>Benimle iletişime geçmek istersen aşağıdaki formu doldurabilirsin 💌</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Adın" required />
                <input type="email" placeholder="E-posta" required />
                <textarea placeholder="Mesajın" rows="5" required></textarea>
                <button type="submit">Gönder</button>
            </form>
        </section>
    );
};

export default Contact;
