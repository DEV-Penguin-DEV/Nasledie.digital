import AbstractView from './abstract.view.js';

const moreInfoModalEditTemplate = (name, avatarPath) => (`
<div class="modal-container">
  <div class="modal edit-position add-person add-person--step-3">
    <div class="add-person__top-content modal__top-content">
      <p class="add-person__title modal__title">Редактирование расположения</p>
      <button class="add-person__button button button--closed-button modal__closed-button"><span
          class="visually-hidden">Закрыть</span></button>
    </div>

    <div class="modal__main-content add-person__main-content">
      <div class="edit-position__top-block">
        <img src="${avatarPath}" alt="" class="edit-position__avatar">
        <div class="edit-position__text-content">
          <p class="edit-position__name">${name}</p>
          <p class="edit-position__status">Двоюродный брат</p>
        </div>
      </div>

      <form action="#" class="edit-position__form modal__form" method="post">

        <!-- top part -->
        <div class="add-person__part add-person__part--top">
          <ul class="add-person__all-periods-list">
            <li class="add-person__all-periods-item">
              <div class="add-person__all-periods__input-container">
                <input type="checkbox" name="circle" value=""isYouth" id="period-1" class="add-person__all-periods__input" />
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
                      <li class="filters__filter option option">
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
                <input type="checkbox" name="circle" value=""isMaturity" id="period-2" class="add-person__all-periods__input" />
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
                      <li class="filters__filter option option">
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
                <input type="checkbox" name="circle" value=""isMaturity" id="period-3" class="add-person__all-periods__input" />
                <label class="add-person__all-periods__label" for="period-3">
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
                      <li class="filters__filter option option">
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

        <div class="edit-position__bottom">
          <!-- Add person left part -->
          <div class="add-person__part add-person__part--left">
            <!-- Add person steps -->
            <p class="error-text">Не выбран ни один из периодов</p>
          </div>

          <!-- Add person right part -->
          <div class="add-person__part add-person__part--right">
            <button type="submit"
              class="add-person__button-next edit-position__save button button--green">Сохранить</button>
            <button type="submit"
              class="add-person__button-next edit-position__delete error button button--red">Убрать
              с Кругов общения</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</div>
    `);

export default class MoreInfoModalEditView extends AbstractView {
  constructor({ name, avatarPath }) {
    super();
    this.name = name;
    this.avatarPath = avatarPath;
  }

  get template() {
    return moreInfoModalEditTemplate(this.name, this.avatarPath);
  }
}
