import styles from "./Banner.module.css";

// Componenet này để render banner cho mục Cart
const Banner = () => {
  return (
    <div className={styles.div}>
      <p className={styles.text1}>Cart</p>
      <p className={styles.text2}>Cart</p>
    </div>
  );
};

export default Banner;
