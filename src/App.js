import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import { Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "./pages/HomePage/Wrapper";
import NavBar from "./pages/HomePage/NavBar";
import Footer from "./pages/HomePage/Footer";
library.add(fab, fas);

function Layout() {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

// Router cho website
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "shop",
        element: <ShopPage />,
      },
      { path: "detail/:productId", element: <DetailPage /> },
      { path: "cart", element: <CartPage /> },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
