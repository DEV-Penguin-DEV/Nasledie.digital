import ModalPresenter from './modal.presenter.js';
import AddPersonView from '../view/add-person.view.js';
import AddPerson2View from '../view/add-person-2.view.js';
import { findAncestor } from '../utils.js';

const startSecondStep = (event, ModalPresenter2, view, content, validation, allFormContent) => {
  const nextStep =
    {
      view: null,
      cb: null,
      validation: null,
      content: {
        avatarPath: 'img', // TODO
      }
    };
  const modalPresenter = new ModalPresenter2(document.querySelector('.modal-container'), nextStep);
  modalPresenter.onModalClick(event, view, content);
  modalPresenter.init();
  modalPresenter.closeModalWindowStep('.add-person--step-2', [allFormContent]);
  const inputs = document.querySelectorAll('.add-person__circle-input');
  const form2Container = document.querySelector('.add-person__circle-container');
  const periodChoose = document.querySelector('.period-choose');

  inputs.forEach((input) => {
    input.addEventListener('change', (evt) => {
      if (document.querySelector('.add-person__circle-label--no-circle' ) !== null) {
        document.querySelector('.add-person__circle-label--no-circle').classList.remove('add-person__circle-label--no-circle');
      }

      form2Container.classList.remove('add-person__circle-container--required');
      periodChoose.classList.add('period-choose--shown');
      document.querySelectorAll('.add-person__circle-input-mini-avatar')
        .forEach((miniAvatarElm) => {
          miniAvatarElm.remove();
        });
      const inputContainer = findAncestor(evt.target, 'add-person__circle-input-container');
      inputContainer.querySelector('.add-person__circle-label').classList.add('add-person__circle-label--no-circle');
      const miniAvatar = document.createElement('img');
      miniAvatar.src = content.avatarPath.name === '' ? 'img/avatar-default.png' : content.avatarPath.name;
      miniAvatar.classList.add('add-person__circle-input-mini-avatar');
      inputContainer.append(miniAvatar);
    });
  });
  modalPresenter.startNextStep(validation, view, allFormContent);
};

const validationStep2 = (evt) => {
  evt.preventDefault();

  const form2Container = document.querySelector('.add-person__circle-container');
  const content = evt.target;
  const formData = new FormData(content);
  if (formData.getAll('person_circle').length <= 0) {
    form2Container.classList.add('add-person__circle-container--required');
  }
};

export default class AddPersonPresenter {
  #modalPresenter = null;
  nextStep =
    {
      view: AddPerson2View,
      cb: startSecondStep,
      validation: validationStep2,
      content: {
        avatarPath: 'img', // TODO
      }
    };

  constructor(circleMainContainer) {
    this.#modalPresenter = new ModalPresenter(circleMainContainer, this.nextStep);
  }

  init() {
    this.#onAvatarChange();
    this.#onNextStep();
  }

  onAddPersonClick = (evt) => {
    evt.preventDefault();
    this.#modalPresenter.onModalClick(evt, AddPersonView, this.nextStep);
    this.#modalPresenter.init();
    this.init();
  };

  #onAvatarChange = () => {
    const avatarInputElement = document.querySelector(
      '.add-person__avatar-input'
    );
    const avatarLabelElement = document.querySelector(
      '.add-person__avatar-label'
    );
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

  #onNextStep = () => {
    this.#modalPresenter.startNextStep(this.validationStep1, AddPerson2View);
  };

  validationStep1 = (evt) => {
    evt.preventDefault();

    const content = evt.target;
    const formData = new FormData(content);
    this.nextStep.content.avatarPath = formData.get('avatar');
    return formData;
  };
}


