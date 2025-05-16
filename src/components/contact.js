import React from 'react';
import './contact.css';

const Contact = () => {
    return (

        <section id="contact" className="contact">
            
            <h2>İletişim</h2>
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
