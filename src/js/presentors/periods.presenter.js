import ModalPresenter from './modal.presenter.js';
import EditPeriodsView from '../view/edit-periods.view.js';

export default class PeriodsPresenter {
  #modalPresenter = null;

  constructor(currentPeriodId, renderCircle, circleMainContainer) {
    this.currentPeriodId = currentPeriodId;
    this.renderCircle = renderCircle;
    this.#modalPresenter = new ModalPresenter(circleMainContainer);
  }

  init() {
    this.onPeriodsClick();
  }

  onPeriodsClick = () => {
    const periodsButtonElements = document.querySelectorAll('.periods-menu__button');

    periodsButtonElements.forEach((periodButton, i) => {
      periodButton.addEventListener('click', () => {
        if (!periodButton.classList.contains('periods-menu__button--active')) {
          const circleContainerElement = document.querySelector('.circles');
          const circleMainContainerElement = document.querySelector('.circles-main');
          circleMainContainerElement.remove();
          this.renderCircle(circleContainerElement, i);
        }
      });
    });
  };

  onEditPeriodsClick = (evt) => {
    this.#modalPresenter.onModalClick(evt, EditPeriodsView);
  };
}

