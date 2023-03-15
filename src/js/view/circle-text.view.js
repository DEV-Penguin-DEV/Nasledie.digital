import AbstractView from './abstract.view.js';

const circleTextTemplate = (name) => (`
<p class="circle__img-text">${name}</p>
    `);

export default class CircleTextView extends AbstractView {
  constructor(name) {
    super();
    this.name = name;
  }

  get template() {
    return circleTextTemplate(this.name);
  }
}
