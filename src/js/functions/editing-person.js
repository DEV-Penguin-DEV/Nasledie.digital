import { render, createElement } from '../render';
import { startSelects } from './selects.js';

const personInfoEditingTemplate = () => (
  `
<div class="editing-modal__person-info-container">
  <div class="editing-modal__avatar-input-container">
    <img src="img/input-file.png" alt="" width="93" height="93" class="editing-modal__avatar" />
    <input type="file" class="editing-modal__avatar-input" id="editing-avatar" multiple />
    <label class="editing-modal__avatar-label" for="editing-avatar"><span class="visually-hidden">Изминить
        аватар</span></label>
  </div>

  <div class="editing-modal__select-container select-container">
    <button type="button " class="editing-modal__filters filters__select select">
    </button>
    <ul class="select-list select-list--closed">
      <li value="1th-circle" class="filters__filter option option--active">
        1 круг общения
      </li>
      <li value="2th-circle" class="filters__filter option">
        2 круг общения
      </li>
      <li value="3th-circle" class="filters__filter option">
        3 круг общения
      </li>
      <li value="4th-circle" class="filters__filter option">
        4 круг общения
      </li>
    </ul>
  </div>
</div>
`);
const inputsContainers = document.querySelectorAll('.editing-modal__input-container');
const renderContainers = document.querySelectorAll('.editing-modal__input-js-container');

export const startEditing = () => {
  inputsContainers.forEach((inputContainer, i) => {
    const input = inputContainer.querySelector('.editing-modal__input');

    input.addEventListener('change', () => {
      if (input.checked) {
        const element = createElement(personInfoEditingTemplate);
        render(element, renderContainers[i]);
        startSelects();
      } else {
        renderContainers[i].innerHTML = '';
      }
    });
  });
};

