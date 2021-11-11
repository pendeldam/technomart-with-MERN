import React from "react";
import Header from "../header/header";
import CatalogBreadcrumbs from "../catalog-breadcrumbs/catalog-breadcrumbs";
import CatalogList from "../catalog-list/catalog-list";
import Footer from "../footer/footer";

function CatalogPage() {
  return (
    <div className="page-body">
      <Header />
      <section className="catalog">
        <div className="catalog-wrapper container">
          <h1 className="visually-hidden">Каталог товаров</h1>
          <CatalogBreadcrumbs />
          <CatalogList />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CatalogPage;
