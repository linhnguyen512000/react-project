import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isLoginActions } from "../../store";

// Component này để render NavBar cho website
const NavBar = () => {
  const navigate = useNavigate();

  function navigateHome() {
    navigate("/");
  }

  function navigateShop() {
    navigate("/shop");
  }

  function navigateCart() {
    navigate("/cart");
  }

  function navigateLogin() {
    navigate("/login");
  }

  const userState = useSelector((state) => state.isLogin.isLogin);
  const userLogin = JSON.parse(localStorage.getItem("loginUser"));
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(isLoginActions.logout());
    localStorage.removeItem("loginUser");
  };

  return (
    <Row className={styles.flex}>
      <Col sm={1} className={styles.home} onClick={navigateHome}>
        Home
      </Col>
      <Col sm={1} className={styles.shop} onClick={navigateShop}>
        Shop
      </Col>
      <Col sm={1} className={styles.head}>
        Boutique
      </Col>
      <Col sm={1} className={styles.cart} onClick={navigateCart}>
        <FontAwesomeIcon
          icon="fa-solid fa-cart-shopping"
          className={styles.icon}
        />
        Cart
      </Col>

      <Col sm={1} className={styles.login}>
        <FontAwesomeIcon icon="fa-solid fa-user" className={styles.icon} />
        {userState ? (
          <Col className={styles.col1}>
            {" "}
            {userLogin.name}
            <p onClick={logout} className={styles.text1}>
              (Logout)
            </p>
          </Col>
        ) : (
          <Col className={styles.col1} onClick={navigateLogin}>
            Log in
          </Col>
        )}
      </Col>
    </Row>
  );
};

export default NavBar;
