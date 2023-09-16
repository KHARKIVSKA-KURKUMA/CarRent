import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer autoClose={1500} theme="colored" />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/CarRent/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorite" element={<FavoritePage />} />
          </Route>
          <Route path="catalog" element={<CatalogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
