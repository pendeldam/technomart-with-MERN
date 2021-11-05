import React from "react";

function ProductInfo() {
  return (
    <section className="catalog-product__info">
      <div className="container">
        <h2 className="visually-hidden">Краткое описание товара</h2>
        <p className="section-subtitle">пара слов о перфораторах</p>
        <p>
          Перфоратор&nbsp;&ndash;&nbsp;универсальный строительный инструмент.
          Предназначен для сверления и долбления отверстий в кирпиче, бетоне и
          камне.
          <br />
          Существуют электромеханические и пневматические перфораторы.
          Современные модели могут выполнять функции дрели, шуруповерта и
          отбойного молотка.
          <br />В ассортиментном ряду есть выбор «трехрежимников»: в одном
          устройстве будут совмещены отбойный молоток и ударная дрель.
        </p>
      </div>
    </section>
  );
}

export default ProductInfo;
