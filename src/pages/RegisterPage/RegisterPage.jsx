import styles from "./RegisterPage.module.css";
import Wrapper from "../HomePage/Wrapper";
import { useState } from "react";

// Component này dùng để render RegisterPage
const RegisterPage = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const userArr = JSON.parse(localStorage.getItem("userArr") ?? "[]");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid0 = enteredEmail.trim() !== "";
  const emailInputIsInvalid0 = !enteredEmailIsValid0 && enteredEmailTouched;

  const userCheck = userArr.filter((data) => data.email === enteredEmail);
  const enteredEmailIsValid = userCheck.length === 0;
  const emailInputIsInvalid = !enteredEmailIsValid;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
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
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);
  const enteredPhoneIsValid = enteredPhone.trim() !== "";
  const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched;

  const phoneInputChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const phoneInputBlurHandler = () => {
    setEnteredPhoneTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredPasswordTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPhoneTouched(true);

    if (
      !enteredNameIsValid ||
      !enteredPasswordIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneIsValid
    ) {
      return;
    }

    const data = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    };

    userArr.push(data);

    localStorage.setItem("userArr", JSON.stringify(userArr));

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredPassword("");
    setEnteredPasswordTouched(false);
    setEnteredPhone("");
    setEnteredPhoneTouched(false);

    window.location.replace("/login");
  };

  return (
    <div className={styles.div1}>
      <img src="./banner1.jpg" className={styles.img} />
      <div className={styles.div2}>
        <p className={styles.p1}>Sign Up</p>
        <form onSubmit={formSubmissionHandler}>
          <input
            placeholder="Full Name"
            className={`${styles.input} ${styles.input2}`}
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          ></input>
          <input
            placeholder="Email"
            className={`${styles.input} ${styles.input2}`}
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          ></input>
          <input
            placeholder="Password"
            className={`${styles.input} ${styles.input2}`}
            value={enteredPassword}
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
          ></input>
          <input
            placeholder="Phone"
            className={styles.input}
            value={enteredPhone}
            onChange={phoneInputChangeHandler}
            onBlur={phoneInputBlurHandler}
          ></input>
          <p className={styles.p3}>
            {nameInputIsInvalid && "Name must not be empty!"}
          </p>
          <p className={styles.p3}>
            {emailInputIsInvalid0 && "Email must not be empty!"}
          </p>
          <p className={styles.p3}>
            {emailInputIsInvalid && "Email must be unique!"}
          </p>
          <p className={styles.p3}>
            {passwordInputIsInvalid &&
              "Password must have more than 8 characters!"}
          </p>
          <p className={styles.p3}>
            {phoneInputIsInvalid && "Phone must not be empty!"}
          </p>
          <button className={styles.button}>Sign Up</button>
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

export default RegisterPage;
