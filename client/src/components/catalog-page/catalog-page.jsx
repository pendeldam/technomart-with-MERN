import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIsDataLoaded } from "../../store/selectors/appState";
import { getSections } from "../../store/selectors/appData";
import { fetchCatalogSections } from "../../store/api-actions";
import Header from "../header/header";
import CatalogBreadcrumbs from "../catalog-breadcrumbs/catalog-breadcrumbs";
import Footer from "../footer/footer";
import LoadSpinner from "../load-spinner/load-spinner";
import { CONNECTION_STATUS } from "../../const";

function CatalogPage() {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(getIsDataLoaded);
  const sections = useSelector(getSections);

  useEffect(() => dispatch(fetchCatalogSections()), []);

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
          <ul>
            {sections.map((it) => (
              <li key={it._id}>
                <Link to={it.type}>{it.type}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CatalogPage;
