import { render, RenderPosition } from '../render';

export default class ModalPresenter {
  #circleMainContainer = null;
  #nextStep = null;

  constructor(circleMainContainer, nextStep = null) {
    this.#circleMainContainer = circleMainContainer;
    this.#nextStep = nextStep;
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

  closeModalWindowStep = (removeElement, contents = null) => {
    const backButtonElement = this.#circleMainContainer.querySelector('.modal__back-button');
    if (contents !== null) {
      contents.forEach((content) => {
        content.pop();
      });
    }

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

  startNextStep = (validation = null, view, allFormContent = []) => {
    if (this.#nextStep !== null) {
      const nextButtons = this.#circleMainContainer.querySelectorAll('.modal__form');
      const nextButtonElement = nextButtons[nextButtons.length - 1];

      nextButtonElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if (validation !== null) {
          allFormContent.push(validation(evt));
        }
        console.log(allFormContent);
        this.#nextStep.cb(evt, ModalPresenter, view, this.#nextStep.content, this.#nextStep.validation, allFormContent);
      });
    }
  };


  onModalClick = (evt, ModalView, content) => {
    evt.preventDefault();
    this.#openModalWindow(new ModalView(content));

    this.init();
  };
}

