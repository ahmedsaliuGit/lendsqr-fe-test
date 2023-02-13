import Logo from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user-image.png";
import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div className="grid-container">
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
      <header className="header">
        <div className="header__flex-item logo-form">
          <img src={Logo} alt="Lendsequare logo" />
          <form action="post">
            <input type="text" aria-label="search" />
            <button type="button"></button>
          </form>
        </div>
        <div className="header__flex-item">
          <nav>
            <ul>
              <li>Doc</li>
              <li>icon</li>
              <li>
                <img src={UserImage} alt="user avatar" /> Adedeji
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <aside className="sidenav">
        <div className="sidenav__close-icon">
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
      <main className="dash-main">
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
        </div>
        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default DashboardPage;
