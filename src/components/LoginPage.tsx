import Logo from "../assets/images/logo.svg";
import PabloSignIn from "../assets/images/pablo-sign-in.svg";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <main className="main">
      <div className="main-side1">
        <img src={Logo} alt="Lendsqr logo" className="main-logo" />
        <img
          src={PabloSignIn}
          alt="Illustration for sigin in"
          className="pablo"
        />
      </div>
      <div className="main-side2">
        <div className="form-wrapper">
          <h1 className="text-lg">Welcome!</h1>
          <p className="text">Enter details to login</p>

          <form method="post" className="form">
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              name="email"
              className="input-field"
            />
            <label htmlFor="password" className="input-field show">
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="password"
              />
              <span className="show-password">show</span>
            </label>
            <p className="text--link">
              <a href="#forgot" className="link">
                Forgot password?
              </a>
            </p>
            <button type="submit" className="btn">
              Log In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
