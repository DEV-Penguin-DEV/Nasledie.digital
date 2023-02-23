import { render, RenderPosition } from '../render';
import AddPersoneGroupView from '../view/add-persone-group.view';

export default class ModalPresenter {
  #circleMainContainer = null;

  constructor(circleMainContainer) {
    this.#circleMainContainer = circleMainContainer;
  }

  init() {

  }

  #openModalWindow(modalView) {
    render(modalView, this.#circleMainContainer, RenderPosition.BEFOREEND);
  }

  #closeModalWindow(evt) {
    evt.preventDefault();
    document.querySelector('.modal-container').remove();
  }

  #saveModalWindow = (evt) => {
    //TODO SEND UPDATE TO SERVER
    this.#closeModalWindow(evt);
  };

  #modalDefaultListener = () => {
    const closeButtonElement = this.#circleMainContainer.querySelector('.modal__closed-button');
    const saveButtonElement = this.#circleMainContainer.querySelector('.modal__save-button');

    closeButtonElement.addEventListener('click', this.#closeModalWindow);
    saveButtonElement.addEventListener('click', this.#saveModalWindow);
  };


  onPersoneGroupClick = (evt) => {
    evt.preventDefault();
    this.#openModalWindow(new AddPersoneGroupView());

    this.#modalDefaultListener();
  };
}

