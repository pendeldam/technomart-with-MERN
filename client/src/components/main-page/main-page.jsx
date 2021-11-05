import Header from "../header/header";
import Features from "../features/features";

function MainPage() {
  return (
    <div className="page-body">
      <Header />
      <h1 className="visually-hidden">Интернет-магазин "ТЕХНОМАРТ"</h1>
      <Features />
    </div>
  );
}

export default MainPage;
