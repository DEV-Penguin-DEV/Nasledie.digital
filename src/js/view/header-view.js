import AbstractView from './abstract-view';
const mediaQueryMobile = window.matchMedia('(max-width: 750px)');

const headerTemplate = () => !mediaQueryMobile.matches ? `
<header class="circles-header circles-header--table">
  <nav class="circles-header__navigation navigation">
    <div class="navigation__container">
      <ul class="circles-header__view-list view-list circles-header__list navigation__item">
        <li class="view-list__item">
          <button class="view-list__button view-list__button--circle">
            <svg class="view-list__icon" width="26" height="26" viewBox="0 0 26 26" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="8.5" stroke="#808080" />
              <circle cx="13" cy="13" r="12.5" stroke="#808080" />
            </svg>
          </button>
        </li>

        <li class="view-list__item">
          <button class="view-list__button view-list__button--table">
            <svg class="view-list__icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 16H4C3.44772 16 3 15.5523 3 15V12C3 11.4477 3.44772 11 4 11H7C7.55228 11 8 11.4477 8 12V15C8 15.5523 7.55229 16 7 16Z" stroke="#808080"/>
              <path d="M7 23H4C3.44772 23 3 22.5523 3 22V19C3 18.4477 3.44772 18 4 18H7C7.55228 18 8 18.4477 8 19V22C8 22.5523 7.55229 23 7 23Z" stroke="#808080"/>
              <path d="M7 9H4C3.44772 9 3 8.55229 3 8V5C3 4.44772 3.44772 4 4 4H7C7.55228 4 8 4.44772 8 5V8C8 8.55228 7.55229 9 7 9Z" stroke="#808080"/>
              <path d="M22 16H12C11.4477 16 11 15.5523 11 15V12C11 11.4477 11.4477 11 12 11H22C22.5523 11 23 11.4477 23 12V15C23 15.5523 22.5523 16 22 16Z" stroke="#808080"/>
              <path d="M22 23H12C11.4477 23 11 22.5523 11 22V19C11 18.4477 11.4477 18 12 18H22C22.5523 18 23 18.4477 23 19V22C23 22.5523 22.5523 23 22 23Z" stroke="#808080"/>
              <path d="M22 9H12C11.4477 9 11 8.55229 11 8V5C11 4.44772 11.4477 4 12 4H22C22.5523 4 23 4.44772 23 5V8C23 8.55228 22.5523 9 22 9Z" stroke="#808080"/>
            </svg>
          </button>
        </li>
      </ul>

      <div action="#" class="circles-header__filers filters">
        <div class="circles-header__filers-container select-container">
          <button type="button" class="filters__select select"></button>
          <ul class="select-list select-list--closed">
            <li class="filters__filter option option--active">
              Все
            </li>
            <li class="filters__filter option option">
              Все2
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="navigation__container">
      <button class="circles-header__editor button--white button--white--icon navigation__item">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M20.0848 5.73218C19.6697 5.31707 18.9966 5.31707 18.5815 5.73218L6.47444 17.8393L5.91256 20.0868L8.16007 19.5249L20.2671 7.41781C20.6823 7.0027 20.6823 6.32967 20.2671 5.91456L20.0848 5.73218ZM17.0783 4.22893C18.3236 2.98359 20.3427 2.98359 21.588 4.22893L21.7704 4.4113C23.0157 5.65664 23.0157 7.67573 21.7704 8.92107L9.45514 21.2363C9.31891 21.3726 9.14822 21.4692 8.96131 21.5159L4.70946 22.5789C4.34723 22.6695 3.96405 22.5633 3.70003 22.2993C3.43601 22.0353 3.32987 21.6521 3.42043 21.2899L4.48339 17.038C4.53012 16.8511 4.62676 16.6804 4.76299 16.5442L17.0783 4.22893Z"
            fill="#B7BDCE" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M15.3914 5.91485C15.8065 5.49974 16.4796 5.49974 16.8947 5.91485L20.0836 9.10374C20.4987 9.51885 20.4987 10.1919 20.0836 10.607C19.6684 11.0221 18.9954 11.0221 18.5803 10.607L15.3914 7.41811C14.9763 7.00299 14.9763 6.32996 15.3914 5.91485Z"
            fill="#B7BDCE" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12.9551 21.5493C12.9551 20.9622 13.431 20.4863 14.018 20.4863H22.5217C23.1088 20.4863 23.5847 20.9622 23.5847 21.5493C23.5847 22.1363 23.1088 22.6123 22.5217 22.6123H14.018C13.431 22.6123 12.9551 22.1363 12.9551 21.5493Z"
            fill="#B7BDCE" />
        </svg>
      </button>

      <button class="circles-header__add-person button--green--icon add-person navigation__item">
        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="5" width="2" height="12" rx="1" transform="rotate(90 12 5)" fill="white" />
          <rect x="12" y="5" width="2" height="12" rx="1" transform="rotate(90 12 5)" fill="white" />
          <rect x="7" y="12" width="2" height="12" rx="0.999999" transform="rotate(180 7 12)" fill="white" />
          <rect x="7" y="12" width="2" height="12" rx="0.999999" transform="rotate(180 7 12)" fill="white" />
        </svg>
      </button>
    </div>
  </nav>
</header>
` : `
<div class="under-menu__top-menu top-menu">
  <button class="top-menu__button button--view button--white"><span class="visually-hidden">Изминить способ
      отображения</span></button>

  <div class="top-menu__periods-slider-container periods-slider">
    <button class="periods-slider__controler periods-slider__controler--left"><span
        class="visually-hidden">Назад</span></button>

    <ul class="periods-slider__list">
      <li class="periods-slider__item periods-slider__item--active">
        <p class="periods-slider__text">1978 - 1982</p>
      </li>
      <li class="periods-slider__item">
        <p class="periods-slider__text">2222 - 2222</p>
      </li>
      <li class="periods-slider__item">
        <p class="periods-slider__text">3333 - 3333</p>
      </li>
    </ul>

    <button class="periods-slider__controler periods-slider__controler--right"><span
        class="visually-hidden">Вперёд</span></button>
  </div>

  <button class="top-menu__button button--more button--white"><span class="visually-hidden">Больше</span></button>
</div>
`;

export default class HeaderView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return headerTemplate();
  }
}
