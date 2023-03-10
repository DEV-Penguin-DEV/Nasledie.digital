import { render, RenderPosition } from '../render';
import { DEFAULT_AVATAR_PATH } from '../const';

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

  #saveModalWindow = (evt, SuccesfulView = null, succesfulContainer = null, allFormContent = null) => {
    //TODO SEND UPDATE TO SERVER
    this.#closeModalWindow(evt);

    if (SuccesfulView !== null && succesfulContainer !== null && allFormContent !== null) {
      render(new SuccesfulView(allFormContent[0]), succesfulContainer);
      const avatarFile = allFormContent[0].get('avatar');
      const avatarImg = document.querySelector('.add-person--succesful__img');
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        avatarImg.src = event.target.result === 'data:' ? DEFAULT_AVATAR_PATH : event.target.result;
      };
      fileReader.readAsDataURL(avatarFile);
      console.log(allFormContent);
      document.querySelector('.modal__succesful-button').addEventListener('click', () => this.#closeModalWindow(evt));
    }
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

  startNextStep = (validation, allFormContent, isLast = false, SuccesfulView = null, succesfulContainer = null) => {
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
          // console.log(document.querySelectorAll('.modal__save-button'));
          // this.#circleMainContainer.querySelectorAll('.modal__save-button')[0].removeEventListener('click', this.#saveModalWindow);
            this.#saveModalWindow(evt, SuccesfulView, succesfulContainer, allFormContentCopy);
          } else {
            this.#nextStep.cb(evt, ModalPresenter, this.#nextStep.view, this.#nextStep.validation, allFormContentCopy);
          }
        }
      }
      );
    }
  };


  onModalClick = (evt, ModalView, content) => {
    evt.preventDefault();
    this.#openModalWindow(new ModalView(content));

    this.init();
  };
}

