import { render, RenderPosition } from '../render';
import { startPositions } from '../functions/circles';
import { startSelects } from '../functions/selects';
import CircleView from '../view/circle-view';
import HeaderView from '../view/header-view';
import CircleContainerView from '../view/circle-container-view';
import { View } from '../const';
import CircleTableView from '../view/circle-table-view';
import { findAncestor } from '../utils';
import HeaderEditingView from '../view/header-editing-view';
import { startDropDrag } from '../functions/drop-drag.js';

export default class CirclePresenter {
  selectedView = View.CIRCLES;
  isEditing = false;
  #circleView = new CircleView();
  #headerView = new HeaderView();
  #headerEditingView = new HeaderEditingView();
  #circleContainer = new CircleContainerView();
  #circleTableView = new CircleTableView;
  #circleMainContainer = null;

  constructor(circleMainContainer) {
    this.#circleMainContainer = circleMainContainer;
  }


  init() {
    render(this.#circleContainer, this.#circleMainContainer);
    const circleContainerElement = document.querySelector('.circles');

    this.#renderHeader(circleContainerElement);

    this.renderCircleBlock(circleContainerElement);
  }

  // Render Circle view
  #renderCircle(container) {
    render(this.#circleView, container);
    startPositions();
  }

  // Render table view
  #renderCircleTable(container) {
    render(this.#circleTableView, container);
    startPositions();
  }

  //Render Header
  #renderHeader(container) {
    if (!this.isEditing) {
      render(this.#headerView, container, RenderPosition.AFTERBEGIN);
      const editorButton = document.querySelector('.circles-header__editor');
      editorButton.addEventListener('click', this.#onEditorClick);
      startSelects();
    } else {
      render(this.#headerEditingView, container, RenderPosition.AFTERBEGIN);
      const saveButton = document.querySelector('.circles-header__save');
      saveButton.addEventListener('click', this.#onEditorClick);

      const closedButton = document.querySelector('.circles-header__cansel');
      closedButton.addEventListener('click', this.#onEditorClick);
    }
    const viewList = document.querySelector('.circles-header__view-list');
    viewList.addEventListener('click', this.#onViewClick);
  }

  //On view change
  #onViewClick = (evt) => {
    const viewButton = evt.target.classList.contains('view-list__button') ? evt.target : findAncestor(evt.target, 'view-list__button');
    const circleContainerElement = document.querySelector('.circles');

    if (viewButton.classList.contains('view-list__button--circle') && this.selectedView !== View.CIRCLES) {
      this.selectedView = View.CIRCLES;
      document.querySelector('.circles-main').remove();
      this.renderCircleBlock(circleContainerElement);
    } else if (viewButton.classList.contains('view-list__button--table') && this.selectedView !== View.TABLE) {
      this.selectedView = View.TABLE;
      document.querySelector('.circles-main').remove();
      this.renderCircleBlock(circleContainerElement);
    }
  };

  // Editing mode
  #onEditorClick = () => {
    this.isEditing = !this.isEditing;
    const circleContainerElement = document.querySelector('.circles');
    document.querySelector('.circles-header').remove();
    this.#renderHeader(circleContainerElement);
  };

  // Render main content
  renderCircleBlock = (container) => {
    if(this.selectedView === View.CIRCLES) {
      this.#renderCircle(container);
      startDropDrag(true);
      console.log('1');
    } else {
      this.#renderCircleTable(container);
      startDropDrag();
    }
  };
}
