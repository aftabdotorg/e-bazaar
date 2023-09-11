import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SingleProductPage from "./pages/SingleProduct/SingleProductPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="*" element={<span>404, Page not found!</span>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
