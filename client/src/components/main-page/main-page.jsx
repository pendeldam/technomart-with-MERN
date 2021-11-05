import Header from "../header/header";
import Features from "../features/features";
import ProductCard from "../product-card/product-card";
import Footer from "../footer/footer";
import { popularGoods } from "../../mocks";

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
        <ul className="popular-goods-list">
          {popularGoods.map((card) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
