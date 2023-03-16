import AbstractView from './abstract.view.js';

const moreInfoModalTemplate = (name, avatarPath, description) => (`
<div class="more-info-modal">
  <div class="more-info-modal__part more-info-modal__part--top">
    <button class="more-info-modal__button--closed button button--closed-button">
      <svg class="more-info-modal__button-svg button--closed-button-svg" width=" 32"
        height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M8.39052 8.39052C8.91122 7.86983 9.75544 7.86983 10.2761 8.39052L16 14.1144L21.7239 8.39052C22.2446 7.86983 23.0888 7.86983 23.6095 8.39052C24.1302 8.91122 24.1302 9.75544 23.6095 10.2761L17.8856 16L23.6095 21.7239C24.1302 22.2446 24.1302 23.0888 23.6095 23.6095C23.0888 24.1302 22.2446 24.1302 21.7239 23.6095L16 17.8856L10.2761 23.6095C9.75544 24.1302 8.91122 24.1302 8.39052 23.6095C7.86983 23.0888 7.86983 22.2446 8.39052 21.7239L14.1144 16L8.39052 10.2761C7.86983 9.75544 7.86983 8.91122 8.39052 8.39052Z"
          fill="#B7BDCE" />
      </svg>
      <span class="visually-hidden">Закрыть</span>
    </button>
    <img src="${avatarPath}" alt="" class="more-info-modal__avatar">
    <p class="more-info-modal__name">${name}</p>
  </div>

  <div class="more-info-modal__part more-info-modal__part--bottom">
    <ul class="more-info-modal__menu">
      <li class="more-info-modal__menu-item more-info-modal__menu-item--active">Информация</li>
      <li class="more-info-modal__menu-item">Периоды/круги</li>
    </ul>
    <ul class="more-info-modal__windows">
      <li class="more-info-modal__window more-info-modal__window--active">
        <div class="more-info-modal__text-container">
          <p class="more-info-modal__status">Двоюродный брат</p>
          <p class="more-info-modal__description">${description}</p>
        </div>

        <button class="button button--green-text more-info-modal__button">Подробнее</button>
      </li>
      <li class="more-info-modal__window">
        <div class="more-info-modal__text-container more-info-modal__circle-container">
          <div class="more-info-modal__circle">
            <span class="more-info-modal__circle-name">Детство</span>
            <span class="more-info-modal__circle-number">1 круг</span>
          </div>
          <div class="more-info-modal__circle">
            <span class="more-info-modal__circle-name">Юность</span>
            <span class="more-info-modal__circle-number">2 круг</span>
          </div>
        </div>

        <button class="button button--green-text more-info-modal__edit more-info-modal__button">Редактировать расположение</button>
      </li>
    </ul>

  </div>
</div>
    `);

export default class MoreInfoModalView extends AbstractView {
  constructor(name, avatarPath, description) {
    super();
    this.name = name;
    this.avatarPath = avatarPath;
    this.description = description;
  }

  get template() {
    return moreInfoModalTemplate(this.name, this.avatarPath, this.description);
  }
}
