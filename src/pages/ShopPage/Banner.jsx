import styles from "./Banner.module.css";
import Wrapper from "../HomePage/Wrapper";

// Component này dùng để render Banner cho mục Shop
const Banner = () => {
  return (
    <div className={styles.div}>
      <p className={styles.text1}>Shop</p>
      <p className={styles.text2}>Shop</p>
    </div>
  );
};

export default Banner;
