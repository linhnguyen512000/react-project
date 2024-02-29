import styles from "./Detailpage.module.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

// Component này dùng để render DetailPage
const DetailPage = () => {
  const [data, setData] = useState(null);
  const [item, setItem] = useState(null);
  const [number, setNumber] = useState(1);

  const params = useParams();

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setItem(data.filter((data) => data.name === params.productId));
      })
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();

  const minus = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const plus = () => {
    setNumber(number + 1);
  };

  const addHandler = () => {
    const cartItem = {
      name: item[0].name,
      price: item[0].price,
      img: item[0].img1,
      number: number,
    };
    dispatch(cartActions.addCart(cartItem));
  };

  return (
    <div className={styles.div0}>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <img src={item !== null && item[0].img1} className={styles.img1} />
          <img src={item !== null && item[0].img2} className={styles.img2} />
          <img src={item !== null && item[0].img3} className={styles.img3} />
          <img src={item !== null && item[0].img4} className={styles.img4} />
          <img src={item !== null && item[0].img4} className={styles.img5} />
        </div>
        <div className={styles.div3}>
          <p className={styles.name}>{item !== null && item[0].name}</p>
          <p className={styles.price}>
            {item !== null && (+item[0].price).toLocaleString("de-DE")} VND
          </p>
          <p className={styles.shortdesc}>
            {item !== null && item[0].short_desc}
          </p>
          <p className={styles.category1}>Category:</p>
          <p className={styles.category2}>
            {item !== null && item[0].category}
          </p>
          <p className={styles.quantity}>Quantity</p>
          <button className={styles.button} onClick={minus}>
            {"<"}
          </button>
          <p className={styles.p}>{number}</p>
          <button className={styles.button} onClick={plus}>
            {">"}
          </button>
          <button className={styles.button1} onClick={addHandler}>
            Add to cart
          </button>
        </div>
      </div>
      <div className={styles.div4}>
        <p className={styles.text1}>Description</p>
        <p className={styles.text2}>Product description</p>
        <p className={styles.text3}>{item !== null && item[0].long_desc}</p>
      </div>
      <p className={styles.text4}>Related Products</p>
      <div className={styles.div5}>
        {data !== null &&
          data
            .filter(
              (data) =>
                data.category === item[0].category && data.name !== item[0].name
            )
            .map((data, index) => (
              <div key={index}>
                <Link to={`/detail/${data.name}`}>
                  <img src={data.img1} className={styles.img} />
                </Link>
                <p className={styles.text5}>{data.name}</p>
                <p className={styles.text6}>
                  {(+data.price).toLocaleString("de-DE")} VND
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DetailPage;
