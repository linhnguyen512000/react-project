import styles from "./ShopPage.module.css";
import Banner from "./Banner";
import Wrapper from "../HomePage/Wrapper";
import DisplayProduct from "./DisplayProduct";

// Component này dùng để render mục Shop
const ShopPage = () => {
  return (
    <Wrapper>
      <Banner />
      <DisplayProduct />
    </Wrapper>
  );
};

export default ShopPage;
