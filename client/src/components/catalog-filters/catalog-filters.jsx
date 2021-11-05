import React from "react";

function CatalogFilters() {
  return (
    <section className="catalog-filters">
      <h2>фильтр:</h2>
      <form
        className="catalog-filters__form"
        action="https://echo.htmlacademy.ru"
        method="GET"
      >
        <fieldset className="catalog-filters__price">
          <legend>цена:</legend>
          <div className="catalog-filters__price-wrapper">
            <div className="catalog-filters__price-controls">
              <div className="catalog-filters__price-scale">
                <div
                  className="catalog-filters__price-bar"
                  style={{width: '80%', marginLeft: '0%'}}
                ></div>
              </div>
              <div
                className="catalog-filters__price-toggle toggle-min"
                tabIndex="0"
                style={{left: '8%'}}
              ></div>
              <div
                className="catalog-filters__price-toggle toggle-max"
                tabIndex="0"
                style={{left: '74%'}}
              ></div>
            </div>
            <div className="catalog-filters__price-limit">
              <label
                className="visually-hidden"
                htmlFor="filter-price-limit-from"
              >
                минимальная цена
              </label>
              <input
                type="text"
                name="price-limit"
                id="filter-price-limit-from"
                value="0"
              />
              <span>&ndash;</span>
              <label
                className="visually-hidden"
                htmlFor="filter-price-limit-to"
              >
                максимальная цена
              </label>
              <input
                type="text"
                name="price-limit"
                id="filter-price-limit-to"
                value="30000"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filters__vendors">
          <legend>производители:</legend>
          <ul className="catalog-filters__list">
            <li>
              <input
                className="filter-input-checkbox visually-hidden"
                type="checkbox"
                name="bosch"
                id="filter-bosch"
              />
              <label htmlFor="filter-bosch">bosch</label>
            </li>
            <li>
              <input
                className="filter-input-checkbox visually-hidden"
                type="checkbox"
                name="interskol"
                id="filter-interskol"
              />
              <label htmlFor="filter-interskol">интерскол</label>
            </li>
            <li>
              <input
                className="filter-input-checkbox visually-hidden"
                type="checkbox"
                name="makita"
                id="filter-makita"
              />
              <label htmlFor="filter-makita">makita</label>
            </li>
            <li>
              <input
                className="filter-input-checkbox visually-hidden"
                type="checkbox"
                name="dewalt"
                id="filter-dewalt"
              />
              <label htmlFor="filter-dewalt">dewalt</label>
            </li>
            <li>
              <input
                className="filter-input-checkbox visually-hidden"
                type="checkbox"
                name="hitachi"
                id="filter-hitachi"
              />
              <label htmlFor="filter-hitachi">hitachi</label>
            </li>
          </ul>
        </fieldset>
        <fieldset className="catalog-filters__power-supply">
          <legend>питание:</legend>
          <ul className="catalog-filters__list">
            <li>
              <input
                className="filter-input-radio visually-hidden"
                type="radio"
                name="power-supply-type"
                value="battery"
                id="filter-battery"
              />
              <label htmlFor="filter-battery">аккумуляторные</label>
            </li>
            <li>
              <input
                className="filter-input-radio visually-hidden"
                type="radio"
                name="power-supply-type"
                value="main-supply"
                id="filter-main-supply"
              />
              <label htmlFor="filter-main-supply">сетевые</label>
            </li>
          </ul>
        </fieldset>
        <button className="catalog-filters__submit-btn" type="submit">
          показать
        </button>
      </form>
    </section>
  );
}

export default CatalogFilters;
