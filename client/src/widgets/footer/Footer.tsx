import React, { useState } from 'react';
import './Footer.css';
import { FaTelegramPlane, FaInstagram, FaYoutube, FaBars } from 'react-icons/fa';

function Footer(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.jpg" alt="Team_Up" />
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Социальные сети</h4>
            <button className="burger-menu" onClick={toggleMenu}>
              <FaBars size={20} />
            </button>
            {menuOpen && (
              <ul className="social-icons">
                <li>
                  <a
                    href="https://t.me/+cZcgk5hXRZtmYWMy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane size={20} /> Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/elbrus.bootcamp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@elbrusbootcampjs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={20} /> YouTube
                  </a>
                </li>
              </ul>
            )}

          </div>
          <div className="footer-column">
            <h4>Контакт</h4>
            <ul>
              <li>
                <a href="mailto:popaSuslika_a_ne_@elbrus.bootcamp">
                  popaSuslika_a_ne_@elbrus.bootcamp
                </a>
              </li>
              <li>
                <a href="tel:+78005553555">8-800-555-35-55</a>
              </li>
              <li>Санкт-Петербург, Лиговский 140</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Team_Up. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
