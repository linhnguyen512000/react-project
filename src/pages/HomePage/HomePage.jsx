import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Wrapper from "./Wrapper.jsx";
import Category from "./Category.jsx";
import Banner from "./Banner.jsx";
import Other from "./Other.jsx";
import ProductList from "./ProductList.jsx";

// Component này dùng để render mục HomePage
const HomePage = () => {
  return (
    <Wrapper>
      <Banner />
      <Category />
      <ProductList />
      <Other />
    </Wrapper>
  );
};

export default HomePage;
