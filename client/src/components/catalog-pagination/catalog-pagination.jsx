import React from "react";

function CatalogPagination() {
  return (
    <ul className="catalog-pagination_list">
      <li className="catalog-pagination_list-item--active">
        <a>1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">следующая</a>
      </li>
    </ul>
  );
}

export default CatalogPagination;
