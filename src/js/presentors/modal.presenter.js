import { render, RenderPosition } from '../render';

export default class ModalPresenter {
  #circleMainContainer = null;
  #nextStep = null;

  constructor(circleMainContainer, nextStep = null) {
    this.#circleMainContainer = circleMainContainer;
    this.#nextStep = nextStep;
  }

  init(additionalCloseFunction = null, additionalSaveFunction = null) {
    this.#modalDefaultListener(additionalCloseFunction, additionalSaveFunction);
  }

  #openModalWindow(modalView) {
    render(modalView, this.#circleMainContainer, RenderPosition.BEFOREEND);
  }

  #closeModalWindow(evt, additionalCloseFunction = null) {
    evt.preventDefault();
    if (additionalCloseFunction !== null) {
      additionalCloseFunction();
    }
    document.querySelectorAll('.modal-container').forEach((container) => {
      container.remove();
    });
  }

  closeModalWindowStep = (removeElement, contents = null) => {
    const backButtonElement = document.querySelector(removeElement).querySelector('.modal__back-button');

    backButtonElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      document.querySelector(removeElement).remove();
      if (contents !== null) {
        contents.forEach((content) => {
          content.pop();
        });
      }
    });
  };

  #saveModalWindow = (evt, allFormContentCopy = null, additionalSaveFunction = null) => {
    //TODO SEND UPDATE TO SERVER
    this.#closeModalWindow(evt);

    if (additionalSaveFunction !== null) {
      additionalSaveFunction(evt, this.#closeModalWindow, allFormContentCopy);
    }
  };

  #modalDefaultListener = (additionalCloseFunction = null, additionalSaveFunction = null) => {
    const closeButtonElements = this.#circleMainContainer.querySelectorAll('.modal__closed-button');
    const saveButtonElements = this.#circleMainContainer.querySelectorAll('.modal__save-button');

    closeButtonElements.forEach((closeButtonElement) => {
      closeButtonElement.addEventListener('click', (evt) => this.#closeModalWindow(evt, additionalCloseFunction));
    });

    saveButtonElements.forEach((saveButtonElement) => {
      saveButtonElement.addEventListener('click', (evt) => this.#saveModalWindow(evt, null, additionalSaveFunction));
    });
  };

  startNextStep = (validation, allFormContent, isLast = false, additionalSaveFunction = null) => {

    if (this.#nextStep !== null || isLast) {

      const nextButtons = this.#circleMainContainer.querySelectorAll('.modal__form');

      const nextButtonElement = nextButtons[nextButtons.length - 1];
      const allFormContentCopy = [];
      nextButtonElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const formData = validation(evt);
        if (formData !== false) {
          allFormContentCopy.push(...allFormContent, formData);
          if (isLast) {
            this.#saveModalWindow(evt, allFormContentCopy, additionalSaveFunction);
          } else {
            this.#nextStep.cb(evt, ModalPresenter, this.#nextStep.view, this.#nextStep.validation, allFormContentCopy);
          }
        }
      }
      );
    }
  };


  onModalClick = (evt, ModalView, content, additionalCloseFunction = null, additionalSaveFunction = null) => {
    evt.preventDefault();
    this.#openModalWindow(new ModalView(content));
    this.init(additionalCloseFunction, additionalSaveFunction);
  };
}

