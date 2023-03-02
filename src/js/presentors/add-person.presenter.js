import ModalPresenter from './modal.presenter.js';
import AddPersonView from '../view/add-person.view.js';

export default class AddPersonPresenter {
  #modalPresenter = null;

  constructor(circleMainContainer) {
    this.#modalPresenter = new ModalPresenter(circleMainContainer);
  }

  init() {
    this.#onAvatarChange();
  }

  onAddPersonClick = (evt) => {
    evt.preventDefault();
    this.#modalPresenter.onModalClick(evt, AddPersonView);
    this.#modalPresenter.init();
    this.init();
  };

  #onAvatarChange = () => {
    const avatarInputElement = document.querySelector('.add-person__avatar-input');
    const avatarLabelElement = document.querySelector('.add-person__avatar-label');
    const avatarImgElement = document.querySelector('.add-person__avatar-img');

    avatarInputElement.addEventListener('change', () => {
      const fileReader = new FileReader();
      fileReader.onload = (evt) => {
        avatarImgElement.src = evt.target.result;
      };
      fileReader.readAsDataURL(avatarInputElement.files[0]);
      avatarLabelElement.classList.add('add-person__avatar-label--active');
    });
  };
}

