import Header from "../header/header";
import Features from "../features/features";
import Footer from "../footer/footer";

function MainPage() {
  return (
    <div className="page-body">
      <Header />
      <h1 className="visually-hidden">Интернет-магазин "ТЕХНОМАРТ"</h1>
      <Features />
      <section className="popular-goods container">
        <div className="populars-heading">
          <h2 className="heading">Популярные товары</h2>
          <a className="site-link" href="blank.html">
            все популярные товары
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
