import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SingleProductPage from "./pages/SingleProduct/SingleProductPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import CartPage from "./pages/CartPage/CartPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<span>404, Page not found!</span>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
