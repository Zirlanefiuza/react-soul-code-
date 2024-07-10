import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="Header d-flex justify-content-between align-items-center p-3">
      <div className="logo d-flex align-items-center">
        <img
          src="/src/assets/img/logo-aviao.png"
          alt="logo aviao"
          className="logo-image"
        />
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Brasil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              África
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Américas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ásia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Europa
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Dicas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hospedagem
            </a>
          </li>
        </ul>
      </nav>
      <div className="search d-flex align-items-center">
        <i className="ri-search-line ri-lg text-white me-2"></i>
        <input type="text" className="form-control" placeholder="Pesquisa" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="ri-menu-line text-white"></i>
      </button>
    </header>
  );
}

export default Header;
