import styles from "./CartPage.module.css";
import Banner from "./Banner";
import Wrapper from "../HomePage/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";
import { useNavigate } from "react-router-dom";

// Componenet này để render CartPage
const CartPage = () => {
  const itemArr = useSelector((state) => state.cart.itemArr);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteItem = (name) => {
    dispatch(cartActions.deleteCart(name));
    console.log("hi");
  };

  const navigateShop = () => {
    navigate("/shop");
  };

  const navigateCheckout = () => {
    navigate("/checkout");
  };

  const minus = (number, name) => {
    if (number > 1) {
      const data = { name: name, number: number - 1 };
      dispatch(cartActions.updateCart(data));
    }
  };

  const plus = (number, name) => {
    const data = { name: name, number: number + 1 };
    dispatch(cartActions.updateCart(data));
  };

  const total = itemArr
    .map((item) => item.price * item.number)
    .reduce((accumulator, current) => accumulator + current, 0)
    .toLocaleString("de-DE");

  return (
    <div className={styles.div0}>
      <Banner />
      <p className={styles.p1}>Shopping Cart</p>
      <div className={styles.div00}>
        <div className={styles.div000}>
          <div className={styles.div1}>
            <p className={`${styles.p2} ${styles.p}`}>Image</p>
            <p className={`${styles.p3} ${styles.p}`}>Product</p>
            <p className={`${styles.p4} ${styles.p}`}>Price</p>
            <p className={`${styles.p5} ${styles.p}`}>Quantity</p>
            <p className={`${styles.p6} ${styles.p}`}>Total</p>
            <p className={`${styles.p7} ${styles.p}`}>Remove</p>
          </div>
          <div className={styles.div2}>
            {itemArr.map((item) => (
              <div key={item.name} className={styles.div3}>
                <img src={item.img} className={styles.img} />
                <p className={`${styles.p8} ${styles.p}`}>{item.name}</p>
                <p className={`${styles.p9} ${styles.p}`}>
                  {(+item.price).toLocaleString("de-DE")} VND
                </p>
                <button
                  className={styles.button}
                  onClick={() => minus(item.number, item.name)}
                >
                  {"<"}
                </button>
                <p className={`${styles.p10} ${styles.p}`}>{item.number}</p>
                <button
                  className={styles.button}
                  onClick={() => plus(item.number, item.name)}
                >
                  {">"}
                </button>
                <p className={`${styles.p11} ${styles.p}`}>
                  {(item.number * +item.price).toLocaleString("de-DE")} VND
                </p>
                <div onClick={() => deleteItem(item.name)}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-trash"
                    className={styles.icon}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.div4}>
            <button
              onClick={navigateShop}
              className={`${styles.button2} ${styles.p}`}
            >
              {" "}
              <p className={`${styles.p12} ${styles.p}`}>&larr;</p> Continue
              shopping
            </button>
            <button
              onClick={navigateCheckout}
              className={`${styles.button3} ${styles.p}`}
            >
              Proceed to checkout{" "}
              <p className={`${styles.p12} ${styles.p}`}>&rarr;</p>
            </button>
          </div>
        </div>
        <div>
          <div className={styles.div5}>
            <p className={`${styles.p15} ${styles.p}`}>Cart total</p>
            <div className={styles.div6}>
              <p className={`${styles.p16} ${styles.p}`}>Subtotal</p>
              <p className={`${styles.p17} ${styles.p}`}>{total} VND</p>
            </div>
            <p className={`${styles.p18} ${styles.p}`}>Total</p>
            <p className={`${styles.p19} ${styles.p}`}>{total} VND</p>
            <input
              placeholder="Enter your coupon"
              className={styles.input}
            ></input>
            <button className={styles.button4}>
              <FontAwesomeIcon
                icon="fa-solid fa-gift"
                className={styles.icon2}
              />{" "}
              Apply coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
