import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { _id, name, price, image, isNewOffer } = product;
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
      <img
        className="catalog-product-card__image"
        src={`img/catalog/${image}.jpg`}
        width="184"
        height="164"
        alt={name}
      />
      <h3>{name}</h3>
      <p>{price + 3500}&nbsp;P.</p>
      <Link
        className="catalog-link"
        to={_id}
        aria-label={`на страницу ${name}`}
      >
        {price}&nbsp;P.
      </Link>
    </li>
  );
}

export default ProductCard;
