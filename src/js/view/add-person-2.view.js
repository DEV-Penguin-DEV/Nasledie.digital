import AbstractView from './abstract.view.js';

const addPerson2Template = (content) => {
  const avatar = content.avatarPath.name === '' ? 'img/avatar-default.png' : content.avatarPath.name;
  return (`
  <div class="modal add-person add-person--step-2">
    <div class="add-person__top-content modal__top-content">
    <button class="person-group-edit__button modal__back-button button--back-button"><span class="visually-hidden">Вернуться
            назад</span></button>
      <p class="add-person__title modal__title">Добавление персоны</p>
      <button class="add-person__button button--closed-button modal__closed-button"><span
          class="visually-hidden">Закрыть</span></button>
    </div>

    <div class="modal__main-content add-person__main-content">
      <form action="#" class="add-person__form modal__form add-person--step-2__form" method="post">
        <!-- Add person left part -->
        <div class="add-person__part add-person__part--left">
          <!-- Person circle 302 -->
          <div class="add-person__circle">
            <p class="add-person__circle-title modal__content-title">Выберите круг общения</p>

            <div class="add-person__circle-container">
              <img src="${avatar}" alt="Аватар" class="add-person__circle-img">

              <div class="add-person__circle-input-flex">
                <div class="add-person__circle-input-container add-person__circle-input-container--1">
                  <input id="add-person__circle-input-1-id" name="person_circle" type="radio"
                    class="add-person__circle-input" value="circle-1">
                  <label for="add-person__circle-input-1-id" class="add-person__circle-label">1 круг</label>
                </div>

                <div class="add-person__circle-input-container add-person__circle-input-container--2">
                  <input id="add-person__circle-input-2-id" name="person_circle" type="radio"
                    class="add-person__circle-input" value="circle-2">
                  <label for="add-person__circle-input-2-id" class="add-person__circle-label">2 круг</label>
                </div>

                <div class="add-person__circle-input-container add-person__circle-input-container--3">
                  <input id="add-person__circle-input-3-id" name="person_circle" type="radio"
                    class="add-person__circle-input" value="circle-3">
                  <label for="add-person__circle-input-3-id" class="add-person__circle-label">3 круг</label>
                </div>

                <div class="add-person__circle-input-container add-person__circle-input-container--4">
                  <input id="add-person__circle-input-4-id" name="person_circle" type="radio"
                    class="add-person__circle-input" value="circle-4">
                  <label for="add-person__circle-input-4-id" class="add-person__circle-label">4 круг</label>
                </div>
              </div>
              <p class="add-persone-circle-input-error">Выберите круг общения</p>
            </div>


          </div>

          <!-- Add person steps -->
          <ul class="add-person__steps-list">
            <li class="add-person__steps-item add-person__steps-item--active">1</li>
            <li class="add-person__steps-item add-person__steps-item--active">2</li>
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
          <div class="add-person__period-choose period-choose">
            <p class="period-choose__title modal__content-title">Выберите период</p>

            <div class="period-choose__content-container">
              <div class="period-choose-input-container">
                <input id="period-choose-input-2-id" name="person_period" type="radio"
                  class="period-choose-input modal__radio-button" value="childHood" checked>
                <label for="period-choose-input-2-id"
                  class="period-choose-label modal__radio-button-label">Детство</label>
              </div>

              <div class="period-choose-input-container">
                <input id="period-choose-input-3-id" name="person_period" type="radio"
                  class="period-choose-input modal__radio-button" value="youth">
                <label for="period-choose-input-3-id"
                  class="period-choose-label modal__radio-button-label">Юность</label>
              </div>

              <div class="period-choose-input-container">
                <input id="period-choose-input-4-id" name="person_period" type="radio"
                  class="period-choose-input modal__radio-button" value="maturity">
                <label for="period-choose-input-4-id"
                  class="period-choose-label modal__radio-button-label">Зрелость</label>
              </div>
            </div>
          </div>
          <button type="submit"
            class="add-person__button-next add-person__button-next--2 modal__next button button--green">Далее</button>
        </div>
      </form>
    </div>
</div>
`);
};

export default class AddPerson2View extends AbstractView {
  constructor(content) {
    super();

    this.content = content;
  }

  get template() {
    return addPerson2Template(this.content);
  }
}
