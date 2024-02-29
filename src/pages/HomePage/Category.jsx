import styles from "./Category.module.css";

// Component này dùng để render mục Category cho HomePage
const Category = () => {
  return (
    <div className={styles.container1}>
      <p className={styles.text1}>Carefully created collections</p>
      <p className={styles.text2}>Browse our categories</p>
      <div>
        <img src="./product_1.png" className={styles.img1} />
        <img src="./product_2.png" className={styles.img2} />
        <img src="./product_3.png" className={styles.img3} />
        <img src="./product_4.png" className={styles.img4} />
        <img src="./product_5.png" className={styles.img5} />
      </div>
    </div>
  );
};

export default Category;
