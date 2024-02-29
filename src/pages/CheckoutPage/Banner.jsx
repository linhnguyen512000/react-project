import styles from "./Banner.module.css";

// Component này để render banner cho mục Checkout
const Banner = () => {
  return (
    <div className={styles.div}>
      <p className={styles.text1}>Checkout</p>
      <p className={styles.text2}>
        Home / Cart / <p className={styles.text3}>Checkout</p>
      </p>
    </div>
  );
};

export default Banner;
