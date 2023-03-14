import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user-image.png";
import "./DashboardPage.css";
import { Outlet } from "react-router-dom";

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
        <div className={`header__nav${nav ? " active" : ""}`}>
          <form action="post" className="header__search">
            <input
              type="text"
              aria-label="search"
              placeholder="Search for anything"
              className="search__textfield"
            />
            <button type="button" className="search__btn">
              <i className="fas fa-magnifying-glass"></i>
            </button>
          </form>
          <nav className="nav">
            <ul className="nav__list">
              <li className="list__item">Docs</li>
              <li className="list__item">
                <i className="fa-solid fa-bell"></i>
              </li>
              <li className="list__item list-layout">
                <img
                  src={UserImage}
                  alt="user avatar"
                  className="list-avatar"
                />{" "}
                <span>
                  Adedeji <i className="fa-solid fa-caret-down"></i>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <aside className={`sidenav${sidenav ? " active" : ""}`}>
        <div
          className="sidenav__close-icon"
          onClick={() => setSidenav(!sidenav)}
        >
          <i className="fas fa-times"></i>
        </div>
        <ul className="sidenav__list">
          <li className="sidenav__item sidenav__item--heading">Customer</li>
          <li className="sidenav__item selected">
            <a className="sidenav__link" href="#home">
              users
            </a>
          </li>
        </ul>
      </aside>
      <main className="dash-main">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardPage;
