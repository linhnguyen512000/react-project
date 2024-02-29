import styles from "./CheckoutPage.module.css";
import Banner from "./Banner";
import { useSelector } from "react-redux";

// Component này dùng để render CheckoutPage
const CheckoutPage = () => {
  const itemArr = useSelector((state) => state.cart.itemArr);

  const total = itemArr
    .map((item) => item.price * item.number)
    .reduce((accumulator, current) => accumulator + current, 0)
    .toLocaleString("de-DE");

  return (
    <div>
      <Banner />
      <p className={styles.p0}>Billing Details</p>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <p className={styles.p1}>Full Name:</p>
          <input
            placeholder="Enter Your Full Name Here!"
            className={styles.input}
          ></input>
          <p className={styles.p1}>Email:</p>
          <input
            placeholder="Enter Your Email Here!"
            className={styles.input}
          ></input>
          <p className={styles.p1}>Phone Number: </p>
          <input
            placeholder="Enter Your Phone Number Here!"
            className={styles.input}
          ></input>
          <p className={styles.p1}>Address: </p>
          <input
            placeholder="Enter Your Address Here!"
            className={styles.input}
          ></input>
          <button className={styles.button}>Place order</button>
        </div>
        <div className={styles.div3}>
          <p className={styles.p2}>Your order</p>
          <div>
            {itemArr.map((item) => (
              <div key={item.name} className={styles.div4}>
                <p className={styles.p3}>{item.name}</p>
                <p className={styles.p4}>
                  {(+item.price).toLocaleString("de-DE")} VND x {item.number}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.div5}>
            <p className={styles.p5}>Total</p>
            <p className={styles.p6}>{total} VND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
