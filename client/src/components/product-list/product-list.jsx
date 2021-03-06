import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByType } from "../../store/api-actions";
import {
  getSortType,
  getSortDirection,
  getSortedProducts,
  getProductListPage,
  getProductListSize
} from "../../store/selectors/appData";
import { getIsDataLoaded } from "../../store/selectors/appState";
import Header from "../header/header";
import Footer from "../footer/footer";
import CatalogBreadcrumbs from "../catalog-breadcrumbs/catalog-breadcrumbs";
import CatalogFilters from "../catalog-filters/catalog-filters";
import CatalogSorting from "../catalog-sorting/catalog-sorting";
import CatalogPagination from "../catalog-pagination/catalog-pagination";
import ProductCard from "../product-card/product-card";
import LoadSpinner from "../load-spinner/load-spinner";
import { CONNECTION_STATUS } from "../../const";

function ProductList() {
  const dispatch = useDispatch();
  const { type } = useParams();
  const isDataLoaded = useSelector(getIsDataLoaded);
  const currentPage = useSelector(getProductListPage);
  const currentSize = useSelector(getProductListSize);
  const sortType = useSelector(getSortType);
  const sortDirection = useSelector(getSortDirection);
  const sortedProducts = useSelector(getSortedProducts);

  const currentList = useMemo(() => {
    const firstIndexList = (currentPage - 1) * currentSize;
    const lastIndexList = firstIndexList + currentSize;

    return sortedProducts.slice(firstIndexList, lastIndexList);
  }, [currentPage, sortType, sortDirection, sortedProducts]);

  useEffect(() => dispatch(fetchProductsByType(type)), [dispatch]);

  if (isDataLoaded === CONNECTION_STATUS.WAIT) {
    return <LoadSpinner />;
  }

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
                {currentList.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </ul>
              <CatalogPagination />
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductList;
