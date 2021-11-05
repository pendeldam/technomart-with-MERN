import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function ProductCard({ card }) {
  const { id, type, name, oldPrice, newPrice, img, isNewOffer } = card;
  const [cardPopup, setCardPopup] = useState(false);

  return (
    <li
      className={
        isNewOffer
          ? "catalog-product-card--new catalog-product-card"
          : "catalog-product-card"
      }
      onMouseEnter={() => setCardPopup(true)}
      onMouseLeave={() => setCardPopup(false)}
    >
      {cardPopup && (
        <div className="catalog-product-card__popup">
          <button className="catalog-product-card__buy-btn">
            <span>купить</span>
          </button>
          <button className="catalog-product-card__bookmark-btn">
            в закладки
          </button>
        </div>
      )}
      <img src={img} width="184" height="164" alt={name} />
      <h3>
        {type}
        {name}
      </h3>
      <p>{oldPrice}&nbsp;P.</p>
      <Link
        className="catalog-link"
        to={`${AppRoute.CATALOG}/${id}`}
        aria-label={`на страницу ${name}`}
      >
        {newPrice}&nbsp;P.
      </Link>
    </li>
  );
}

export default ProductCard;
