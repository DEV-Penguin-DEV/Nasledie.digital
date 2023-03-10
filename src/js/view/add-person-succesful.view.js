import AbstractView from './abstract.view.js';

const addPersonSuccesfulTemplate = (content) => {
  const name = content.get('person_name');
  const surname = content.get('person_surname');
  return (`
<div class="modal-container">
  <div class="modal add-person add-person--succesful">
    <div class="add-person--succesful__top-container">
      <img src="" alt="" class="add-person--succesful__img">
      <p class="add-person--succesful__title">
        <span class="add-person--succesful__name">${name} ${surname}</span><br />
        успешно добавлен!
      </p>
    </div>

    <button class="add-person--succesful__button button modal__succesful-button button--green">Хорошо</button>
  </div>
</div>
`);};

export default class AddPersonSuccesfulView extends AbstractView {
  constructor(content) {
    super();
    this.content = content;
  }

  get template() {
    return addPersonSuccesfulTemplate(this.content);
  }
}
