import React from "react";
import Header from "../header/header";
import CatalogBreadcrumbs from "../catalog-breadcrumbs/catalog-breadcrumbs";
import CatalogFilters from "../catalog-filters/catalog-filters";
import CatalogSorting from "../catalog-sorting/catalog-sorting";
import CatalogPagination from "../catalog-pagination/catalog-pagination";
import ProductCard from "../product-card/product-card";
import ProductInfo from "../product-info/product-info";
import Footer from "../footer/footer";
import { popularGoods } from "../../mocks";

function CatalogPage() {
  return (
    <div className="page-body">
      <Header />
      <section className="catalog">
        <div className="catalog-wrapper container">
          <h1 className="visually-hidden">Каталог товаров</h1>
          <CatalogBreadcrumbs />
          <p className="section-subtitle">перфораторы</p>
          <CatalogFilters />
          <div className="catalog-goods-wrapper">
            <CatalogSorting />
            <section className="catalog-goods">
              <h2 className="visually-hidden">Список товаров</h2>
              <ul className="catalog-goods__list">
                {popularGoods.map((card) => (
                  <ProductCard key={card.id} card={card} />
                ))}
              </ul>
              <CatalogPagination />
            </section>
          </div>
        </div>
        <ProductInfo />
      </section>
      <Footer />
    </div>
  );
}

export default CatalogPage;
