import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSortType, getSortDirection } from "../../store/selectors/appData";
import { setSortType, setSortDirection } from "../../store/actions";
import { SortTypes, SortLabels, SortDirection } from "../../const";

function CatalogSorting() {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const sortDirection = useSelector(getSortDirection);

  return (
    <section className="catalog-sorting">
      <form action="#" method="get">
        <h2>сортировка:</h2>
        <div className="catalog-sorting__types-wrapper">
          {Object.entries(SortLabels).map(([key, value]) => (
            <div key={key} className="catalog-sorting__type">
              <input
                className="visually-hidden"
                type="radio"
                name="sort-type"
                id={`sort-by-${key}`}
                checked={key.toUpperCase() === sortType}
                onChange={() =>
                  dispatch(setSortType(SortTypes[key.toUpperCase()]))
                }
              />
              <label htmlFor={`sort-by-${key}`}>{value}</label>
            </div>
          ))}
        </div>
        <div className="catalog-sorting__direction">
          {Object.values(SortDirection).map((value) => (
            <div key={value} className="catalog-sorting__direction-toggle">
              <input
                className="visually-hidden"
                id={`sort-direction-${value.toLocaleLowerCase()}`}
                type="radio"
                name="sort-direction"
                checked={value === sortDirection}
                onChange={() => dispatch(setSortDirection(value))}
              />
              <label htmlFor={`sort-direction-${value.toLocaleLowerCase()}`}>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 0L11 10L0 10" />
                </svg>
              </label>
            </div>
          ))}
        </div>
      </form>
    </section>
  );
}

export default CatalogSorting;
