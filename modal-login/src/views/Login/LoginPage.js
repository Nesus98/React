import classes from "./LoginPage.module.css";
import LoginForm from "./LoginForm";
import Modal from "./Modal/Modal";
import { validateEmail, validatePassword, validatePasswordLength } from "../../utils/validate";
import ReactDOM from "react-dom";
import { useState } from "react";

function LoginPage() {
  const [visible, setVisible] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    loggedIn: false,
    email: "",
    password: "",
    rememberMe: false,
    loginError: "",
  });
  const handleVisibility = (loginData) => {
  const isValidCredentials =
    loginData &&
    validateEmail(loginData.email) &&
    validatePassword(loginData.password);

  const loginInfo = {
    loggedIn: isValidCredentials,
    email: loginData.email,
    password: loginData.password,
    rememberMe: loginData.rememberMe,
    loginHeader: isValidCredentials ? "Login successful" : "Login failed!",
    loginMessage: isValidCredentials
      ? "You have been logged in successfully"
      : "Wrong email or password",
  };

  setLoginInfo(loginInfo);
  console.log(isValidCredentials ? "Login successful" : "Login failed!");
};
  return (
    <>
      {ReactDOM.createPortal(
        <Modal visible={visible} onLogin={handleVisibility} data={loginInfo} />,
        document.querySelector("#modal")
      )}
      <div className={classes.container}>
        <div className={classes.bgForm}></div>
        <div className={classes.formContainer}>
          <div className={classes.formWrapper}>
            <h2>Get all stuffs done with Login engine</h2>
            <p>
              Acces to the most powerful tool in the entire design and web
              galaxy.
            </p>
            <div className={classes["login-links"]}>
              <a href="#" className={classes.active}>
                Login
              </a>
              <a href="#">Register</a>
            </div>
            <LoginForm onLogin={handleVisibility}></LoginForm>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
