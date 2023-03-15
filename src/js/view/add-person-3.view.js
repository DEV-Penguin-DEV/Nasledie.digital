import AbstractView from './abstract.view.js';

const addPerson3Template = () => (`
<div class="modal add-person add-person--step-3">
  <div class="add-person__top-content modal__top-content">
    <button class="person-group-edit__button modal__back-button button button--back-button"><span
        class="visually-hidden">Вернуться
        назад</span></button>
    <p class="add-person__title modal__title">Добавление персоны</p>
    <button class="add-person__button button button--closed-button modal__closed-button"><span
        class="visually-hidden">Закрыть</span></button>
  </div>

  <p class="add-person__block-title">Добавить человека в другие периоды жизни?</p>

  <div class="modal__main-content add-person__main-content">
    <form action="#" class="add-person__form add-person--step-3__form modal__form" method="post">

      <!-- top part -->
      <div class="add-person__part add-person__part--top">
        <ul class="add-person__all-periods-list">
          <li class="add-person__all-periods-item">
            <div class="add-person__all-periods__input-container">
              <input type="checkbox" name="isYouth" id="period-1" class="add-person__all-periods__input" />
              <label class="add-person__all-periods__label" for="period-1">
                Юность
              </label>
            </div>

            <div class="add-person__all-periods__select-container">
              <div action="#"
                class="add-person__all-periods__filers add-person__all-periods__filers--unchecked filters">
                <div class="add-person__all-periods__filers-container select-container">
                  <button type="button" class="filters__select select">
                  </button>
                  <ul class="select-list select-list--closed">
                    <li class="filters__filter option option--active">
                      1 круг общения
                    </li>
                    <li class="filters__filter option option">
                      2 круг общения
                    </li>
                    <li class="filters__filter option option--active">
                      3 круг общения
                    </li>
                    <li class="filters__filter option option">
                      4 круг общения
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="add-person__all-periods-item">
            <div class="add-person__all-periods__input-container">
              <input type="checkbox" name="isMaturity" id="period-2" class="add-person__all-periods__input" />
              <label class="add-person__all-periods__label" for="period-2">
                Зрелость
              </label>
            </div>

            <div class="add-person__all-periods__select-container">
              <div action="#"
                class="add-person__all-periods__filers add-person__all-periods__filers--unchecked filters">
                <div class="add-person__all-periods__filers-container select-container">
                  <button type="button" class="filters__select select">
                  </button>
                  <ul class="select-list select-list--closed">
                    <li class="filters__filter option option--active">
                      1 круг общения
                    </li>
                    <li class="filters__filter option option">
                      2 круг общения
                    </li>
                    <li class="filters__filter option option--active">
                      3 круг общения
                    </li>
                    <li class="filters__filter option option">
                      4 круг общения
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Add person left part -->
      <div class="add-person__part add-person__part--left">
        <!-- Add person steps -->
        <ul class="add-person__steps-list">
          <li class="add-person__steps-item add-person__steps-item--active">1</li>
          <li class="add-person__steps-item add-person__steps-item--active">2</li>
          <li class="add-person__steps-item add-person__steps-item--active">3</li>
          <li class="add-person__steps-item add-person__steps-item--finish">
            <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.2166 14.1855C16.9923 14.5484 16.5962 14.7692 16.1696 14.7692L2.63116 14.7692L2.63116 23.3846C2.63116 24.0643 2.08012 24.6154 1.40039 24.6154C0.720652 24.6154 0.169619 24.0643 0.169619 23.3846L0.169619 1.23077C0.169619 0.551033 0.720652 -7.29095e-07 1.40039 -6.99382e-07C2.08012 -6.6967e-07 2.63116 0.551033 2.63116 1.23077L2.63116 2.46154L16.1696 2.46154C16.5962 2.46154 16.9923 2.6824 17.2166 3.04525C17.4408 3.4081 17.4612 3.8612 17.2705 4.24272L15.0841 8.61538L17.2705 12.988C17.4612 13.3696 17.4408 13.8227 17.2166 14.1855ZM2.63116 4.92308L2.63116 12.3077L14.1782 12.3077L12.6072 9.1658C12.434 8.8193 12.434 8.41146 12.6072 8.06497L14.1782 4.92308L2.63116 4.92308Z"
                fill="#326E5B" />
            </svg>
          </li>
        </ul>
      </div>

      <!-- Add person right part -->
      <div class="add-person__part add-person__part--right">
        <button type="submit"
          class="add-person__button-next add-person__button-next--3 add-person__button-next--2 modal__next button button button--green">Далее</button>
      </div>
    </form>
  </div>
</div>
`);

export default class AddPerson3View extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return addPerson3Template();
  }
}
