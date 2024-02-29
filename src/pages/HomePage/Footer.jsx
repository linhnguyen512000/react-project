import styles from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wrapper from "./Wrapper";

// Componenet này dùng để render mục Footer trang web
const Footer = () => {
  return (
    <div className={styles.container}>
      <Row className={styles.container2}>
        <Col>
          <Row className={styles.header}>Customer Services</Row>
          <Row className={styles.text}>Help & Contact Us</Row>
          <Row className={styles.text}>Returns & Refunds</Row>
          <Row className={styles.text}>Online Stores</Row>
          <Row className={styles.text}>Terms & Conditions</Row>
        </Col>
        <Col>
          <Row className={styles.header}>Company</Row>
          <Row className={styles.text}>What We Do</Row>
          <Row className={styles.text}>Available Services</Row>
          <Row className={styles.text}>Lastest Posts</Row>
          <Row className={styles.text}>FAQs</Row>
        </Col>
        <Col>
          <Row className={styles.header}> Social Media</Row>
          <Row className={styles.text}>Twitter</Row>
          <Row className={styles.text}>Instagram</Row>
          <Row className={styles.text}>Facebook</Row>
          <Row className={styles.text}>Pinterest</Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
