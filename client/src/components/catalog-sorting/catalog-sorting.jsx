import React from "react";

function CatalogSorting() {
  return (
    <section className="catalog-sorting">
      <form action="#" method="get">
        <h2>сортировка:</h2>
        <div className="catalog-sorting__types-wrapper">
          <div className="catalog-sorting__type">
            <input
              className="visually-hidden"
              type="radio"
              name="sort-type"
              id="sort-by-price"
            />
            <label htmlFor="sort-by-price">по цене</label>
          </div>
          <div className="catalog-sorting__type">
            <input
              className="visually-hidden"
              type="radio"
              name="sort-type"
              id="sort-by-type"
            />
            <label htmlFor="sort-by-type">по типу</label>
          </div>
          <div className="catalog-sorting__type">
            <input
              className="visually-hidden"
              type="radio"
              name="sort-type"
              id="sort-by-function"
            />
            <label htmlFor="sort-by-function">по функционалу</label>
          </div>
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
