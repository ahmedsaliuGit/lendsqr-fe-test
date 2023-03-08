import { useEffect, useMemo, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user-image.png";
import UserIcon from "../../assets/images/user-icon.png";
import UsersIcon from "../../assets/images/users-icon.png";
import LoansIcon from "../../assets/images/loans-icon.png";
import SavingsIcon from "../../assets/images/savings-icon.png";
import "./DashboardPage.css";
import { Card } from "../Card/Card";
import { UserService } from "../../services/User.service";
import { User } from "../../models/User";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { BallTriangle } from "react-loader-spinner";

type DashboardPagePropsType = {
  userService: UserService;
};

function DashboardPage({ userService }: DashboardPagePropsType) {
  const [nav, setNav] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const [userData, setUserData] = useLocalStorage<User[]>("lendsqr-users", []);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    return userService.getAllUsers().then((users) => {
      setUserData(users);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const usersPerTable = 10;
  const indexOfLastUser = currentPage * usersPerTable;

  const indexOfFirstUser = indexOfLastUser - usersPerTable;

  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const memoPageNumbers = useMemo(() => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(userData.length / usersPerTable); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }, [userData]);

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
            {loading === true ? (
              <div className="loader">
                <BallTriangle color="#00BFFF" width={100} height={100} />
              </div>
            ) : (
              <>
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
                    {currentUsers.map((user) => (
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
                <div className="pagination-wrapper">
                  <div className="pagination-showing">
                    <span>Showing</span>
                    <button className="btn-showing">
                      {usersPerTable}{" "}
                      <i className="fa fa-chevron-down btn-cheron"></i>
                    </button>
                    <span>out of {userData.length}</span>
                  </div>
                  <div className="pagination">
                    <button
                      className="btn-showing btn-showing--left"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="fa fa-chevron-left"></i>
                    </button>
                    {memoPageNumbers.map((pageNum, index) => (
                      <span
                        key={index}
                        className={
                          pageNum === currentPage
                            ? `pagination__item pagination__item--currentPage`
                            : `pagination__item`
                        }
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum <= 3
                          ? pageNum
                          : pageNum - 8 > 0
                          ? pageNum
                          : "."}
                      </span>
                    ))}
                    <button
                      className="btn-showing"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === usersPerTable}
                    >
                      <i className="fa fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
