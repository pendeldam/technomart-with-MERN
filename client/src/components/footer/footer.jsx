import React from "react";

function Footer() {
  const navLinks = [
    { name: "Компания", url: "#" },
    { name: "Новости", url: "#" },
    { name: "Каталог", url: "/catalog" },
    { name: "Доставка", url: "#" },
    { name: "Контакты", url: "#" },
    { name: "Материалы", url: "#" },
    { name: "Техника", url: "#" },
    { name: "Инструмент", url: "#" },
    { name: "Спецпредложения", url: "#" },
  ];

  const socialLinks = [
    { name: "vk", url: "#" },
    { name: "fb", url: "#" },
    { name: "instagram", url: "#" },
  ];

  return (
    <footer className="main-footer">
      <div className="main-footer__top">
        <div className="main-footer__top-wrapper container">
          <div className="main-footer__address">
            <h2 className="visually-hidden">Наш адрес</h2>
            <a
              className="site-logo"
              href="/"
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
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a className="nav-link" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="main-footer__nav-list">
              {navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a className="nav-link" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
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
            {socialLinks.map((link) => (
              <a
                className={`social-link-${link.name}`}
                href={link.url}
                aria-label={link.name}
              />
            ))}
          </div>
          <div className="main-footer__support-contacts">
            <p>
              Обратная&nbsp;связь:
              <br />
              <a
                className="host-mail"
                href="mailto:mail@htmlacademy.ru"
                aria-label="электронная почта"
              >
                mail@htmlacademy.ru
              </a>
            </p>
            <p>
              Разработано&nbsp;&mdash;
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
