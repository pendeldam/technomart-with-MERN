import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSortType, getSortDirection } from "../../store/selectors/appData";
import { setSortType, setSortDirection } from "../../store/actions";
import { SortTypes, SortLabels } from "../../const";

function CatalogSorting() {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);

  return (
    <section className="catalog-sorting">
      <form action="#" method="get">
        <h2>сортировка:</h2>
        <div className="catalog-sorting__types-wrapper">
          {Object.entries(SortLabels).map(([key, value]) => (
            <div className="catalog-sorting__type">
              <input
                className="visually-hidden"
                type="radio"
                name="sort-type"
                id={`sort-by-${key}`}
                onChange={() =>
                  dispatch(setSortType(SortTypes[key.toUpperCase()]))
                }
                checked={key.toUpperCase() === sortType}
              />
              <label htmlFor={`sort-by-${key}`}>{value}</label>
            </div>
          ))}
        </div>
        <div className="catalog-sorting__direction">
          <input
            className="visually-hidden"
            id="sort-direction-up"
            type="radio"
            name="sort-direction"
          />
          <label htmlFor="sort-direction-up">
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0L11 10L0 10" />
            </svg>
          </label>
          <input
            className="visually-hidden"
            id="sort-direction-down"
            type="radio"
            name="sort-direction"
          />
          <label htmlFor="sort-direction-down">
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 10L0 0H11" />
            </svg>
          </label>
        </div>
      </form>
    </section>
  );
}

export default CatalogSorting;
