import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsDataLoaded } from "../../store/selectors/appState";
import { getSections } from "../../store/selectors/appData";
import { fetchCatalogSections } from "../../store/api-actions";
import LoadSpinner from "../load-spinner/load-spinner";
import { CONNECTION_STATUS } from "../../const";

function CatalogList() {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(getIsDataLoaded);
  const sections = useSelector(getSections);

  useEffect(() => dispatch(fetchCatalogSections()), []);

  if (isDataLoaded === CONNECTION_STATUS.WAIT) {
    return <LoadSpinner />;
  }

  return (
    <ul className="catalog-list">
      {sections.map((item) => (
        <li key={item._id} className="catalog-list__item">
          <a href={`/catalog/${item.type}`}>
            <img
              className="catalog-list__image"
              src={`img/catalog/${item.type}.jpg`}
              alt={item.type}
            />
          </a>
          <span>{item.type}</span>
        </li>
      ))}
    </ul>
  );
}

export default CatalogList;
