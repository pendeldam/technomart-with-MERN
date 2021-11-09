import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/api-actions";
import { getIsDataLoaded } from "../../store/selectors/appState";
import { getProduct } from "../../store/selectors/appData";
import Header from "../header/header";
import Footer from "../footer/footer";
import CatalogBreadcrumbs from "../catalog-breadcrumbs/catalog-breadcrumbs";
import LoadSpinner from "../load-spinner/load-spinner";
import { CONNECTION_STATUS } from "../../const";

function ProductPage() {
  const dispatch = useDispatch();
  const { type, id } = useParams();
  const product = useSelector(getProduct);
  const isDataLoaded = useSelector(getIsDataLoaded);

  useEffect(() => {
    dispatch(fetchProductById(type, id));
  }, [dispatch]);

  if (!product || isDataLoaded === CONNECTION_STATUS.WAIT) {
    return <LoadSpinner />;
  }

  const {name} = product.content;

  return (
    <div className="page-body">
      <Header />
      <section className="catalog">
        <div className="catalog-wrapper container">
          <h1 className="visually-hidden">Каталог товаров</h1>
          <CatalogBreadcrumbs />
          <p className="section-subtitle">{name}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductPage;
