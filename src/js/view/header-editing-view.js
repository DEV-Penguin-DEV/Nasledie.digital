import AbstractView from './abstract-view';

const headerEditingTemplate = () => (`
<header class="circles-header circles-header--table circles-header--editing">
  <nav class="circles-header__navigation navigation">
    <div class="navigation__container">
      <ul class="circles-header__view-list view-list circles-header__list navigation__item">
        <li class="view-list__item">
          <button class="view-list__button view-list__button--circle">
            <svg class="view-list__icon" width="26" height="26" viewBox="0 0 26 26" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="8.5" stroke="#548677" />
              <circle cx="13" cy="13" r="12.5" stroke="#548677" />
            </svg>
          </button>
        </li>

        <li class="view-list__item">
          <button class="view-list__button view-list__button--table">
            <svg class="view-list__icon" width="26" height="26" viewBox="0 0 26 26" fill="none"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="26" height="26" fill="url(#pattern01)" fill-opacity="0.5" />
              <defs>
                <pattern id="pattern01" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_591_190712" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_591_190712" width="512" height="512"
                  xlink:href="data:image/png;base64,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" />
              </defs>
            </svg>
          </button>
        </li>
      </ul>

      <form class="circles-header__filers filters filters--editing">
        <input type="text" class="filters--editing__input" placeholder="Группы персон">
      </form>
    </div>

    <h2 class="navigation__title title--green">Режим редактирования</h2>

    <div class="navigation__container">
      <button class="circles-header__undo button--white button--undo navigation__item">
        <span class="visually-hidden">Отменить одно действие</span>
      </button>

      <button class="circles-header__cansel button--white button--cansel navigation__item">
        <span class="visually-hidden">Отменить все изминения</span>
      </button>

      <button class="circles-header__save button--green navigation__item">
        Сохранить
      </button>
    </div>
  </nav>
</header>
`);

export default class HeaderEditingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return headerEditingTemplate();
  }
}
