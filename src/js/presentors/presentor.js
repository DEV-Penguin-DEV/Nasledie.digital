import CirclePresenter from './circle-presentor';

export default class AppPresenter {
  // #model = null;
  #circlePresentor = null;
  #circleMainContainer = null;

  constructor(circleMainContainer) {
    this.#circleMainContainer = circleMainContainer;
    this.#circlePresentor = new CirclePresenter(this.#circleMainContainer);
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

  clearPoints = () => {
  };

  #renderBoard() {
    this.#circlePresentor.init();
  }
}
