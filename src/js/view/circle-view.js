import AbstractView from './abstract-view';
const mediaQueryMobile = window.matchMedia('(max-width: 750px)');

const geneatePeriods = () => {
  if (!mediaQueryMobile.matches) {
    return `<ul class="circles-main__periods periods-menu">
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
    </ul>`;
  } else {
    return '';
  }
};

const generateUserAvatar = () => {
  if (mediaQueryMobile.matches) {
    return `
    <div class="circles-main__user-avatar-container">
      <img src="img/user-avatar.png" alt="Name." width="100" height="100" class="circles-main__user-avatar">
      <button class="circles-main__user-avatar-plus button--green button--green--icon" type="button">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="5" width="2" height="12" rx="1" transform="rotate(90 12 5)" fill="white" />
          <rect x="12" y="5" width="2" height="12" rx="1" transform="rotate(90 12 5)" fill="white" />
          <rect x="7" y="12" width="2" height="12" rx="0.999999" transform="rotate(180 7 12)" fill="white" />
          <rect x="7" y="12" width="2" height="12" rx="0.999999" transform="rotate(180 7 12)" fill="white" />
        </svg>
      </button>
    </div>
    `;
  } else {
    return '<img src="img/user-avatar.png" alt="Name." width="100" height="100" class="circles-main__user-avatar">';
  }
};

const circleTemplate = () => (`
<main class="circles-main circles-main--circle-view-2">
  ${geneatePeriods()}
  <div class="circles-main__circles-container">
    <div class="circles-main__circle circle circle--4 circles-main__ceil--content">
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

    <div class="circles-main__circle circle circle--3 circles-main__ceil--content">
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

    <div class="circles-main__circle circle circle--2 circles-main__ceil--content">
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

    <div class="circles-main__circle circle circle--1 circles-main__ceil--content">
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

    ${generateUserAvatar()}
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
