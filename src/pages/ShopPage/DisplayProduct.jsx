import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DisplayProduct.module.css";

// Component này dùng để render các product cho mục Shop
const DisplayProduct = () => {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState(null);

  const setAll = () => {
    setCategory("all");
  };

  const setIphone = () => {
    setCategory("iphone");
  };

  const setIpad = () => {
    setCategory("ipad");
  };

  const setMacbook = () => {
    setCategory("macbook");
  };

  const setAirpod = () => {
    setCategory("airpod");
  };

  const setWatch = () => {
    setCategory("watch");
  };

  const setMouse = () => {
    setCategory("mouse");
  };

  const setKeyboard = () => {
    setCategory("keyboard");
  };

  const setOther = () => {
    setCategory("other");
  };

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.div1}>
      <div className={styles.div2}>
        <p className={styles.category}>Categories</p>
        <p className={styles.apple}>Apple</p>
        <p
          className={`${styles.select} ${
            category === "all" ? `${styles.highlight}` : ""
          }`}
          onClick={setAll}
        >
          All
        </p>
        <p className={styles.type}>Iphone & Mac</p>
        <p
          className={`${styles.select} ${
            category === "iphone" ? `${styles.highlight}` : ""
          }`}
          onClick={setIphone}
        >
          Iphone
        </p>
        <p
          className={`${styles.select} ${
            category === "ipad" ? `${styles.highlight}` : ""
          }`}
          onClick={setIpad}
        >
          Ipad
        </p>
        <p
          className={`${styles.select} ${
            category === "macbook" ? `${styles.highlight}` : ""
          }`}
          onClick={setMacbook}
        >
          Macbook
        </p>
        <p className={styles.type}>Wireless</p>
        <p
          className={`${styles.select} ${
            category === "airpod" ? `${styles.highlight}` : ""
          }`}
          onClick={setAirpod}
        >
          Airpod
        </p>
        <p
          className={`${styles.select} ${
            category === "watch" ? `${styles.highlight}` : ""
          }`}
          onClick={setWatch}
        >
          Watch
        </p>
        <p className={styles.type}>Other</p>
        <p
          className={`${styles.select} ${
            category === "mouse" ? `${styles.highlight}` : ""
          }`}
          onClick={setMouse}
        >
          Mouse
        </p>
        <p
          className={`${styles.select} ${
            category === "keyboard" ? `${styles.highlight}` : ""
          }`}
          onClick={setKeyboard}
        >
          Keyboard
        </p>
        <p
          className={`${styles.select} ${
            category === "other" ? `${styles.highlight}` : ""
          }`}
          onClick={setOther}
        >
          Other
        </p>
      </div>
      <div className={styles.div3}>
        <input placeholder="Enter Search Here!" className={styles.input} />
        <select>
          <option>Default sorting</option>
        </select>
        <div className={styles.div4}>
          {data !== null &&
            data
              .filter((item) => {
                if (category === item.category) {
                  return item;
                } else if (category === "all") {
                  return item;
                }
                {
                }
              })
              .map((data, index) => (
                <div key={index}>
                  <Link to={`/detail/${data.name}`}>
                    <img src={data.img1} className={styles.img} />
                  </Link>
                  <p className={styles.name}>{data.name}</p>
                  <p className={styles.price}>
                    {(+data.price).toLocaleString("de-DE")} VND
                  </p>
                </div>
              ))}
          <div className={styles.div5}>
            <button className={styles.button}>{`<<`}</button>
            <p className={styles.p}>1</p>
            <button className={styles.button}>{`>>`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
