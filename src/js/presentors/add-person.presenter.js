import ModalPresenter from './modal.presenter.js';
import AddPersonView from '../view/add-person.view.js';
import AddPerson2View from '../view/add-person-2.view.js';
import AddPerson3View from '../view/add-person-3.view.js';
import AddPersonSuccesfulView from '../view/add-person-succesful.view.js';
import { findAncestor } from '../utils.js';
import { startSelects } from '../functions/selects.js';
import { DEFAULT_AVATAR_PATH, ROOT_ELEMENT, TEST_SEARCHING_PERSON_LIST } from '../const.js';
import { render } from '../render.js';
import SearchingListView from '../view/searching-list.view.js';
import AddCreatedPersonView from '../view/add-created-person.view.js';

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
  modalPresenter.onModalClick(event, view, null);
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
      (eventMain, closeModalWindow) => {
        render(new AddPersonSuccesfulView(allFormContent[0]), ROOT_ELEMENT);
        const avatarFile = allFormContent[0].get('avatar');
        const avatarImg = document.querySelector('.add-person--succesful__img');
        const fileReader = new FileReader();
        fileReader.onload = (evt) => {
          avatarImg.src = evt.target.result === 'data:' ? DEFAULT_AVATAR_PATH : evt.target.result;
        };
        fileReader.readAsDataURL(avatarFile);
        document.querySelector('.modal__succesful-button').addEventListener('click', () => closeModalWindow(eventMain));
      }
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
    this.circleMainContainer = circleMainContainer;
  }

  init() {
    this.#onAvatarChange();
    this.#onNameChange();
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

  #onNameChange = () => {
    const fioInputElements = document.querySelectorAll('.add-person__input--fio');
    const users = TEST_SEARCHING_PERSON_LIST;

    fioInputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        setTimeout(() => {
          if (inputElement.value.length >= 2) {
            const value = inputElement.value;
            if (value.length > 0) {
              const sortedUsers = [];
              users.forEach((elem, index) => {
                const regex = new RegExp(`^${value}`, 'i');
                // eslint-disable-next-line no-nested-ternary
                const elemText = inputElement.classList.contains('add-person__input--name') ? elem.name : inputElement.classList.contains('add-person__input--surname') ? elem.surname : elem.fatherName;
                if (elemText.match(regex)) {
                  sortedUsers.push(users[index]);
                }
              });
              const searchingElementOld = document.querySelector('.added-person');
              searchingElementOld.remove();

              const searchingElementNew = new SearchingListView(sortedUsers).element;
              searchingElementNew.style.zIndex = 105;
              searchingElementNew.classList.add('added-person--active');
              findAncestor(inputElement, 'add-person__input-container').append(searchingElementNew);
            }
          } else {
            const searchingElementOld = document.querySelector('.added-person');
            searchingElementOld.remove();

            const searchingElementNew = new SearchingListView(users).element;
            searchingElementNew.style.zIndex = 105;
            searchingElementNew.classList.add('added-person--active');
            findAncestor(inputElement, 'add-person__input-container').append(searchingElementNew);
          }
        }, 150);
      });

      inputElement.addEventListener('focus', () => {
        const searchingElement = new SearchingListView(users).element;
        findAncestor(inputElement, 'add-person__input-container').append(searchingElement);

        searchingElement.style.zIndex = 105;
        setTimeout(() => {
          searchingElement.classList.add('added-person--active');
        }, 150);
        searchingElement.addEventListener('click', (evt) => {
          const clickedElement = evt.target.classList.contains('added-person__person') ? evt.target : findAncestor(evt.target, 'added-person__person');


          if (clickedElement !== null) {
            const name = clickedElement.querySelector('.name').textContent;
            const surname = clickedElement.querySelector('.surname').textContent;
            const fatherName = clickedElement.querySelector('.father-name').textContent;
            const image = clickedElement.querySelector('.added-person__person-avatar').src;

            document.querySelector('.add-person__input--name').value = name;
            document.querySelector('.add-person__input--surname').value = surname;
            document.querySelector('.add-person__input--father-name').value = fatherName;
            document.querySelector('.add-person__avatar-img').value = image;

            const formData = new FormData(document.querySelector('.add-person--step-1__form'));

            const AddedPersonNextStep = {
              view: AddPerson2View,
              cb: startSecondStep,
              validation: validationStep2,
            };
            const addedPersonModalPresenter = new ModalPresenter(
              document.querySelector('.modal-container'),
              AddedPersonNextStep
            );
            addedPersonModalPresenter.onModalClick(evt, AddCreatedPersonView, null);
            addedPersonModalPresenter.closeModalWindowStep('.add-created-person--step-1', [formData]);
            addedPersonModalPresenter.startNextStep(this.validationStep1, [formData]);
          }
        });
      });

      inputElement.addEventListener('blur', () => {
        const searchingElement = document.querySelector('.added-person');
        searchingElement.classList.remove('added-person--active');

        setTimeout(() => {
          searchingElement.remove();
        }, 1000);
      });
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
