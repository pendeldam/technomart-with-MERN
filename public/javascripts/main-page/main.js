/* promo-slider */

const promoSlider = document.querySelector(`.promo-slider`);
const promoSliderNav = promoSlider.querySelector(`.promo-slider__nav`);
const promoSliderNavBtns = promoSliderNav.querySelectorAll(`button`);
const promoSliderControls = promoSlider.querySelector(`.promo-slider__controls`);
const promoSliderControlsBtns = promoSliderControls.querySelectorAll(`button`);
const slideCount = promoSlider.querySelectorAll(`.promo-slider__list-item`).length;

const disableSlide = (number) => {
  promoSlider.classList.remove(`promo-slider__slide-${number}`);

  promoSlider
    .querySelector(`.promo-slider__list-item:nth-child(${number})`)
    .classList.remove(`promo-slider__list-item--active`);

  promoSliderControls
    .querySelector(`button:nth-child(${number})`)
    .classList.remove(`promo-slider__controls--active`);
};

const enableSlide = (number) => {
  promoSlider.classList.add(`promo-slider__slide-${number}`);

  promoSlider
    .querySelector(`.promo-slider__list-item:nth-child(${number})`)
    .classList.add(`promo-slider__list-item--active`);

  promoSliderControls
    .querySelector(`button:nth-child(${number})`)
    .classList.add(`promo-slider__controls--active`);
};

const changeSlide = (evt) => {
  if (currentSlide === 1) {
    disableSlide(currentSlide);

    currentSlide = evt.target.dataset.id === `prev`
      ? currentSlide = slideCount
      : currentSlide = currentSlide + 1;

    enableSlide(currentSlide);

  } else if (currentSlide === slideCount) {
    disableSlide(currentSlide);

    currentSlide = evt.target.dataset.id === `prev`
    ? currentSlide = currentSlide - 1
      : currentSlide = 1;

    enableSlide(currentSlide);

  } else {
    disableSlide(currentSlide);

    currentSlide = evt.target.dataset.id === `prev`
      ? currentSlide = currentSlide - 1
      : currentSlide = currentSlide + 1;

    enableSlide(currentSlide);
  }
};

let currentSlide = 1;

[...promoSliderNavBtns].forEach((btn) => {
  btn.addEventListener(`click`, changeSlide);
});

[...promoSliderControlsBtns].forEach((btn) => {
  btn.addEventListener(`click`, (evt) => {
    const number = +evt.target.dataset.id;

    if (currentSlide === number) {
      return;
    } else {
      disableSlide(currentSlide);
      currentSlide = number;
      enableSlide(currentSlide);
    }
  });
});
