import AbstractView from './abstract-view';

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
