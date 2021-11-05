import React from "react";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__top">
        <div className="main-footer__top-wrapper container">
          <div className="main-footer__address">
            <h2 className="visually-hidden">Наш адрес</h2>
            <a
              className="site-logo"
              href="index.html"
              aria-label="на главную страницу"
            ></a>
            <p>
              г.&nbsp;Санкт-Петербург, ул.&nbsp;Б.&nbsp;Конюшенная, д.&nbsp;19/8
              <br />
              <a
                className="phone-link"
                href="tel:78125550555"
                aria-label="наш телефон"
              >
                +7&nbsp;(812)&nbsp;555-05-55
              </a>
            </p>
          </div>
          <nav className="main-footer__nav">
            <h2 className="visually-hidden">Карта сайта</h2>
            <ul className="main-footer__nav-list">
              <li>
                <a className="nav-link" href="blank.html">
                  Компания
                </a>
              </li>
              <li>
                <a className="nav-link" href="blank.html">
                  Новости
                </a>
              </li>
              <li>
                <a className="nav-link" href="catalog.html">
                  Каталог
                </a>
              </li>
              <li>
                <a className="nav-link" href="blank.html">
                  Доставка
                </a>
              </li>
              <li>
                <a className="nav-link" href="blank.html">
                  Контакты
                </a>
              </li>
            </ul>
            <ul className="main-footer__nav-list">
              <li>
                <a className="nav-link" href="blank.html">
                  Материалы
                </a>
              </li>
              <li>
                <a className="nav-link" href="blank.html">
                  Техника
                </a>
              </li>
              <li>
                <a className="nav-link" href="blank.html">
                  Инструмент
                </a>
              </li>
              <li>
                <a className="nav-link" href="blank.html">
                  Спецпредложения
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="main-footer__bottom">
        <div className="main-footer__bottom-wrapper container">
          <div className="main-footer__copyright">
            <p>&copy;&nbsp;2010&ndash;2019 Компания &laquo;Техномарт&raquo;</p>
            <p>Все права защищены</p>
          </div>
          <div className="main-footer__social-links">
            <h2 className="visually-hidden">Мы в Интернете</h2>
            <a
              className="social-link-vk"
              href="#"
              aria-label="мы вконтакте"
            ></a>
            <a
              className="social-link-fb"
              href="#"
              aria-label="мы в facebook"
            ></a>
            <a
              className="social-link-insta"
              href="#"
              aria-label="мы в instagram"
            ></a>
          </div>
          <div className="main-footer__support-contacts">
            <p>
              Обратная связь:
              <a
                className="host-mail"
                href="mailto:mail@htmlacademy.ru"
                aria-label="электронная почта"
              >
                mail@htmlacademy.ru
              </a>
            </p>
            <p>
              Разработано &mdash;
              <a
                className="dev-site"
                href="https://htmlacademy.ru/intensive/htmlcss"
                aria-label="сайт разработчика"
              >
                htmlacademy.ru
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
