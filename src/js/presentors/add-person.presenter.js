import ModalPresenter from './modal.presenter.js';
import AddPersonView from '../view/add-person.view.js';
import AddPerson2View from '../view/add-person-2.view.js';
import AddPerson3View from '../view/add-person-3.view.js';
import AddPersonSuccesfulView from '../view/add-person-succesful.view.js';
import { findAncestor } from '../utils.js';
import { startSelects } from '../functions/selects.js';
import { DEFAULT_AVATAR_PATH } from '../const.js';

const startThirdStep = (
  event,
  ModalPresenter3,
  view,
  validation,
  allFormContent
) => {
  const modalPresenter = new ModalPresenter3(
    document.querySelector('.modal-container')
  );
  modalPresenter.onModalClick(event, view);
  modalPresenter.closeModalWindowStep('.add-person--step-3', [allFormContent]);

  startSelects();

  const step3Inputs = document.querySelectorAll(
    '.add-person__all-periods__input'
  );

  const isEveryInputNoChecked = (inputs) => {
    let isAllUnChecked = true;
    inputs.forEach((input) => {
      if (input.checked) {
        isAllUnChecked = false;
      }
    });
    const buttonNext = document.querySelector('.add-person__button-next--3');
    if (isAllUnChecked) {
      buttonNext.textContent = 'Пропустить';
      buttonNext.classList.add('add-person__button-next--3-skip');
    }
  };

  step3Inputs.forEach((input) => {
    isEveryInputNoChecked(step3Inputs);
    // Checking is input checked to do opacity style for select
    input.addEventListener('change', () => {
      const select = findAncestor(
        input,
        'add-person__all-periods-item'
      ).querySelector('.add-person__all-periods__filers');
      const buttonNext = document.querySelector('.add-person__button-next--3');

      if (!input.checked) {
        select.classList.add('add-person__all-periods__filers--unchecked');
        isEveryInputNoChecked(step3Inputs);
      } else {
        select.classList.remove('add-person__all-periods__filers--unchecked');
        if (buttonNext.classList.contains('add-person__button-next--3-skip')) {
          buttonNext.textContent = 'Далее';
          buttonNext.classList.remove('add-person__button-next--3-skip');
        }
      }
    });

    modalPresenter.startNextStep(
      validation,
      allFormContent,
      true,
      AddPersonSuccesfulView,
      document.querySelector('#circles')
    );
  });
};

const validationStep3 = (evt) => {
  evt.preventDefault();

  return new FormData(evt.target);
};


// 2 STEP CallBack
const startSecondStep = (
  event,
  ModalPresenter2,
  view,
  validation,
  allFormContent
) => {
  const nextStep = {
    view: AddPerson3View,
    cb: startThirdStep,
    validation: validationStep3,
  };
  const modalPresenter = new ModalPresenter2(
    document.querySelector('.modal-container'),
    nextStep
  );
  modalPresenter.onModalClick(event, view);
  const avatarFile = allFormContent[0].get('avatar');
  const avatarImg = document.querySelector('.add-person__circle-img');
  const fileReader = new FileReader();
  fileReader.onload = (evt) => {
    avatarImg.src = evt.target.result === 'data:' ? DEFAULT_AVATAR_PATH : evt.target.result;
  };
  fileReader.readAsDataURL(avatarFile);
  modalPresenter.closeModalWindowStep('.add-person--step-2', [allFormContent]);
  const inputs = document.querySelectorAll('.add-person__circle-input');
  const form2Container = document.querySelector(
    '.add-person__circle-container'
  );
  const periodChoose = document.querySelector('.period-choose');

  inputs.forEach((input) => {
    input.addEventListener('change', (evt) => {
      if (
        document.querySelector('.add-person__circle-label--no-circle') !== null
      ) {
        document
          .querySelector('.add-person__circle-label--no-circle')
          .classList.remove('add-person__circle-label--no-circle');
      }

      form2Container.classList.remove('add-person__circle-container--required');
      periodChoose.classList.add('period-choose--shown');
      document
        .querySelectorAll('.add-person__circle-input-mini-avatar')
        .forEach((miniAvatarElm) => {
          miniAvatarElm.remove();
        });
      const inputContainer = findAncestor(
        evt.target,
        'add-person__circle-input-container'
      );
      inputContainer
        .querySelector('.add-person__circle-label')
        .classList.add('add-person__circle-label--no-circle');
      const miniAvatar = document.createElement('img');
      miniAvatar.src = avatarImg.src;
      miniAvatar.classList.add('add-person__circle-input-mini-avatar');
      inputContainer.append(miniAvatar);
    });
  });
  modalPresenter.startNextStep(validation, allFormContent);
};

const validationStep2 = (evt) => {

  evt.preventDefault();

  const form2Container = document.querySelector(
    '.add-person__circle-container'
  );
  const content = evt.target;
  const formData = new FormData(content);
  if (formData.getAll('person_circle').length <= 0) {
    form2Container.classList.add('add-person__circle-container--required');
    return false;
  } else {
    return formData;
  }
};

export default class AddPersonPresenter {
  #modalPresenter = null;
  nextStep = {
    view: AddPerson2View,
    cb: startSecondStep,
    validation: validationStep2,
  };

  allFormContent = [];

  constructor(circleMainContainer) {
    this.#modalPresenter = new ModalPresenter(
      circleMainContainer,
      this.nextStep
    );
  }

  init() {
    this.#onAvatarChange();
    this.#onNextStep();
  }

  onAddPersonClick = (evt) => {
    evt.preventDefault();
    this.#modalPresenter.onModalClick(evt, AddPersonView, this.nextStep.content) ;
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
    this.#modalPresenter.startNextStep(
      this.validationStep1,
      this.allFormContent
    );
  };

  validationStep1 = (evt) => {
    evt.preventDefault();

    const formContent = evt.target;
    const formData = new FormData(formContent);

    return formData;
  };
}
