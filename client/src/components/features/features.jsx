import React from "react";
import PromoSlider from "../promo-slider/promo-slider";

function Features() {
  const featuresList = [
    { name: "материалы", label: "на любой вкус", link: "blank.hmtl" },
    { name: "инструмент", label: "на все случаи", link: "blank.hmtl" },
    { name: "техника", label: "для стройки", link: "blank.hmtl" },
    { name: "скидки 50 %", label: "на 350 товаров", link: "blank.hmtl" },
    { name: "доставка", label: "бесплатно", link: "blank.hmtl" },
  ];

  return (
    <section className="features container">
      <h2 className="visually-hidden">Наши преимущества</h2>
      <div className="features-list">
        {featuresList.map(({ name, label, link }) => (
          <div key={name} className="features-list__item">
            <p>{name}</p>
            <a className="site-link features-link" href={link}>
              {label}
            </a>
          </div>
        ))}

        <PromoSlider />
      </div>
    </section>
  );
}
export default Features;
