import AbstractView from './abstract.view.js';

const addPersonTemplate = () => `
<div class="modal-container">
  <div class="modal add-person">
    <div class="add-person__top-content modal__top-content">
      <p class="add-person__title modal__title">Добавление персоны</p>
      <button class="add-person__button button--closed-button modal__closed-button"><span
          class="visually-hidden">Закрыть</span></button>
    </div>

    <div class="modal__main-content add-person__main-content">
      <form action="" class="add-person__form add-person--step-1__form modal__form" method="post">
        <!-- Add person left part -->
        <div class="add-person__part add-person__part--left">
          <!-- Male and Avatar -->
          <div class="male-and-avatar__container male-and-avatar">
            <!-- Avatar -->
            <div class="add-person__avatar-container">
              <img src="img/avatar-default.png" alt="" class="add-person__avatar-img">
              <input id="avatar-input-id" type="file" class="add-person__avatar-input" name="avatar">
              <label for="avatar-input-id" class="add-person__avatar-label">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.99219 10.8923C3.99219 9.98097 4.73097 9.24219 5.6423 9.24219H35.3444C36.2557 9.24219 36.9945 9.98097 36.9945 10.8923V27.3934C36.9945 30.1274 34.7781 32.3438 32.0441 32.3438H8.94253C6.20853 32.3438 3.99219 30.1274 3.99219 27.3934V10.8923ZM7.29242 12.5424V27.3934C7.29242 28.3048 8.0312 29.0436 8.94253 29.0436H32.0441C32.9555 29.0436 33.6943 28.3048 33.6943 27.3934V12.5424H7.29242Z"
                    fill="#B7BDCE" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.493 17.4926C18.6704 17.4926 17.1928 18.9702 17.1928 20.7928C17.1928 22.6155 18.6704 24.0931 20.493 24.0931C22.3157 24.0931 23.7933 22.6155 23.7933 20.7928C23.7933 18.9702 22.3157 17.4926 20.493 17.4926ZM13.8926 20.7928C13.8926 17.1475 16.8477 14.1924 20.493 14.1924C24.1384 14.1924 27.0935 17.1475 27.0935 20.7928C27.0935 24.4382 24.1384 27.3933 20.493 27.3933C16.8477 27.3933 13.8926 24.4382 13.8926 20.7928Z"
                    fill="#B7BDCE" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M30.3926 5.94113C30.3926 6.85246 29.6538 7.59124 28.7425 7.59124L27.0923 7.59124C26.181 7.59124 25.4422 6.85246 25.4422 5.94113C25.4422 5.0298 26.181 4.29102 27.0924 4.29102L28.7425 4.29102C29.6538 4.29102 30.3926 5.0298 30.3926 5.94113Z"
                    fill="#B7BDCE" />
                </svg>

                <svg class="active-svg" width="36" height="36" viewBox="0 0 26 26" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
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


                <span class="visually-hidden">Загрузить Аватарку</span>
              </label>
            </div>

            <!-- Male -->
            <div class="add-person__male-container">
              <input id="add-person__male--men" type="radio" class="add-person__male-input modal__radio-button" name="person__male" value="men"
                checked>
              <label for="add-person__male--men" class="add-person__male-label modal__radio-button-label">Мужчина</label>

              <input id="add-person__male--women" type="radio" class="add-person__male-input modal__radio-button" name="person__male" value="women">
              <label for="add-person__male--women" class="add-person__male-label modal__radio-button-label">Женщина</label>
            </div>
          </div>

          <!-- Life description -->
          <label for="life_description-id" class="add-person__life-description-label modal__content-title">Описание
            /
            Воспоминание</label>
          <textarea class="add-person__life-description" name="life_description" id="life_description-id"
            placeholder="Опишите кратко, кем для Вас является этот целовек" required></textarea>

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
          <div class="add-person__right-top-part">
            <!-- General Info -->
            <div class="add-person__general-info">
              <p class="add-person__content-title modal__content-title">Введите ФИО</p>

              <div class="add-person__right-top-part__input-container">

                <div class="add-person__input-container modal__input-container">
                  <input id="person_name-id" type="text" name="person_name"
                    class="add-person__input modal__add-input" required>
                  <label for="person_name-id" class="modal__add-label">Имя</label>
                </div>


                <div class="add-person__input-container modal__input-container">
                  <input id="person_father_name-id" type="text" name="person_father_name"
                    class="add-person__input modal__add-input" required>
                  <label for="person_father_name-id" class="modal__add-label">Отчество</label>
                </div>


                <div class="add-person__input-container modal__input-container">
                  <input id="person_surname-id" type="text" name="person_surname"
                    class="add-person__input modal__add-input" required>
                  <label for="person_surname-id" class="modal__add-label">Фамилия</label>
                </div>

              </div>
            </div>

            <!-- Relationship -->
            <div class="add-person__relationship-info">
              <p class="add-person__content-title modal__content-title">Кем приходится автору</p>

              <div class="add-person__input-container modal__input-container">
                <input id="person_group-id" type="text" name="person_group"
                  class="add-person__input modal__add-input" required>
                <label for="person_group-id" class="modal__add-label">Кем приходится автору</label>
              </div>
            </div>
          </div>

          <button class="add-person__button-next modal__next button button--green">Далее</button>
        </div>
      </form>
    </div>
  </div>
</div>
`;

export default class AddPersonView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return addPersonTemplate();
  }
}
