import Logo from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user-image.png";
import classes from "./DashboardPage.module.scss";

function DashboardPage() {
  return (
    <div>
      <header className={classes.Header}>
        <div>
          <img src={Logo} alt="Lendsequare logo" />
          <form action="post">
            <input type="text" aria-label="search" />
            <button type="button"></button>
          </form>
        </div>
        <div>
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
      <aside></aside>
      <main></main>
    </div>
  );
}

export default DashboardPage;
