import AbstractView from './abstract.view.js';

const addPersonSuccesfulTemplate = () => (`
<div class="modal-container">
  <div class="modal add-person add-person--succesful">
    <div class="add-person--succesful__top-container">
      <img src="" alt="" class="add-person--succesful__img">
      <p class="add-person--succesful__title">
        <span class="add-person--succesful__name">Юрий Григорьевич</span><br />
        успешно добавлен!
      </p>
    </div>

    <button class="add-person--succesful__button button button--green">Хорошо</button>
  </div>
</div>
`);

export default class AddPersonSuccesfulView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return addPersonSuccesfulTemplate();
  }
}
