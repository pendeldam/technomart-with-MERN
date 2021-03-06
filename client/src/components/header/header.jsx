import React from "react";

function Header() {
  const navLinks = [
    { name: "Главная", url: "/" },
    { name: "Компания", url: "#" },
    { name: "Каталог", url: "/catalog" },
    { name: "Новости", url: "#" },
    { name: "Спецпредложения", url: "#" },
    { name: "Доставка", url: "#" },
    { name: "Контакты", url: "#" },
  ];

  return (
    <header className="main-header">
      <div className="main-header__top-wrapper">
        <div className="main-header__top container">
          <a
            className="site-logo"
            href="/"
            aria-label="на главную страницу"
          ></a>
          <form className="main-header__search-form" action="#" method="POST">
            <input
              className="main-header__search"
              id="header-search-input"
              type="search"
              placeholder="Поиск:"
            />
            <label htmlFor="header-search-input" aria-label="поиск по сайту">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.458 12.044L17 15.586L15.586 17L12.044 13.458C10.782 14.421 9.21 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15.0001 9.14309 14.4581 10.7403 13.458 12.044ZM7.5 2C4.467 2 2 4.467 2 7.5C2.00331 10.5362 4.4638 12.9967 7.5 13C10.532 13 13 10.532 13 7.5C13 4.467 10.532 2 7.5 2Z"
                />
              </svg>
            </label>
          </form>
          <a className="main-header__bookmarks" href="#">
            Закладки:&nbsp;<span>0</span>
          </a>
          <a className="main-header__cart" href="#">
            Корзина:&nbsp;<span>0</span>
          </a>
          <a className="main-header__order" href="#">
            Оформить заказ
          </a>
        </div>
      </div>
      <div className="main-header__inner container">
        <div className="main-header__desc">
          <h2 className="visually-hidden">Краткое описание</h2>
          <p>
            Интернет-магазин строительных материалов
            <br /> и инструментов для ремонта
          </p>
        </div>
        <div className="main-header__address">
          <h2 className="visually-hidden">Наш адрес</h2>
          <a
            className="phone-link"
            href="tel:78125550555"
            aria-label="наш телефон"
          >
            +7&nbsp;(812)&nbsp;555-05-55
          </a>
          <p>
            г.&nbsp;Санкт-Петербург,&nbsp;ул.&nbsp;Б.&nbsp;Конюшенная,&nbsp;д.&nbsp;19/8
          </p>
        </div>
        <div className="main-header__auth">
          <h2 className="visually-hidden">Личный кабинет</h2>
          <a className="main-header__login-btn" href="#">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.1667 8.5L5.71429 0V6H0V11H5.71429V17L14.1667 8.5Z" />
              <path d="M16.1771 15.01H11.3895V17H16.1771C18.2514 17 19.0381 15.19 19.0619 13.974V3.028C19.0381 1.811 18.2514 0 16.1771 0H11.3895V1.99H16.1771C16.9762 1.99 17.1219 2.671 17.1391 3.047V13.951C17.1229 14.327 16.9762 15.01 16.1771 15.01Z" />
            </svg>
            Войти
          </a>
          <a className="main-header__register-btn" href="#">
            Регистрация
          </a>
        </div>
        <nav className="main-header__nav">
          <ul className="main-header__nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a className="nav-link" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
