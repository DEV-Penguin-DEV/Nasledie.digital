import { PATH_BASE } from '../const.js';
import AbstractView from './abstract.view.js';

const generateUsersList = (users) => {
  let result = '';
  users.forEach((user, i) => {
    const name = user.name;
    const surname = user.surname;
    const fatherName = user.fatherName;

    result += `<li class="added-person__person" data-userId="${i}">
      <img src="${PATH_BASE}/avatar.png" alt="" class="added-person__person-avatar">
      <p class="added-person__person-name"><span class="surname">${surname}</span> <span class="name">${name}</span> <span class="father-name">${fatherName}</span></p>
    </li>`;
  });

  return result;
};

const searchingListTemplate = (users) => (`
<div class="added-person">
  <ul class="added-person__list">
    ${generateUsersList(users)}
  </ul>
</div>
`);

export default class SearchingListView extends AbstractView {
  constructor(users) {
    super();
    this.users = users;
  }

  get template() {
    return searchingListTemplate(this.users);
  }
}
