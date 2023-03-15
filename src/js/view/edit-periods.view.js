import AbstractView from './abstract.view.js';

const editPeriodsTemplate = () => (`
<div class="modal-container">
  <div class="modal person-group-edit">
    <div class="modal__inner-wrapper">
      <div class="person-group-edit__top-content modal__top-content">
        <p class="person-group-edit__title modal__title">Периоды</p>
        <button class="person-group-edit__button button button--closed-button modal__closed-button"><span
            class="visually-hidden">Закрыть</span></button>
      </div>

      <div class="person-group-edit__main-content modal__main-content">
        <p class="person-group-edit__content-title modal__content-title">Добавьте период</p>
        <form class=" edit-periods-form modal__add-form" action="#" method="post">
          <input id="edit-periods-form__group-name" type="text"
            class="edit-periods-form__input edit-periods-form__input--with-value modal__add-input"
            placeholder="Название периода">
          <button type="submit"
            class="edit-periods-form__button modal__add-button  button button button--icon button button--green">
            <span class="visually-hidden">Добавить новый период</span>
          </button>
        </form>

        <div class="added-periods">
          <p class="added-periods__title">Добавленные</p>

          <ul class="added-periods__list">
            <li class="added-period">
              <div class="added-period__main-content">
                <div class="added-period__container">
                  <p class="added-period__label modal__label">Период 1</p>
                  <p class="added-period__title">Детство</p>
                </div>
                <button class="added-period__delete added-period__button button button button--icon">
                  <span class="visually-hidden">Удалить период</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12.2473 22.0001C10.8923 22.0001 9.57133 21.9852 8.26433 21.9581C6.59233 21.9251 5.43533 20.8411 5.24633 19.1291C4.93133 16.2891 4.39233 9.59515 4.38733 9.52815C4.35333 9.11515 4.66133 8.75315 5.07433 8.72015C5.48133 8.70915 5.84933 8.99515 5.88233 9.40715C5.88733 9.47515 6.42533 16.1461 6.73733 18.9641C6.84433 19.9371 7.36933 20.4391 8.29533 20.4581C10.7953 20.5112 13.3463 20.5141 16.0963 20.4641C17.0803 20.4451 17.6123 19.9531 17.7223 18.9571C18.0323 16.1631 18.5723 9.47515 18.5783 9.40715C18.6113 8.99515 18.9763 8.70715 19.3853 8.72015C19.7983 8.75415 20.1063 9.11515 20.0733 9.52815C20.0673 9.59615 19.5253 16.3071 19.2133 19.1221C19.0193 20.8691 17.8653 21.9321 16.1233 21.9641C14.7903 21.9871 13.5043 22.0001 12.2473 22.0001Z"
                      fill="#B7BDCE" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.708 6.98926H3.75C3.336 6.98926 3 6.65326 3 6.23926C3 5.82526 3.336 5.48926 3.75 5.48926H20.708C21.122 5.48926 21.458 5.82526 21.458 6.23926C21.458 6.65326 21.122 6.98926 20.708 6.98926Z"
                      fill="#B7BDCE" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.4406 6.989C16.3026 6.989 15.3146 6.178 15.0906 5.062L14.8476 3.846C14.7966 3.661 14.5856 3.5 14.3456 3.5H10.1126C9.87258 3.5 9.66158 3.661 9.60058 3.892L9.36758 5.062C9.14458 6.178 8.15558 6.989 7.01758 6.989C6.60358 6.989 6.26758 6.653 6.26758 6.239C6.26758 5.825 6.60358 5.489 7.01758 5.489C7.44358 5.489 7.81358 5.185 7.89758 4.767L8.14058 3.551C8.38758 2.619 9.19458 2 10.1126 2H14.3456C15.2636 2 16.0706 2.619 16.3076 3.506L16.5616 4.767C16.6446 5.185 17.0146 5.489 17.4406 5.489C17.8546 5.489 18.1906 5.825 18.1906 6.239C18.1906 6.653 17.8546 6.989 17.4406 6.989Z"
                      fill="#B7BDCE" />
                  </svg>

                </button>
              </div>
              <p class="added-period__count">Кол-во персон: <span class="added-period__count-span">3</span></p>
            </li>

            <li class="added-period">
              <div class="added-period__main-content">
                <div class="added-period__container">
                  <p class="added-period__label modal__label">Период 2</p>
                  <p class="added-period__title">Юность</p>
                </div>
                <button class="added-period__delete added-period__button button button button--icon">
                  <span class="visually-hidden">Удалить период</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12.2473 22.0001C10.8923 22.0001 9.57133 21.9852 8.26433 21.9581C6.59233 21.9251 5.43533 20.8411 5.24633 19.1291C4.93133 16.2891 4.39233 9.59515 4.38733 9.52815C4.35333 9.11515 4.66133 8.75315 5.07433 8.72015C5.48133 8.70915 5.84933 8.99515 5.88233 9.40715C5.88733 9.47515 6.42533 16.1461 6.73733 18.9641C6.84433 19.9371 7.36933 20.4391 8.29533 20.4581C10.7953 20.5112 13.3463 20.5141 16.0963 20.4641C17.0803 20.4451 17.6123 19.9531 17.7223 18.9571C18.0323 16.1631 18.5723 9.47515 18.5783 9.40715C18.6113 8.99515 18.9763 8.70715 19.3853 8.72015C19.7983 8.75415 20.1063 9.11515 20.0733 9.52815C20.0673 9.59615 19.5253 16.3071 19.2133 19.1221C19.0193 20.8691 17.8653 21.9321 16.1233 21.9641C14.7903 21.9871 13.5043 22.0001 12.2473 22.0001Z"
                      fill="#B7BDCE" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.708 6.98926H3.75C3.336 6.98926 3 6.65326 3 6.23926C3 5.82526 3.336 5.48926 3.75 5.48926H20.708C21.122 5.48926 21.458 5.82526 21.458 6.23926C21.458 6.65326 21.122 6.98926 20.708 6.98926Z"
                      fill="#B7BDCE" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.4406 6.989C16.3026 6.989 15.3146 6.178 15.0906 5.062L14.8476 3.846C14.7966 3.661 14.5856 3.5 14.3456 3.5H10.1126C9.87258 3.5 9.66158 3.661 9.60058 3.892L9.36758 5.062C9.14458 6.178 8.15558 6.989 7.01758 6.989C6.60358 6.989 6.26758 6.653 6.26758 6.239C6.26758 5.825 6.60358 5.489 7.01758 5.489C7.44358 5.489 7.81358 5.185 7.89758 4.767L8.14058 3.551C8.38758 2.619 9.19458 2 10.1126 2H14.3456C15.2636 2 16.0706 2.619 16.3076 3.506L16.5616 4.767C16.6446 5.185 17.0146 5.489 17.4406 5.489C17.8546 5.489 18.1906 5.825 18.1906 6.239C18.1906 6.653 17.8546 6.989 17.4406 6.989Z"
                      fill="#B7BDCE" />
                  </svg>

                </button>
              </div>

              <p class="added-period__count">Кол-во персон: <span class="added-period__count-span">3</span></p>
            </li>

            <li class="added-period">
              <div class="added-period__main-content">
                <div class="added-period__container">
                  <p class="added-period__label modal__label">Период 3</p>
                  <p class="added-period__title">Зрелость</p>
                </div>
                <button class="added-period__delete added-period__button button button button--icon">
                  <span class="visually-hidden">Удалить период</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12.2473 22.0001C10.8923 22.0001 9.57133 21.9852 8.26433 21.9581C6.59233 21.9251 5.43533 20.8411 5.24633 19.1291C4.93133 16.2891 4.39233 9.59515 4.38733 9.52815C4.35333 9.11515 4.66133 8.75315 5.07433 8.72015C5.48133 8.70915 5.84933 8.99515 5.88233 9.40715C5.88733 9.47515 6.42533 16.1461 6.73733 18.9641C6.84433 19.9371 7.36933 20.4391 8.29533 20.4581C10.7953 20.5112 13.3463 20.5141 16.0963 20.4641C17.0803 20.4451 17.6123 19.9531 17.7223 18.9571C18.0323 16.1631 18.5723 9.47515 18.5783 9.40715C18.6113 8.99515 18.9763 8.70715 19.3853 8.72015C19.7983 8.75415 20.1063 9.11515 20.0733 9.52815C20.0673 9.59615 19.5253 16.3071 19.2133 19.1221C19.0193 20.8691 17.8653 21.9321 16.1233 21.9641C14.7903 21.9871 13.5043 22.0001 12.2473 22.0001Z"
                      fill="#B7BDCE" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.708 6.98926H3.75C3.336 6.98926 3 6.65326 3 6.23926C3 5.82526 3.336 5.48926 3.75 5.48926H20.708C21.122 5.48926 21.458 5.82526 21.458 6.23926C21.458 6.65326 21.122 6.98926 20.708 6.98926Z"
                      fill="#B7BDCE" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.4406 6.989C16.3026 6.989 15.3146 6.178 15.0906 5.062L14.8476 3.846C14.7966 3.661 14.5856 3.5 14.3456 3.5H10.1126C9.87258 3.5 9.66158 3.661 9.60058 3.892L9.36758 5.062C9.14458 6.178 8.15558 6.989 7.01758 6.989C6.60358 6.989 6.26758 6.653 6.26758 6.239C6.26758 5.825 6.60358 5.489 7.01758 5.489C7.44358 5.489 7.81358 5.185 7.89758 4.767L8.14058 3.551C8.38758 2.619 9.19458 2 10.1126 2H14.3456C15.2636 2 16.0706 2.619 16.3076 3.506L16.5616 4.767C16.6446 5.185 17.0146 5.489 17.4406 5.489C17.8546 5.489 18.1906 5.825 18.1906 6.239C18.1906 6.653 17.8546 6.989 17.4406 6.989Z"
                      fill="#B7BDCE" />
                  </svg>

                </button>
              </div>
              <p class="added-period__count">Кол-во персон: <span class="added-period__count-span">3</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <button class="modal__save-button button button button--green">Сохранить</button>
  </div>
</div>
`);

export default class EditPeriodsView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return editPeriodsTemplate();
  }
}
