import classes from "./LoginForm.module.css";
import { useRef } from "react";

function LoginForm(props) {
  const refEmail = useRef("");
  const refPassword = useRef("");
  const refCheckbox = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: refEmail.current.value,
      password: refPassword.current.value,
      rememberMe: refCheckbox.current.checked,
    };
    props.onLogin(loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      ref={refEmail}
        type="text"
        name="username"
        placeholder="E-mail Addres"
        className={classes["form-control"]}
      />
      <input
      ref={refPassword}
        type="password"
        name="password"
        placeholder="Password"
        className={classes["form-control"]}
      />
      <div className={classes.remember}>
        <input type="checkbox" id="check1" ref={refCheckbox}/>
        <label htmlFor="check1">Remember me</label>
      </div>
      <div className={classes["form-button"]}>
        <button type="submit">Login</button>
        <a href="#">Forget password?</a>
      </div>
    </form>
  );
}

export default LoginForm;
