import CirclePresenter from './circle.presenter.js';
import ModalPresenter from './modal.presenter.js';

export default class AppPresenter {
  // #model = null;
  #circlePresenter = null;
  #modalPresenter = null;
  #circleMainContainer = null;

  constructor(circleMainContainer) {
    this.#circleMainContainer = circleMainContainer;
    this.#modalPresenter = new ModalPresenter(circleMainContainer);
    this.#circlePresenter = new CirclePresenter(circleMainContainer, this.#modalPresenter);
    // this.#model = model;
    // model.addObserver(this.#handleModelEvent);
  }

  // get points() {
  //   return this.#model.circlePoints;
  // }

  init() {
    this.#renderBoard();
  }

  // #handleViewAction = (actionType, updateType, update) => {
  //   switch (actionType) {
  //     case UserAction.UPDATE_POINT:
  //       this.#model.updatePoint(updateType, update);
  //       break;
  //     case UserAction.ADD_POINT:
  //       this.#model.addPoint(updateType, update);
  //       break;
  //     case UserAction.DELETE_POINT:
  //       this.#model.deletePoint(updateType, update);
  //       break;
  //   }
  // };

  // #handleModelEvent = (updateType, data) => {
  //   switch (updateType) {
  //     case UpdateType.PATCH:
  //       this.#pointsPresentors.get(Number(data.id)).init(data);
  //       break;
  //     case UpdateType.MINOR:
  //       this.clearPoints();
  //       this.#renderBoard();
  //       break;
  //     case UpdateType.MAJOR:
  //       this.clearPoints();
  //       this.#renderBoard();
  //       break;
  //   }
  // };

  clearPoints = () => {};

  #renderBoard() {
    this.#circlePresenter.init();
    this.#modalPresenter.init();
  }
}
