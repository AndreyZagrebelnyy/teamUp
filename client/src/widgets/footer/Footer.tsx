import React from 'react';
import './Footer.css';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>О нас</h4>
            <ul>
              <li><a href="/about">О компании</a></li>
              <li><a href="/team">Команда</a></li>
              <li><a href="/careers">Карьера</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Услуги</h4>
            <ul>
              <li><a href="/services">Наши услуги</a></li>
              <li><a href="/pricing">Цены</a></li>
              <li><a href="/contact">Контакты</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Социальные сети</h4>
            <ul>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Контакт</h4>
            <ul>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
              <li><a href="tel:+1234567890">+123 456 7890</a></li>
              <li>123 Main Street, Anytown, USA</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
