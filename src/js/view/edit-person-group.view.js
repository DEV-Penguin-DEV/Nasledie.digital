import AbstractView from './abstract.view.js';

const editPersoneGroupTemplate = () => (`
<div class="modal-container modal-container-person-group-edit">
  <div class="modal person-group-edit">
    <div class="modal__inner-wrapper">
      <div class="person-group-edit__top-content modal__top-content">
        <button class="person-group-edit__button modal__back-button button--back-button"><span class="visually-hidden">Вернуться
            назад</span></button>
        <p class="person-group-edit__title modal__title">Редактирование группы</p>
        <button class="person-group-edit__button modal__closed-button button--closed-button"><span
            class="visually-hidden">Закрыть</span></button>
      </div>

      <div class="person-group-edit__main-content modal__main-content">
        <p class="person-group-edit__content-title modal__content-title">Название группы</p>
        <form class=" edit-group-form modal__add-form" action="#" method="post">
          <input id="edit-group-form__group-name" type="text"
            class="edit-group-form__input edit-group-form__input--with-value modal__add-input"
            placeholder="Название группы" value="Родственники">
          <label for="edit-group-form__group-name" class="edit-group-form__label modal__label">Название группы</label>
        </form>

        <div class="person-in-group">
          <p class="person-in-group__title modal__content-title">Добавьте персону в группу</p>

          <form class="person-in-group-form modal__add-form" action="#" method="post">
            <input id="person-in-group-form__group-name" type="text"
              class="edit-group-form__input modal__add-input" placeholder="Имя персоны">
          </form>

          <ul class="person-in-group__list">
            <li class="person-in-group__item">
              <p class="person-in-group__text">Иван Иванович</p>
              <button class="person-in-group__button button--closed-button"><span
                  class="visually-hidden">Удалить</span></button>
            </li>

            <li class="person-in-group__item">
              <p class="person-in-group__text">Дмитрий Александрович</p>
              <button class="person-in-group__button button--closed-button"><span
                  class="visually-hidden">Удалить</span></button>
            </li>

            <li class="person-in-group__item">
              <p class="person-in-group__text">Дмитрий Александрович</p>
              <button class="person-in-group__button button--closed-button"><span
                  class="visually-hidden">Удалить</span></button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <button class="person-in-group__button-submit modal__save-button button button--green">Сохранить</button>
  </div>
</div>
`);

export default class EditPersoneGroupView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return editPersoneGroupTemplate();
  }
}
