import AbstractView from './abstract-view';

const circleTemplate = () => (`
<main class="circles-main circles-main--circle-view-2">
  <ul class="circles-main__periods periods-menu">
    <li class="periods-menu__item">
      <button class="periods-menu__button periods-menu__button--active button--white">1978 - 1982</button>
    </li>
    <li class="periods-menu__item">
      <button class="periods-menu__button button--white">1937-1955</button>
    </li>
    <li class="periods-menu__item">
      <button class="periods-menu__button button--white">1937-1955</button>
    </li>
    <li class="periods-menu__item">
      <button class="periods-menu__button button--white">1937-1955</button>
    </li>
  </ul>

  <div class="circles-main__circles-container">
    <div class="circles-main__circle circle circle--4">
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
    </div>

    <div class="circles-main__circle circle circle--3">
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
    </div>

    <div class="circles-main__circle circle circle--2">
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--8">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--9">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--10">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--11">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--12">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--13">
      </div>
    </div>

    <div class="circles-main__circle circle circle--1">
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
      <div class="circle__img-container">
        <img src="img/persone-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--8">
      </div>
    </div>

    <img src="img/user-avatar.png" alt="Name." width="100" height="100" class="circles-main__user-avatar">
  </div>

</main>
`);

export default class CircleView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return circleTemplate();
  }
}
