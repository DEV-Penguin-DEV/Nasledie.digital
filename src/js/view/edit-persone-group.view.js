import AbstractView from './abstract.view.js';

const editPersoneGroupTemplate = () => (`
<div class="modal-container modal-container-persone-group-edit">
  <div class="modal persone-group-edit">
    <div class="modal__inner-wrapper">
      <div class="persone-group-edit__top-content modal__top-content">
        <button class="persone-group-edit__button modal__back-button button--back-button"><span class="visually-hidden">Вернуться
            назад</span></button>
        <p class="persone-group-edit__title modal__title">Редактирование группы</p>
        <button class="persone-group-edit__button modal__closed-button button--closed-button"><span
            class="visually-hidden">Закрыть</span></button>
      </div>

      <div class="persone-group-edit__main-content modal__main-content">
        <p class="persone-group-edit__content-title modal__content-title">Название группы</p>
        <form class=" edit-group-form modal__add-form" action="#" method="post">
          <input id="edit-group-form__group-name" type="text"
            class="edit-group-form__input edit-group-form__input--with-value modal__add-input"
            placeholder="Название группы" value="Родственники">
          <label for="edit-group-form__group-name" class="edit-group-form__label">Название группы</label>
        </form>

        <div class="persone-in-group">
          <p class="persone-in-group__title modal__content-title">Добавьте персону в группу</p>

          <form class="persone-in-group-form modal__add-form" action="#" method="post">
            <input id="persone-in-group-form__group-name" type="text"
              class="edit-group-form__input modal__add-input" placeholder="Имя персоны">
          </form>

          <ul class="persone-in-group__list">
            <li class="persone-in-group__item">
              <p class="persone-in-group__text">Иван Иванович</p>
              <button class="persone-in-group__button button--closed-button"><span
                  class="visually-hidden">Удалить</span></button>
            </li>

            <li class="persone-in-group__item">
              <p class="persone-in-group__text">Дмитрий Александрович</p>
              <button class="persone-in-group__button button--closed-button"><span
                  class="visually-hidden">Удалить</span></button>
            </li>

            <li class="persone-in-group__item">
              <p class="persone-in-group__text">Дмитрий Александрович</p>
              <button class="persone-in-group__button button--closed-button"><span
                  class="visually-hidden">Удалить</span></button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <button class="persone-in-group__button-submit modal__save-button button button--green">Сохранить</button>
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
