import { SortTypes, SortDirection } from "./const";

export function setCapitalLetter(str) {
  return str.replace(str[0], str[0].toUpperCase());
}

export function sortProducts(type, direction, products) {
  switch (type) {
    case SortTypes.PRICE:
      return direction === SortDirection.DESCEND
        ? products.slice().sort((a, b) => b.price - a.price)
        : products.slice().sort((a, b) => a.price - b.price);
    case SortTypes.RATING:
      return direction === SortDirection.DESCEND
        ? products.slice().sort((a, b) => b.rating - a.rating)
        : products.slice().sort((a, b) => a.rating - b.rating);
  }
}
