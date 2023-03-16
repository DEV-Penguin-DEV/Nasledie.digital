import CircleTextView from '../view/circle-text.view.js';
import MoreInfoModalView from '../view/more-info-modal.view.js';
import { removeWithHide } from '../utils.js';
import ModalPresenter from '../presentors/modal.presenter.js';
import { ROOT_ELEMENT } from '../const.js';
import { startSelects } from './selects.js';
import MoreInfoModalEditView from '../view/more-info-modal-edit.view.js';
import EditPositionSuccesfulView from '../view/edit-position-succesful.view.js';
import { render } from '../render.js';
import EditPositionDeleteView from '../view/edit-position-delete.view.js';

const mobile = window.matchMedia('(max-width: 750px)');

const TOTAL_DEG_1 = 220;
const TOTAL_DEG_2 = 200;
const TOTAL_DEG_3 = 190;
const TOTAL_DEG_4 = 165;

const imgContainersFor = (imgContainers, deg, firstObjectCoefficient,) => {
  imgContainers.forEach((imgContainer, i) => {
    imgContainer.style.transform = `rotate(${(deg / (imgContainers.length - 1)) * (i - firstObjectCoefficient)
    }deg)`;

    imgContainer.querySelector('.circle__img').style.transform = `rotate(${(deg / (imgContainers.length - 1)) * (i - firstObjectCoefficient) * -1
    }deg)`;
  });
};

export const startPositions = () => {
  // Set Positions
  const circles = document.querySelectorAll('.circle');
  circles.forEach((circle) => {
    const imgContainers = circle.querySelectorAll('.circle__img-container');
    if (!mobile.matchMedia) {
      if (circle.classList.contains('circle--3')) {
        imgContainersFor(imgContainers, TOTAL_DEG_3, 0.1);
      } else if (circle.classList.contains('circle--1')) {
        imgContainersFor(imgContainers, TOTAL_DEG_1, 0.7);
      } else if (circle.classList.contains('circle--2')) {
        imgContainersFor(imgContainers, TOTAL_DEG_2, 0.45);
      } else if (circle.classList.contains('circle--4')) {
        imgContainersFor(imgContainers, TOTAL_DEG_4, -0.3);
      }
    }
  });

  // Functions
  const images = document.querySelectorAll('.circle__img');
  images.forEach((image) => {
    // ==== Hover - START ==== //
    image.addEventListener('mouseover', () => {
      const imageTop = image.getBoundingClientRect().top;
      const imageLeft = image.getBoundingClientRect().left;
      const textElement = new CircleTextView(`${image.dataset.name} ${image.dataset.surname}`).element;
      ROOT_ELEMENT.appendChild(textElement);
      textElement.style.top = `${imageTop - 45}px`;
      textElement.style.left = `${imageLeft - (textElement.offsetWidth / 2.9)}px`;
    });
    image.addEventListener('mouseout', () => {
      const textElements = document.querySelectorAll('.circle__img-text');
      textElements.forEach((textElement) => {
        textElement.classList.add('hide');
        setTimeout(() => {
          textElement.remove();
        }, 400);
      });
    });
    // ==== Hover - FINISH ==== //


    // ==== More info modal - START ==== //
    image.addEventListener('click', () => {
      const imageTop = image.getBoundingClientRect().top;
      const imageLeft = image.getBoundingClientRect().left;
      document.querySelectorAll('.more-info-modal').forEach((el) => {
        removeWithHide(el);
      });
      const moreInfoElement = new MoreInfoModalView(`${image.dataset.name} ${image.dataset.father_name} ${image.dataset.surname}`, image.src, image.dataset.description).element;
      ROOT_ELEMENT.appendChild(moreInfoElement);
      moreInfoElement.style.top = `${imageTop - (moreInfoElement.offsetHeight / 2)}px`;
      moreInfoElement.style.left = `${imageLeft + 15 + image.offsetWidth}px`;

      const closedButton = moreInfoElement.querySelector('.more-info-modal__button--closed');
      closedButton.addEventListener('click', () => {
        removeWithHide(moreInfoElement);
      });

      const navItems = moreInfoElement.querySelectorAll('.more-info-modal__menu-item');
      const moreInfoWindows = moreInfoElement.querySelectorAll('.more-info-modal__window');
      navItems.forEach(((navItem, i) => {
        navItem.addEventListener('click', () => {
          navItems.forEach((el, index) => {
            el.classList.remove('more-info-modal__menu-item--active');
            moreInfoWindows[index].classList.remove('more-info-modal__window--active');
          });
          navItem.classList.add('more-info-modal__menu-item--active');
          moreInfoWindows[i].classList.add('more-info-modal__window--active');
        });
      }));

      // Editing - START //
      const editButtonElement = moreInfoElement.querySelector('.more-info-modal__edit');

      editButtonElement.addEventListener('click', (evt) => {
        evt.preventDefault();
        const nextStep = {
          view: EditPositionSuccesfulView,
          cb: null,
          validation: null,
        };
        const modalPresenter = new ModalPresenter(ROOT_ELEMENT, nextStep);


        modalPresenter.onModalClick(evt, MoreInfoModalEditView, {name: `${image.dataset.name} ${image.dataset.father_name} ${image.dataset.surname}`, avatarPath: image.src}, () => removeWithHide(moreInfoElement)) ;
        modalPresenter.init();
        const form2Container = document.querySelector(
          '.edit-position__form'
        );
        const inputs = document.querySelectorAll('.add-person__all-periods__input');
        form2Container.classList.add('error');
        inputs.forEach((input) => {
          if (input.checked) {
            form2Container.classList.remove('error');
          }
          input.addEventListener('change', () => {
            form2Container.classList.add('error');
            inputs.forEach((inputEl) => {
              if (inputEl.checked) {
                form2Container.classList.remove('error');
              }
            });
          });

        });
        modalPresenter.startNextStep((event) => {
          event.preventDefault();

          const content = event.target;
          const formData = new FormData(content);
          return formData;

        }, [], true,
        (eventMain, closeModalWindow, formData) => {
          if (formData[0].getAll('circle').length > 0) {
            render(new EditPositionSuccesfulView(), ROOT_ELEMENT);
            document.querySelector('.modal__succesful-button').addEventListener('click', () => closeModalWindow(eventMain, removeWithHide(moreInfoElement)));
            document.querySelector('.modal__succesful-button--cancel').addEventListener('click', () => closeModalWindow(eventMain, removeWithHide(moreInfoElement)));
            document.querySelector('.modal__closed-button').addEventListener('click', () => closeModalWindow(eventMain, removeWithHide(moreInfoElement)));
          } else {
            render(new EditPositionDeleteView(), ROOT_ELEMENT);
            document.querySelector('.edit-position__save-window-button--delete').addEventListener('click', () => closeModalWindow(eventMain, removeWithHide(moreInfoElement)));
            document.querySelector('.modal__succesful-button--cancel').addEventListener('click', () => closeModalWindow(eventMain, removeWithHide(moreInfoElement)));
            document.querySelector('.modal__closed-button').addEventListener('click', () => closeModalWindow(eventMain, removeWithHide(moreInfoElement)));
          }
        });

        startSelects();
      });
      // Editing - FINISH //
    });
    // ==== More info modal - FINISH ==== //
  });
};
