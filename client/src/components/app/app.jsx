import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../main-page/main-page";
import CatalogPage from "../catalog-page/catalog-page";
import { AppRoute } from "../../const";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} />
        <Route path={AppRoute.CATALOG} element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
