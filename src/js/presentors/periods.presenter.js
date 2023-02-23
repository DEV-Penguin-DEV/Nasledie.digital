export default class PeriodsPresenter {
  constructor(currentPeriodId, renderCircle) {
    this.currentPeriodId = currentPeriodId;
    this.renderCircle = renderCircle;
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
}

