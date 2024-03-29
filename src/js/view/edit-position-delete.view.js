import AbstractView from './abstract.view.js';

const editPositionDeleteTemplate = () => (`
<div class="modal-container">
  <div class="modal edit-position__save-window">
    <button class="edit-position__save-window-button-close button button--white--icon modal__closed-button">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M8.39052 8.39052C8.91122 7.86983 9.75544 7.86983 10.2761 8.39052L16 14.1144L21.7239 8.39052C22.2446 7.86983 23.0888 7.86983 23.6095 8.39052C24.1302 8.91122 24.1302 9.75544 23.6095 10.2761L17.8856 16L23.6095 21.7239C24.1302 22.2446 24.1302 23.0888 23.6095 23.6095C23.0888 24.1302 22.2446 24.1302 21.7239 23.6095L16 17.8856L10.2761 23.6095C9.75544 24.1302 8.91122 24.1302 8.39052 23.6095C7.86983 23.0888 7.86983 22.2446 8.39052 21.7239L14.1144 16L8.39052 10.2761C7.86983 9.75544 7.86983 8.91122 8.39052 8.39052Z"
          fill="#B7BDCE" />
      </svg>
      <span class="visually-hidden">Закрыть окно</span></button>
    <p class="edit-position__save-window-title">Хотите убрать персону с Кругов общения?</p>
    <p class="edit-position__save-window-text">Персона будет убрана с Кругов общения, но профиль не удалиться</p>
    <div class="edit-position__save-window-buttons">
      <div
        class="edit-position__save-window-button button button--white edit-position__save-window-button--cancel modal__succesful-button--cancel">
        Отменить</div>
      <button
        class="edit-position__save-window-button edit-position__save-window-button--delete error button button--red">Убрать
        с Кругов общения</button>
    </div>
  </div>
</div>
`);

export default class EditPositionDeleteView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return editPositionDeleteTemplate();
  }
}
