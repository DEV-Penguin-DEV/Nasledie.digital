import AbstractView from './abstract.view.js';

const circleTemplate = () => (`
<main class="circles-main circles-main--table">
  <div class="circles-main__row circles-main__row--title">
    <div class="circles-main__ceil circles-main__ceil--title">
      <img src="img/user-avatar.png" alt="Name." width="50" height="50" class="circles-main__user-avatar" />
    </div>
    <div class="circles-main__ceil">
      <p class="circles-main__period">1937-1955</p>
    </div>
    <div class="circles-main__ceil">
      <p class="circles-main__period">1956 - 1990</p>
    </div>
    <div class="circles-main__ceil">
      <p class="circles-main__period">1991-2018</p>
    </div>
  </div>

  <div class="circles-main__row">
    <div class="circles-main__ceil circles-main__ceil--title">
      <p class="circles-main__circle">1 круг</p>
    </div>
    <div class="circles-main__ceil circles-main__ceil--content">
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3" />
      </div>
      <div class="circle__img-container" draggable="true">
         <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--8" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--9" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--10" />
      </div>
    </div>
    <div class="circles-main__ceil circles-main__ceil--content"></div>
    <div class="circles-main__ceil circles-main__ceil--content"></div>
  </div>

  <div class="circles-main__row">
    <div class="circles-main__ceil circles-main__ceil--title">
      <p class="circles-main__circle">2 круг</p>
    </div>
    <div class="circles-main__ceil circles-main__ceil--content"></div>
    <div class="circles-main__ceil circles-main__ceil--content">
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3" />
      </div>
    </div>
    <div class="circles-main__ceil circles-main__ceil--content"></div>
  </div>

  <div class="circles-main__row">
    <div class="circles-main__ceil circles-main__ceil--title">
      <p class="circles-main__circle">3 круг</p>
    </div>
    <div class="circles-main__ceil circles-main__ceil--content">
       <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3" />
      </div>
    </div>
    <div class="circles-main__ceil circles-main__ceil--content"></div>
    <div class="circles-main__ceil circles-main__ceil--content"></div>
  </div>

  <div class="circles-main__row">
    <div class="circles-main__ceil circles-main__ceil--title">
      <p class="circles-main__circle">4 круг</p>
    </div>
    <div class="circles-main__ceil circles-main__ceil--content"></div>
    <div class="circles-main__ceil circles-main__ceil--content"></div>
    <div class="circles-main__ceil circles-main__ceil--content">
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2" />
      </div>
      <div class="circle__img-container" draggable="true">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3" />
      </div>
    </div>
  </div>
</main>
`);

export default class CircleTableView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return circleTemplate();
  }
}
