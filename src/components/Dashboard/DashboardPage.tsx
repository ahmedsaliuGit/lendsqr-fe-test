import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user-image.png";
import "./DashboardPage.css";

function DashboardPage() {
  const [nav, setNav] = useState(false);
  const [sidenav, setSidenav] = useState(false);

  return (
    <div className="grid-container">
      <header className="header">
        <div className="header__logo">
          <div className="menu-icon" onClick={() => setSidenav(!nav)}>
            {sidenav ? (
              <i className="fas fa-close"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
          <img src={Logo} alt="Lendsequare logo" className="logo" />
          <div className="menu-icon" onClick={() => setNav(!nav)}>
            {nav ? (
              <i className="fas fa-close"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
        </div>
        <div className={`header__nav ${nav && "active"}`}>
          <form action="post" className="header__search">
            <input type="text" aria-label="search" />
            <button type="button"></button>
          </form>
          <nav className="nav">
            <ul className="nav__list">
              <li className="list__item">Doc</li>
              <li className="list__item">icon</li>
              <li className="list__item">
                <img src={UserImage} alt="user avatar" /> <br /> Adedeji
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <aside className={`sidenav ${sidenav && "active"}`}>
        <div
          className="sidenav__close-icon"
          onClick={() => setSidenav(!sidenav)}
        >
          <i className="fas fa-times"></i>
        </div>
        <ul className="sidenav__list">
          <li className="list__item">
            <a className="list__link" href="#home">
              user
            </a>
          </li>
        </ul>
      </aside>
      <main className="dash-main"></main>
    </div>
  );
}

export default DashboardPage;
