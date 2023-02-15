import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user-image.png";
import UserIcon from "../../assets/images/user-icon.png";
import UsersIcon from "../../assets/images/users-icon.png";
import LoansIcon from "../../assets/images/loans-icon.png";
import SavingsIcon from "../../assets/images/savings-icon.png";
import "./DashboardPage.css";
import { Card } from "../Card/Card";

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
          <li className="sidenav__item sidenav__item--heading">Customer</li>
          <li className="sidenav__item selected">
            <a className="sidenav__link" href="#home">
              users
            </a>
          </li>
        </ul>
      </aside>
      <main className="dash-main">
        <div className="main-header">
          <p className="main-header__title">Users</p>
        </div>
        <div className="main-card">
          <Card image={UserIcon} title="Users" amount={2453} />
          <Card image={UsersIcon} title="Active Users" amount={2453} />
          <Card image={LoansIcon} title="Users with loans" amount={12453} />
          <Card
            image={SavingsIcon}
            title="Users with savings"
            amount={102453}
          />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
