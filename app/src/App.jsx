import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Protected from "./components/auth/Protected";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCartItemsByIdAsync } from "./components/cart/cartSlice";
import { selectLoggedUser } from "./components/auth/authSlice";
import PageNotFound from "./pages/PageNotFound";
import OrderPlacedPage from "./pages/OrderPlacedPage";
import UserProfile from "./components/User/UserProfile";
import Logout from "./components/auth/logout/logout";
import ProtectedAdmin from "./components/auth/ProtectedAdmin";
import AdminProducts from "./pages/AdminProducts";
import AdminSingleProductPage from "./pages/AdminSingleProductPage";
import AdminProductForm from "./components/Admin/AdminProductForm";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchCartItemsByIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <Protected>
              <Products />
            </Protected>
          }
        ></Route>

        <Route
          path="/products/:id"
          element={
            <Protected>
              <SingleProductPage />
            </Protected>
          }
        ></Route>

        <Route
          path="/cart"
          element={
            <Protected>
              <CartPage />
            </Protected>
          }
        ></Route>
        <Route path="/register" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/order-placed/:id" element={<OrderPlacedPage />}></Route>
        <Route
          path="/profile"
          element={
            <Protected>
              <UserProfile />
            </Protected>
          }
        ></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route
          path="/checkout"
          element={
            <Protected>
              <CheckoutPage />
            </Protected>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>

        {/* admin routes */}
        <Route
          path="/admin/products"
          element={
            <ProtectedAdmin>
              <AdminProducts />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/products/:id"
          element={
            <ProtectedAdmin>
              <AdminSingleProductPage />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/add-product"
          element={
            <ProtectedAdmin>
              <AdminProductForm />
            </ProtectedAdmin>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
