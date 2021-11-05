import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../main-page/main-page";
import { AppRoute } from "../../const";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
