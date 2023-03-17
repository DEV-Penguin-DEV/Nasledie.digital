import { PATH_BASE } from '../const.js';
import AbstractView from './abstract.view.js';

const addCreatedPersonTemplate = () => `
<div class="modal add-created-person add-created-person--step-1">
  <div class="add-person__top-content modal__top-content">
    <p class="add-person__title modal__title">Добавление персоны</p>
    <button class="add-person__button button button--closed-button modal__closed-button"><span
        class="visually-hidden">Закрыть</span></button>
  </div>

  <div class="created-person-card">
    <button class="created-person-card__button-back modal__back-button button"><span
        class="visually-hidden">Вернуться
        назад</span></button>
    <div class="created-person-card__part created-person-card__part--top">

      <img src="${PATH_BASE}/user-avatar.svg" alt="" class="created-person-card__avatar">
      <div class="created-person-card__text-content">
        <p class="created-person-card__name">Сергей Александрович Сергеев</p>
        <p class="created-person-card__status">Двоюродный брат</p>
      </div>
    </div>
    <div class="created-person-card__part created-person-card__part--bottom">
      <p class="created-person-card__part-title">Описание / Воспоминание</p>

      <p class="created-person-card__description">Мой двоюродный брат был лучшим братом. В детстве мы очень любили
        ходить к бабушке и дедушке на дачу. Он был старше меня
        на 2 года, поэтому я всегда прислушивался к нему. Мой двоюродный брат был лучшим братом. В детстве мы
        очень любили
        ходить к бабушке и дедушке на дачу. Он был</p>
    </div>
  </div>

  <div class="modal__main-content add-person__main-content">
    <form action="#" class="add-person__form add-person--step-3__form modal__form" method="post">
      <!-- Add person left part -->
      <div class="add-person__part add-person__part--left">
        <!-- Add person steps -->
        <ul class="add-person__steps-list">
          <li class="add-person__steps-item add-person__steps-item--active">1</li>
          <li class="add-person__steps-item">2</li>
          <li class="add-person__steps-item">3</li>
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
`;

export default class AddCreatedPersonView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return addCreatedPersonTemplate();
  }
}
