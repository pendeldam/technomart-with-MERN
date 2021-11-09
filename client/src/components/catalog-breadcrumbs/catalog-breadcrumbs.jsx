import React from "react";
import { useSelector } from "react-redux";
import { getBreadcrumbs } from "../../store/selectors/appData";
import { AppRoute } from "../../const";

function CatalogBreadcrumbs() {
  const breadcrumbs = useSelector(getBreadcrumbs);

  return (
    <ul className="catalog-breadcrumbs">
      <li>
        <a href={AppRoute.ROOT}>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 7.99999V12H6V7.99999H8V12H12V7.99999L7 3.51599L2 7.99999Z" />
            <path d="M13.831 6.365L12 4.751V0H9.99998V2.987L7.33198 0.635C7.31198 0.618 7.28898 0.612 7.26798 0.598C7.24294 0.579705 7.21614 0.56396 7.18798 0.551C7.15708 0.540195 7.12529 0.532163 7.09298 0.527C7.06198 0.521 7.03198 0.515 6.99998 0.515C6.96898 0.515 6.93898 0.521 6.90798 0.527C6.87551 0.531919 6.84366 0.5403 6.81298 0.552C6.78498 0.563 6.75998 0.581 6.73298 0.598C6.71198 0.612 6.68798 0.618 6.66898 0.635L0.170976 6.365C0.0162401 6.50291 -0.0375953 6.72187 0.0355474 6.9158C0.10869 7.10974 0.293707 7.23862 0.500976 7.24C0.622907 7.24035 0.740711 7.19586 0.831976 7.115L6.99998 1.677L13.169 7.115C13.3778 7.27913 13.6784 7.25178 13.8542 7.05265C14.0299 6.85352 14.0198 6.55183 13.831 6.365Z" />
          </svg>
        </a>
      </li>
      <li>
        <a href={`/${AppRoute.CATALOG}`}>каталог</a>
      </li>
      {breadcrumbs.map(({url, category}) => (
        <li key={url}>
          <a href={`/${url}`}>{category}</a>
        </li>
      ))}
    </ul>
  );
}

export default CatalogBreadcrumbs;
