import CircleTextView from '../view/circle-text.view.js';
import MoreInfoModalView from '../view/more-info-modal.view.js';
import { removeWithHide } from '../utils.js';

const mobile = window.matchMedia('(max-width: 750px)');

const TOTAL_DEG_1 = 220;
const TOTAL_DEG_2 = 200;
const TOTAL_DEG_3 = 190;
const TOTAL_DEG_4 = 165;

const imgContainersFor = (imgContainers, deg, firstObjectCoefficient,) => {
  imgContainers.forEach((imgContainer, i) => {
    imgContainer.style.transform = `rotate(${(deg / (imgContainers.length - 1)) * (i - firstObjectCoefficient)
    }deg)`;

    imgContainer.querySelector('.circle__img').style.transform = `rotate(${(deg / (imgContainers.length - 1)) * (i - firstObjectCoefficient) * -1
    }deg)`;
  });
};

export const startPositions = () => {
  const circles = document.querySelectorAll('.circle');
  circles.forEach((circle) => {
    const imgContainers = circle.querySelectorAll('.circle__img-container');
    if (!mobile.matchMedia) {
      if (circle.classList.contains('circle--3')) {
        imgContainersFor(imgContainers, TOTAL_DEG_3, 0.1);
      } else if (circle.classList.contains('circle--1')) {
        imgContainersFor(imgContainers, TOTAL_DEG_1, 0.7);
      } else if (circle.classList.contains('circle--2')) {
        imgContainersFor(imgContainers, TOTAL_DEG_2, 0.45);
      } else if (circle.classList.contains('circle--4')) {
        imgContainersFor(imgContainers, TOTAL_DEG_4, -0.3);
      }
    }
  });

  const images = document.querySelectorAll('.circle__img');
  images.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    const imageLeft = image.getBoundingClientRect().left;

    image.addEventListener('mouseover', () => {
      const textElement = new CircleTextView( `${image.dataset.name} ${image.dataset.surname}`).element;
      document.querySelector('#circles').appendChild(textElement);
      textElement.style.top = `${imageTop - 45}px`;
      textElement.style.left = `${imageLeft - (textElement.offsetWidth / 2.9)}px`;
    });
    image.addEventListener('mouseout', () => {
      const textElements = document.querySelectorAll('.circle__img-text');
      textElements.forEach((textElement) => {
        textElement.classList.add('hide');
        setTimeout(() => {
          textElement.remove();
        }, 400);
      });
    });
    image.addEventListener('click', () => {
      document.querySelectorAll('.more-info-modal').forEach((el) => {
        removeWithHide(el);
      });
      const moreInfoElement = new MoreInfoModalView(`${image.dataset.name} ${image.dataset.father_name} ${image.dataset.surname}`, image.src, image.dataset.description).element;
      document.querySelector('#circles').appendChild(moreInfoElement);
      moreInfoElement.style.top = `${imageTop - (moreInfoElement.offsetHeight / 2)}px`;
      moreInfoElement.style.left = `${imageLeft + 15 + image.offsetWidth}px`;

      const closedButton = moreInfoElement.querySelector('.more-info-modal__button--closed');
      closedButton.addEventListener('click', () => {
        removeWithHide(moreInfoElement);
      });

      const navItems = moreInfoElement.querySelectorAll('.more-info-modal__menu-item');
      const moreInfoWindows = moreInfoElement.querySelectorAll('.more-info-modal__window');
      navItems.forEach(((navItem, i) => {
        navItem.addEventListener('click', () => {
          navItems.forEach((el, index) => {
            el.classList.remove('more-info-modal__menu-item--active');
            moreInfoWindows[index].classList.remove('more-info-modal__window--active');
          });
          navItem.classList.add('more-info-modal__menu-item--active');
          moreInfoWindows[i].classList.add('more-info-modal__window--active');
        });
      }));
    });
  });
};
