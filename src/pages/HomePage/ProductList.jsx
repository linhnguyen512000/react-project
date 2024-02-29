import styles from "./ProductList.module.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";

// Component này dùng để render ProductList cho HomePage
const ProductList = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [show, setShow] = useState(false);

  const hidden = () => {
    setShow(false);
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
    <div className={styles.container1}>
      <p className={styles.text1}>Made the hard way</p>
      <p className={styles.text2}>Top trending products</p>
      <div className={styles.container2}>
        {data !== null &&
          data.map((data, index) => (
            <div key={index}>
              <img
                src={data.img1}
                className={styles.img}
                onClick={() => {
                  setName(data.name);
                  setShow(true);
                }}
              />
              <p className={styles.name}>{data.name}</p>
              <p className={styles.price}>
                {(+data.price).toLocaleString("de-DE")} VND
              </p>
            </div>
          ))}
      </div>
      <div>
        {name !== null && show && (
          <Modal data={data} hidden={hidden} name={name} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
