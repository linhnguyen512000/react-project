import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component này dể render Modal ở phần HomePage
const Modal = (props) => {
  const item = props.data.filter((item) => item.name === props.name);
  return (
    <div className={styles.div}>
      <div className={styles.div2}>
        <span className={styles.close} onClick={props.hidden}>
          &times;
        </span>
        <div className={styles.div3}>
          <img src={item[0].img1} className={styles.img} />
          <div className={styles.div4}>
            <p className={styles.name}>{item[0].name}</p>
            <p className={styles.price}>
              {(+item[0].price).toLocaleString("de-DE")} VND
            </p>
            <p className={styles.text}>{item[0].long_desc}</p>
            <button className={styles.button}>
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                className={styles.icon}
              />
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
