import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { lazy } from "react";
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <>
      <ToastContainer autoClose={1500} theme="colored" />
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/CarRent/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorite" element={<FavoritePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
