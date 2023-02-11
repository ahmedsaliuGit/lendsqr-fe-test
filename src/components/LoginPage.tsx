import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo.svg";
import PabloSignIn from "../assets/images/pablo-sign-in.svg";
import "./LoginPage.scss";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [isMask, setIsMask] = useState(false);
  const navigate = useNavigate();

  const handleChange = function (
    event: React.FormEvent<HTMLInputElement>
  ): void {
    if (email) {
      setEmailMsg("");
    }
    if (password) {
      setPasswordMsg("");
    }

    const currentElem = event.currentTarget;
    if (currentElem.name === "email") {
      setEmail(currentElem.value);
    } else {
      setPassword(currentElem.value);
    }
  };

  const handleSubmit = function (event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailMsg("Please enter valid email");
    }

    if (password === "") {
      setPasswordMsg("Please enter valid password");
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || password === "") {
      return;
    }

    localStorage.setItem("isAuthenticated", "true");

    navigate("/dashboard");
  };

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

          <form method="post" className="form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="label no-margin-bottom">
              <input
                type="text"
                placeholder="Email"
                id="emal"
                aria-label="Email"
                name="email"
                className="input-field"
                onChange={handleChange}
                value={email}
              />
            </label>
            <span className={`error${emailMsg ? " show-error" : ""}`}>
              {emailMsg ? emailMsg : ""}
            </span>
            <label htmlFor="password" className="label show">
              <input
                type={isMask ? "text" : "password"}
                placeholder="Password"
                id="password"
                name="password"
                className="input-field"
                onChange={handleChange}
                value={password}
              />
              <span
                className="show-password"
                onClick={() => setIsMask(!isMask)}
              >
                {isMask ? "hide" : "show"}
              </span>
            </label>
            <span className={`error${passwordMsg ? " show-error" : ""}`}>
              {passwordMsg ? passwordMsg : ""}
            </span>
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
