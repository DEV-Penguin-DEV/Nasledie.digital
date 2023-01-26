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

      <form class="circles-header__filers filters filters--editing">
        <input type="text" class="filters--editing__input" placeholder="Группы персон">
      </form>
    </div>

    <h2 class="navigation__title title--green">Режим редактирования</h2>

    <div class="navigation__container">
      <button class="circles-header__undo button--white button--undo button--white--icon navigation__item">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.4864 6.4864C8.87693 6.09588 8.87693 5.46271 8.4864 5.07219C8.09588 4.68167 7.46271 4.68167 7.07219 5.07219L8.4864 6.4864ZM4.7793 8.7793L4.07219 8.07219C3.68167 8.46271 3.68167 9.09588 4.07219 9.4864L4.7793 8.7793ZM7.07219 12.4864C7.46271 12.8769 8.09588 12.8769 8.4864 12.4864C8.87693 12.0959 8.87693 11.4627 8.4864 11.0722L7.07219 12.4864ZM4.7793 15.7793C4.22701 15.7793 3.7793 16.227 3.7793 16.7793C3.7793 17.3316 4.22701 17.7793 4.7793 17.7793V15.7793ZM7.07219 5.07219L4.07219 8.07219L5.4864 9.4864L8.4864 6.4864L7.07219 5.07219ZM4.07219 9.4864L7.07219 12.4864L8.4864 11.0722L5.4864 8.07219L4.07219 9.4864ZM4.7793 9.7793H15.7793V7.7793H4.7793V9.7793ZM18.7793 12.7793C18.7793 14.4362 17.4362 15.7793 15.7793 15.7793V17.7793C18.5407 17.7793 20.7793 15.5407 20.7793 12.7793H18.7793ZM15.7793 9.7793C17.4362 9.7793 18.7793 11.1224 18.7793 12.7793H20.7793C20.7793 10.0179 18.5407 7.7793 15.7793 7.7793V9.7793ZM4.7793 17.7793H15.7793V15.7793H4.7793V17.7793Z" fill="#B7BDCE"/>
        </svg>
      </button>

      <button class="circles-header__cansel button--white button--cansel button--white--icon navigation__item">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.39052 8.39052C8.91122 7.86983 9.75544 7.86983 10.2761 8.39052L16 14.1144L21.7239 8.39052C22.2446 7.86983 23.0888 7.86983 23.6095 8.39052C24.1302 8.91122 24.1302 9.75544 23.6095 10.2761L17.8856 16L23.6095 21.7239C24.1302 22.2446 24.1302 23.0888 23.6095 23.6095C23.0888 24.1302 22.2446 24.1302 21.7239 23.6095L16 17.8856L10.2761 23.6095C9.75544 24.1302 8.91122 24.1302 8.39052 23.6095C7.86983 23.0888 7.86983 22.2446 8.39052 21.7239L14.1144 16L8.39052 10.2761C7.86983 9.75544 7.86983 8.91122 8.39052 8.39052Z"
            fill="#B7BDCE" />
        </svg>
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
