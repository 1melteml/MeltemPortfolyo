import React from 'react';
import { FaGithub, FaXTwitter, FaFacebook } from 'react-icons/fa6';
import './sociallinks.css'; // opsiyonel CSS

const Sociallinks = () => {
    return (
        <section id="sociallinks" className="social-links-section">
            <div className="social-links">
                <a href="https://github.com/1melteml" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
            </div>
        </section>
    );
};

export default Sociallinks;
