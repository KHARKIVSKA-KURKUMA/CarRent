import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { lazy, useEffect } from "react";
import Restricted from "./components/Routes/Restricted";
import Private from "./components/Routes/Private";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./store/auth/authThunks";
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AccountPage = lazy(() => import("./pages/AccountPage/AccountPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <ToastContainer autoClose={2500} theme="colored" />
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/CarRent/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route
              path="login"
              element={<Restricted component={LoginPage} to="/account" />}
            />
            <Route
              path="register"
              element={<Restricted component={RegisterPage} to="/account" />}
            />
            <Route
              path="account"
              element={<Private component={AccountPage} to="/login" />}
            ></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
