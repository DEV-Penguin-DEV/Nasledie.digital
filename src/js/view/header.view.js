import AbstractView from './abstract.view.js';
const mediaQueryMobile = window.matchMedia('(max-width: 750px)');

const headerTemplate = () => !mediaQueryMobile.matches ? `
<header class="circles-header circles-header--table">
  <nav class="circles-header__navigation navigation">
    <div class="navigation__container">
      <ul class="circles-header__view-list view-list circles-header__list navigation__item">
        <li class="view-list__item">
          <button class="view-list__button view-list__button--circle">
            <svg class="view-list__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4.25" stroke="#B7BDCE" stroke-width="1.5"/>
              <circle cx="12" cy="12" r="8.25" stroke="#B7BDCE" stroke-width="1.5"/>
            </svg>
          </button>
        </li>

        <li class="view-list__item">
          <button class="view-list__button view-list__button--table">
            <svg class="view-list__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2308 4H2.76923C2.56522 4 2.36956 4.08429 2.2253 4.23431C2.08104 4.38434 2 4.58783 2 4.8V18.4C2 18.8243 2.16209 19.2313 2.4506 19.5314C2.73912 19.8314 3.13044 20 3.53846 20H20.4615C20.8696 20 21.2609 19.8314 21.5494 19.5314C21.8379 19.2313 22 18.8243 22 18.4V4.8C22 4.58783 21.919 4.38434 21.7747 4.23431C21.6304 4.08429 21.4348 4 21.2308 4ZM3.53846 10.4H7.38462V13.6H3.53846V10.4ZM8.92308 10.4H20.4615V13.6H8.92308V10.4ZM20.4615 5.6V8.8H3.53846V5.6H20.4615ZM3.53846 15.2H7.38462V18.4H3.53846V15.2ZM20.4615 18.4H8.92308V15.2H20.4615V18.4Z" fill="#B7BDCE"/>
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

      <button class="circles-header__add-person button--green--icon add-person-header navigation__item">
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

  <button class="top-menu__button top-menu__button-editor button--white button--white--icon">
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
