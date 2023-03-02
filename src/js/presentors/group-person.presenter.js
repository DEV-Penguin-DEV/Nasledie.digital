import ModalPresenter from './modal.presenter.js';
import AddPersoneGroupView from '../view/add-person-group.view.js';
import EditPersoneGroupView from '../view/edit-person-group.view.js';

export default class PersoneGroupPresenter {
  #modalPresenter = null;

  constructor(circleMainContainer) {
    this.#modalPresenter = new ModalPresenter(circleMainContainer);
  }

  init() {

  }

  onPersoneGroupElementClick = (evt) => {
    evt.preventDefault();
    this.#modalPresenter.onModalClick(evt, EditPersoneGroupView);
    this.#modalPresenter.init();
    this.#modalPresenter.closeModalWindowStep('.modal-container-person-group-edit');
  };

  onPersoneGroupClick = (evt) => {
    this.#modalPresenter.onModalClick(evt, AddPersoneGroupView);
    const editPersoneGroupButtons = document.querySelectorAll('.added-group__edit');

    editPersoneGroupButtons.forEach((editPersoneGroupButton) => {
      editPersoneGroupButton.addEventListener('click', this.onPersoneGroupElementClick);
    });
  };


}

