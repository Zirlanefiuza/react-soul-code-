import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <p>
          <i className="ri-copyright-line"></i> 2024 Travel Website. All rights reserved.
        </p>
        <div className="Footer-icons">
          <a href="https://instagram.com/zilanefiuza" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="tel:+1234567890">
            <i className="ri-phone-line"></i>
          </a>
          <a href="zirlanebatistafiuza2gmail.com">
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
