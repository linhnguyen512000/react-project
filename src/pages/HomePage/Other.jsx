import styles from "./Other.module.css";
import Wrapper from "./Wrapper";

// Component này dùng để render mục Other cho HomePage
const Other = () => {
  return (
    <Wrapper>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <p className={styles.text1}>Free shipping</p>
          <p className={styles.text2}>Free shipping worldwide</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.text1}>24/7 Service</p>
          <p className={styles.text2}>Free shipping worldwide</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.text1}>Fesival offer</p>
          <p className={styles.text2}>Free shipping worldwide</p>
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.div4}>
          <p className={styles.text3}>Let's be friends!</p>
          <p className={styles.text4}>
            Nisi nisi tempor consequat laboris nisi
          </p>
        </div>
        <input
          placeholder="Enter your email address"
          className={styles.input}
        ></input>
        <button className={styles.button}>Subcribe</button>
      </div>
    </Wrapper>
  );
};

export default Other;
