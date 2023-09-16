import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  function NotFoundPage() {
    return <h1>404 - Page Not Found</h1>;
  }
  return (
    <>
      <ToastContainer autoClose={1500} theme="colored" />
      <Router>
        <Routes>
          <Route path="/CarRent" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorite" element={<FavoritePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
