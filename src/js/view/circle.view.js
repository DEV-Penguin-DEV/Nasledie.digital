import AbstractView from './abstract.view.js';
import { MEDIA_MOBILE_SIZE } from '../const.js';

const periods = ['1978 - 1982', '1937-1955', '1937-1955', '1937-1955'];

const generatePeriodsItems = (currentPeriodId) => {
  let result = '';
  periods.forEach((period, i) => {
    result += `<li class="periods-menu__item">
        <button class="periods-menu__button ${currentPeriodId === i ? 'periods-menu__button--active' : ''} button--white">${period}</button>
      </li>`;
  });
  return result;
};

const geneatePeriods = (isEditing, currentPeriodId) => {
  if (!MEDIA_MOBILE_SIZE.matches) {
    return `<ul class="circles-main__periods periods-menu">
    ${generatePeriodsItems(currentPeriodId)
}
      ${isEditing ? `<button class="periods-menu__button--icon periods-menu__button--edit button--white--icon">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0848 5.73218C19.6697 5.31707 18.9966 5.31707 18.5815 5.73218L6.47444 17.8393L5.91256 20.0868L8.16007 19.5249L20.2671 7.41781C20.6823 7.0027 20.6823 6.32967 20.2671 5.91456L20.0848 5.73218ZM17.0783 4.22893C18.3236 2.98359 20.3427 2.98359 21.588 4.22893L21.7704 4.4113C23.0157 5.65664 23.0157 7.67573 21.7704 8.92107L9.45514 21.2363C9.31891 21.3726 9.14822 21.4692 8.96131 21.5159L4.70946 22.5789C4.34723 22.6695 3.96405 22.5633 3.70003 22.2993C3.43601 22.0353 3.32987 21.6521 3.42043 21.2899L4.48339 17.038C4.53012 16.8511 4.62676 16.6804 4.76299 16.5442L17.0783 4.22893Z" fill="#B7BDCE"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3914 5.91485C15.8065 5.49974 16.4796 5.49974 16.8947 5.91485L20.0836 9.10374C20.4987 9.51885 20.4987 10.1919 20.0836 10.607C19.6684 11.0221 18.9954 11.0221 18.5803 10.607L15.3914 7.41811C14.9763 7.00299 14.9763 6.32996 15.3914 5.91485Z" fill="#B7BDCE"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9551 21.5493C12.9551 20.9622 13.431 20.4863 14.018 20.4863H22.5217C23.1088 20.4863 23.5847 20.9622 23.5847 21.5493C23.5847 22.1363 23.1088 22.6123 22.5217 22.6123H14.018C13.431 22.6123 12.9551 22.1363 12.9551 21.5493Z" fill="#B7BDCE"></path>
        </svg>
      </button>` : ''
}
    </ul>`;
  } else {
    return '';
  }
};

const generateUserAvatar = () => {
  if (MEDIA_MOBILE_SIZE.matches) {
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

const circleTemplate = (isEditing, currentPeriodId) => (`
<main class="circles-main circles-main--circle-view-2">
  ${geneatePeriods(isEditing, currentPeriodId)}
  <div class="circles-main__circles-container">
    <div class="circles-main__circle circle circle--4 circles-main__ceil--content">
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
    </div>

    <div class="circles-main__circle circle circle--3 circles-main__ceil--content">
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
    </div>

    <div class="circles-main__circle circle circle--2 circles-main__ceil--content">
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--8">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--9">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--10">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--11">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--12">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--13">
      </div>
    </div>

    <div class="circles-main__circle circle circle--1 circles-main__ceil--content">
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--1">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--2">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--3">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--4">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--5">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--6">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--7">
      </div>
      <div class="circle__img-container">
        <img src="img/person-avatar.png" width="31" height="31" alt="Name." class="circle__img circle__img--8">
      </div>
    </div>

    ${generateUserAvatar()}
  </div>

</main>
`);

export default class CircleView extends AbstractView {
  constructor(isEditing, currentPeriodId) {
    super();
    this.isEditing = isEditing;
    this.currentPeriodId = currentPeriodId;
  }

  get template() {
    return circleTemplate(this.isEditing, this.currentPeriodId);
  }
}
