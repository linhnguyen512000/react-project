import styles from "./Banner.module.css";

// Component này dùng để render banner cho cho HomePage
const Banner = () => {
  return (
    <div className={styles.div}>
      <img src="./banner1.jpg" className={styles.img} />
      <div className={styles.container}>
        <p className={styles.p}>New inspiration 2020</p>
        <h2 className={styles.h1}>20% off on new season</h2>
        <button className={styles.button}>Browse collections</button>
      </div>
    </div>
  );
};

export default Banner;
