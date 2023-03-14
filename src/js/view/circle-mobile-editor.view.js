import AbstractView from './abstract.view.js';
import { PATH_BASE } from '../const.js';

const circleMobileEditorTemplate = () => (`
<div>
<style>
.main-content {
  padding: 0;
}
</style>
<header class="content-header">
  <div class="content-header__container container">
    <img src="${PATH_BASE}/logo-mobile.svg" alt="Nasledie.digital капсулы времени." class="content-header__logo" />

    <button class="content-header__mobile-menu-button">
      <span class="visually-hidden">Открыть меню</span>
    </button>
  </div>
</header>

<main class="main-content">
  <section class="under-menu container">
    <div class="under-menu__top-menu top-menu">
      <h2 class="top-menu__title title--green">
        Режим <br />редактирования
      </h2>

      <button class="top-menu__cansel-button button--white button--white--icon button--cansel">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.39052 8.39052C8.91122 7.86983 9.75544 7.86983 10.2761 8.39052L16 14.1144L21.7239 8.39052C22.2446 7.86983 23.0888 7.86983 23.6095 8.39052C24.1302 8.91122 24.1302 9.75544 23.6095 10.2761L17.8856 16L23.6095 21.7239C24.1302 22.2446 24.1302 23.0888 23.6095 23.6095C23.0888 24.1302 22.2446 24.1302 21.7239 23.6095L16 17.8856L10.2761 23.6095C9.75544 24.1302 8.91122 24.1302 8.39052 23.6095C7.86983 23.0888 7.86983 22.2446 8.39052 21.7239L14.1144 16L8.39052 10.2761C7.86983 9.75544 7.86983 8.91122 8.39052 8.39052Z"
            fill="#B7BDCE" />
        </svg>
      </button>

      <button class="top-menu__save button--green">Сохранить</button>
    </div>
    <div class="under-menu__down-menu down-menu">
      <button class="down-menu__button button--default-mobile-button">
        Редактировать периоды
      </button>
      <button class="down-menu__button button--default-mobile-button">
        Редактировать группы персон
      </button>
    </div>

    <div class="under-menu__persons persons">
      <h2 class="persons__title">Персоны</h2>

      <p class="persons__text">
        Кликните на персону для изменения её положения на кругах общения
      </p>

      <form action="#" class="persons__search-form">
        <input type="text" class="persons__search-input" placeholder="Имя" />
      </form>

      <ul class="persons__list">
        <li class="persons__item person">
          <img src="${PATH_BASE}/avatar.png" width="60" height="60" alt="" class="person__avatar" />
          <p class="person__text">Юрий Иванович Иванов</p>
        </li>

        <li class="persons__item person">
          <img src="${PATH_BASE}/avatar.png" width="60" height="60" alt="" class="person__avatar" />
          <p class="person__text">Юрий Иванович Иванов</p>
        </li>

        <li class="persons__item person">
          <img src="${PATH_BASE}/avatar.png" width="60" height="60" alt="" class="person__avatar" />
          <p class="person__text">Юрий Иванович Иванов</p>
        </li>

        <li class="persons__item person">
          <img src="${PATH_BASE}/avatar.png" width="60" height="60" alt="" class="person__avatar" />
          <p class="person__text">Юрий Иванович Иванов</p>
        </li>
      </ul>
    </div>
  </section>

  <div class="editing-modal editing-modal--open">
    <div class="editing-modal__title-container">
      <h2 class="editing-modal__title">Редактирование</h2>
      <button class="button--closed-button">
        <span class="visually-hidden">Закрыть</span>
      </button>
    </div>

    <div class="editing-modal__content-container">
      <div class="editing-modal__person-info">
        <img src="${PATH_BASE}/avatar.png" alt="" width="60" height="60" class="editing-modal__avatar" />
        <p class="editing-modal__person-description">
          Юрий Иванович Иванов
        </p>
      </div>

      <form action="#" class="editing-modal__form">
        <div class="editing-modal__input-container">
          <input type="checkbox" name="1956-1990" id="period-1" class="editing-modal__input" />
          <label class="editing-modal__label" for="period-1">
            <p class="editing-modal__input-title">1956-1990</p>
            <p class="editing-modal__input-description">
              Ленинград / Учеба / Спорт
            </p>
          </label>
        </div>

        <div class="editing-modal__input-js-container"></div>

        <div class="editing-modal__input-container">
          <input type="checkbox" name="1996-2018" id="period-2" class="editing-modal__input" />
          <label class="editing-modal__label" for="period-2">
            <p class="editing-modal__input-title">1996-2018</p>
            <p class="editing-modal__input-description">
              Путешествия / Карьера / Семья
            </p>
          </label>
        </div>

        <div class="editing-modal__input-js-container"></div>

        <div class="editing-modal__input-container">
          <input type="checkbox" name="1996-2018" id="period-3" class="editing-modal__input" />
          <label class="editing-modal__label" for="period-3">
            <p class="editing-modal__input-title">1996-2018</p>
            <p class="editing-modal__input-description">
              Путешествия / Карьера / Семья
            </p>
          </label>
        </div>

        <div class="editing-modal__input-js-container"></div>

        <button class="editing-modal__submit button--green" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  </div>
</main>
</div>
`);

export default class CircleMobileEditorView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return circleMobileEditorTemplate();
  }
}
