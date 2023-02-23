import AbstractView from './abstract.view.js';

const circleContainerTemplate = () => (`
<section class="circles">
</section>
`);

export default class CircleContainerView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return circleContainerTemplate();
  }
}
