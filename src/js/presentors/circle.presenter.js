import { render, RenderPosition } from '../render';
import { startPositions } from '../functions/circles';
import { startSelects } from '../functions/selects';
import CircleView from '../view/circle.view.js';
import HeaderView from '../view/header.view.js';
import CircleContainerView from '../view/circle-container.view.js';
import { View } from '../const';
import CircleTableView from '../view/circle-table.view.js';
import { findAncestor } from '../utils';
import HeaderEditingView from '../view/header-editing.view.js';
import { startDropDrag } from '../functions/drop-drag.js';
import CircleMobileEditorView from '../view/circle-mobile-editor.view.js';
import { MEDIA_MOBILE_SIZE } from '../const';
import PeriodsPresenter from './periods.presenter.js';
import AddPersonPresenter from './add-person.presenter';

export default class CirclePresenter {
  selectedView = View.CIRCLES;
  isEditing = false;
  currentPeriodId = 0;
  circleView = new CircleView(this.isEditing, this.currentPeriodId);
  #circleContainer = new CircleContainerView();
  #circleTableView = new CircleTableView();
  #circleMainContainer = null;
  #periodsPresenter = null;
  #personGroupPresenter = null;
  #addPersonPresenter = null;


  constructor(circleMainContainer, personGroupPresenter) {
    this.#personGroupPresenter = personGroupPresenter;
    this.#circleMainContainer = circleMainContainer;
    this.#periodsPresenter = new PeriodsPresenter(this.currentPeriodId, this.renderCircle, this.#circleMainContainer);
    this.#addPersonPresenter = new AddPersonPresenter(this.#circleMainContainer);
  }


  init() {
    render(this.#circleContainer, this.#circleMainContainer);
    const circleContainerElement = document.querySelector('.circles');

    this.#renderHeader(circleContainerElement);

    this.renderCircleBlock(circleContainerElement);
  }

  // Render Circle view
  renderCircle = (container, currentPeriodId = this.currentPeriodId) => {
    this.currentPeriodId = currentPeriodId;
    this.circleView = new CircleView(this.isEditing, currentPeriodId);
    render(this.circleView, container);

    this.#periodsPresenter.init();
    if (!MEDIA_MOBILE_SIZE.matches) {
      startPositions();

      if (this.isEditing) {
        const periodsEditElement = document.querySelector('.periods-menu__button--edit');
        periodsEditElement.addEventListener('click', this.#periodsPresenter.onEditPeriodsClick);
      }
    }
  };

  // Render table view
  #renderCircleTable(container) {
    render(this.#circleTableView, container);
    startPositions();
  }

  //Render Header
  #renderHeader(container) {
    if (!MEDIA_MOBILE_SIZE.matches) {
      if (!this.isEditing) {
        render(new HeaderView(), container, RenderPosition.AFTERBEGIN);
        const editorButton = document.querySelector('.circles-header__editor');
        editorButton.addEventListener('click', this.#onEditorClick);
        startSelects();

        // Add person button
        const addPersonElement = document.querySelector('.add-person-header');
        addPersonElement.addEventListener('click', this.#addPersonPresenter.onAddPersonClick);
      } else {
        render(new HeaderEditingView(), container, RenderPosition.AFTERBEGIN);

        // Save edits
        const saveButton = document.querySelector('.circles-header__save');
        saveButton.addEventListener('click', this.#onEditorClick);

        // Close editing mode
        const closedButton = document.querySelector('.circles-header__cansel');
        closedButton.addEventListener('click', this.#onEditorClick);

        // Person group button
        const personGroupEditElement = document.querySelector('.filters--editing__button--icon');
        personGroupEditElement.addEventListener('click', this.#personGroupPresenter.onPersoneGroupClick);
      }
      const viewList = document.querySelector('.circles-header__view-list');
      viewList.addEventListener('click', this.#onViewClick);
    } else {
      render(new HeaderView(), container, RenderPosition.AFTERBEGIN);

      const viewList = document.querySelector('.top-menu__button-editor');
      viewList.addEventListener('click', this.#onMobileEditorClick);
    }

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
    if (this.isEditing) {
      this.selectedView = View.CIRCLES;
    } else {
      const personGroupEditElement = document.querySelector('.filters--editing__button--icon');
      if (personGroupEditElement !== undefined) {
        personGroupEditElement.removeEventListener('click', this.#personGroupPresenter.onPersoneGroupClick);
      }
    }
    const circleContainerElement = document.querySelector('.circles');
    document.querySelector('.circles-header').remove();
    document.querySelector('.circles-main').remove();
    this.#renderHeader(circleContainerElement);
    this.#circleTableView = new CircleTableView();
    this.renderCircleBlock(circleContainerElement);
  };

  #onMobileEditorClick = () => {
    const circleContainerElement = document.querySelector('.circles');
    document.querySelector('.top-menu').remove();
    document.querySelector('.circles-main').remove();
    render(new CircleMobileEditorView(), circleContainerElement);

    // on cansel button click
    const canselButton = document.querySelector('.top-menu__cansel-button');
    canselButton.addEventListener('click', () => {
      circleContainerElement.innerHTML = '';

      // render no editing version of view
      this.#renderHeader(circleContainerElement);
      this.renderCircleBlock(circleContainerElement);
    });

    // on Save button click
    const saveButton = document.querySelector('.top-menu__save');
    saveButton.addEventListener('click', () => {
      circleContainerElement.innerHTML = '';

      // render no editing version of view
      this.#renderHeader(circleContainerElement);
      this.renderCircleBlock(circleContainerElement);
    });
  };

  // Render main content
  renderCircleBlock = (container) => {
    if (this.selectedView === View.CIRCLES) {
      this.renderCircle(container);
    } else {
      this.#renderCircleTable(container);
    }

    if (this.isEditing) {
      if (this.selectedView === View.CIRCLES) {
        startDropDrag(true);
      } else {
        startDropDrag();
      }
    }
  };
}
