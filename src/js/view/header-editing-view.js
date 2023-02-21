import AbstractView from "./abstract-view";

const headerEditingTemplate = () => `
<header class="circles-header circles-header--table circles-header--editing">
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

      <form class="circles-header__filers filters filters--editing">
        <input type="text" class="filters--editing__input" placeholder="Группы персон">
      </form>
    </div>

    <h2 class="navigation__title title--green">Режим редактирования</h2>

    <div class="navigation__container">
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
`;

export default class HeaderEditingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return headerEditingTemplate();
  }
}
