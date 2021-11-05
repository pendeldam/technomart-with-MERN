import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function PromoSlider() {
  return (
    <div className="promo-slider promo-slider__slide-1">
      <ul className="promo-slider__list">
        <li className="promo-slider__list-item promo-slider__list-item--active">
          <div className="promo-slider__heading">
            <p className="promo-slider__subtitle">перфораторы</p>
            <p className="promo-slider__slogan">Настоящие мужские игрушки</p>
          </div>
        </li>
        <li className="promo-slider__list-item">
          <div className="promo-slider__heading">
            <p className="promo-slider__subtitle">дрели</p>
            <p className="promo-slider__slogan">Соседям на радость!</p>
          </div>
        </li>
      </ul>
      <div className="promo-slider__nav">
        <button
          className="promo-slider__prev-btn"
          type="button"
          data-id="prev"
          aria-label="предыдущий слайд"
        ></button>
        <button
          className="promo-slider__next-btn"
          type="button"
          data-id="next"
          aria-label="следующий слайд"
        ></button>
      </div>
      <Link className="site-link" to={AppRoute.CATALOG}>
        открыть каталог
      </Link>

      <div className="promo-slider__controls">
        <button
          className="promo-slider__controls--active"
          type="button"
          data-id="1"
          aria-label="первый слайд"
        ></button>
        <button type="button" data-id="2" aria-label="второй слайд"></button>
      </div>
    </div>
  );
}

export default PromoSlider;
