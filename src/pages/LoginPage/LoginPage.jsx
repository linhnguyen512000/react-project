import styles from "./LoginPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoginActions } from "../../store";

// Componenet này dùng đẻ render mục LoginPage
const LoginPage = () => {
  const userArr = JSON.parse(localStorage.getItem("userArr") ?? "[]");
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setInvalidUser(false);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const enteredPasswordIsValid = enteredPassword.length > 8;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setInvalidUser(false);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredPasswordTouched(true);
    setEnteredEmailTouched(true);

    const checkArr = userArr.filter(
      (data) => data.email === enteredEmail && data.password === enteredPassword
    );

    if (checkArr.length === 1) {
      localStorage.setItem("loginUser", JSON.stringify(checkArr[0]));
      navigate("/");
      dispatch(isLoginActions.login());

      setEnteredEmail("");
      setEnteredEmailTouched(false);
      setEnteredPassword("");
      setEnteredPasswordTouched(false);
    } else {
      setEnteredPassword("");
      setInvalidUser(true);
    }
  };

  return (
    <div className={styles.div1}>
      <img src="./banner1.jpg" className={styles.img} />
      <div className={styles.div2}>
        <p className={styles.p1}>Sign In</p>
        <form onSubmit={formSubmissionHandler}>
          <input
            placeholder="Email"
            className={`${styles.input} ${styles.input2}`}
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          ></input>
          <input
            placeholder="Password"
            className={styles.input}
            value={enteredPassword}
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
          ></input>

          <p className={styles.p3}>
            {emailInputIsInvalid && "Email must not be empty!"}
          </p>
          <p className={styles.p3}>
            {passwordInputIsInvalid &&
              "Password must have more than 8 characters!"}
          </p>
          <p className={styles.p3}>
            {" "}
            {invalidUser && "User or password does not correct!"}
          </p>

          <button
            className={styles.button}
            disabled={emailInputIsInvalid || passwordInputIsInvalid}
          >
            Sign In
          </button>
        </form>
        <p className={styles.p2}>
          Log in?{" "}
          <a href="#" className={styles.a}>
            Click
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
