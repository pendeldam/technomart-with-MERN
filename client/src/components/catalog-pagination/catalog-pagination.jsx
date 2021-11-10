import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { usePagination, DOTS } from "../../hooks/usePagination/usePagination";
import { setProductListPage } from "../../store/actions";
import {
  getProductListPage,
  getProductListSize,
  getProductsCount,
} from "../../store/selectors/appData";

function CatalogPagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector(getProductListPage);
  const currentSize = useSelector(getProductListSize);
  const productsCount = useSelector(getProductsCount);

  const paginationRange = usePagination({
    productsCount,
    currentSize,
    currentPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNextPageClick = () => dispatch(setProductListPage(currentPage + 1));
  const onPrevPageClick = () => dispatch(setProductListPage(currentPage - 1));

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="catalog-pagination__list">
      <li className="catalog-pagination__item">
        <a
          onClick={onPrevPageClick}
          className={classnames("catalog-pagination__link", {
            "catalog-pagination__link_disabled": currentPage === 1,
          })}
        >
          &#60;
        </a>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li>&#8230;</li>;
        }

        return (
          <li key={pageNumber} className="catalog-pagination__item">
            <a
              onClick={() => dispatch(setProductListPage(pageNumber))}
              className={classnames("catalog-pagination__link", {
                "catalog-pagination__link_active":
                  pageNumber === currentPage,
              })}
            >
              {pageNumber}
            </a>
          </li>
        );
      })}
      <li className="catalog-pagination__item">
        <a
          onClick={onNextPageClick}
          className={classnames("catalog-pagination__link", {
            "catalog-pagination__link_disabled": currentPage === lastPage,
          })}
        >
          &#62;
        </a>
      </li>
    </ul>
  );
}

export default CatalogPagination;
