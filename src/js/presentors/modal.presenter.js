import { render, RenderPosition } from '../render';

export default class ModalPresenter {
  #circleMainContainer = null;

  constructor(circleMainContainer) {
    this.#circleMainContainer = circleMainContainer;
  }

  init() {
    this.#modalDefaultListener();
  }

  #openModalWindow(modalView) {
    render(modalView, this.#circleMainContainer, RenderPosition.BEFOREEND);
  }

  #closeModalWindow(evt) {
    evt.preventDefault();
    document.querySelectorAll('.modal-container').forEach((container) => {
      container.remove();
    });
  }

  closeModalWindowStep = (removeElement) => {
    const backButtonElement = this.#circleMainContainer.querySelector('.modal__back-button');
    backButtonElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      document.querySelector(removeElement).remove();
    });
  };

  #saveModalWindow = (evt) => {
    //TODO SEND UPDATE TO SERVER
    this.#closeModalWindow(evt);
  };

  #modalDefaultListener = () => {
    const closeButtonElements = this.#circleMainContainer.querySelectorAll('.modal__closed-button');
    const saveButtonElements = this.#circleMainContainer.querySelectorAll('.modal__save-button');

    closeButtonElements.forEach((closeButtonElement) => {
      closeButtonElement.addEventListener('click', this.#closeModalWindow);
    });

    saveButtonElements.forEach((saveButtonElement) => {
      saveButtonElement.addEventListener('click', this.#saveModalWindow);
    });
  };


  onPersoneGroupClick = (evt, ModalView) => {
    evt.preventDefault();
    this.#openModalWindow(new ModalView());

    this.#modalDefaultListener();
  };
}

