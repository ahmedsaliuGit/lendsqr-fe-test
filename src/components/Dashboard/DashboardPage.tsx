import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user-image.png";
import UserIcon from "../../assets/images/user-icon.png";
import UsersIcon from "../../assets/images/users-icon.png";
import LoansIcon from "../../assets/images/loans-icon.png";
import SavingsIcon from "../../assets/images/savings-icon.png";
import "./DashboardPage.css";
import { Card } from "../Card/Card";
import { HttpAdapter } from "../../adapters/HttpAdapter";
import { UserService } from "../../services/User.service";
import { User } from "../../models/User";

const httpAdapter = new HttpAdapter({
  baseUrl: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1",
});
const userService = new UserService(httpAdapter);

function DashboardPage() {
  const [nav, setNav] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = () => {
    return userService.getAllUsers().then((users) => {
      const newUsers = users.slice(0, 10).map((user) => {
        return {
          id: user.id,
          userName: user.userName,
          orgName: user.orgName,
          phoneNumber: user.phoneNumber,
          createdAt: user.createdAt,
          lastActiveDate: user.lastActiveDate,
          email: user.email,
        };
      });
      setUsers(newUsers);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
        <div className="table-container">
          <div className="mobile-container">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    Organisation <i className="fas fa-filter"></i>
                  </th>
                  <th>
                    Username <i className="fas fa-filter"></i>
                  </th>
                  <th>
                    Email <i className="fas fa-filter"></i>
                  </th>
                  <th>
                    Phone Number <i className="fas fa-filter"></i>
                  </th>
                  <th>
                    Date Joined <i className="fas fa-filter"></i>
                  </th>
                  <th>
                    Status <i className="fas fa-filter"></i>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{new Date(user.createdAt).toLocaleString()}</td>
                    <td>
                      {new Date(user.lastActiveDate).getMilliseconds() >=
                      new Date().getMilliseconds()
                        ? "Active"
                        : "Pending"}
                    </td>
                    <td>
                      <i className="fas fa-ellipsis-vertical"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
