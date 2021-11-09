import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../main-page/main-page";
import CatalogPage from "../catalog-page/catalog-page";
import ProductList from "../product-list/product-list";
import ProductPage from "../product-page/product-page";
import { AppRoute } from "../../const";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} />
        <Route path={AppRoute.CATALOG} element={<CatalogPage />} />
        <Route path={`${AppRoute.CATALOG}/:type`} element={<ProductList />} />
        <Route path={`${AppRoute.CATALOG}/:type/:id`} element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
