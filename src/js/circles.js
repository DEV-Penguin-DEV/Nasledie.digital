const circles = document.querySelectorAll('.circle');
const mobile = window.matchMedia('(max-width: 750px)');

const TOTAL_DEG_1 = 220;
const TOTAL_DEG_2 = 200;
const TOTAL_DEG_3 = 190;
const TOTAL_DEG_4 = 165;

const imgContainersFor = (imgContainers, deg, firstObjectCoefficient) => {
  imgContainers.forEach((imgContainer, i) => {
    imgContainer.style.transform = `rotate(${(deg / (imgContainers.length - 1)) * (i - firstObjectCoefficient)
    }deg)`;
    imgContainer.querySelector('.circle__img').style.transform = `rotate(${(deg / (imgContainers.length - 1)) * (i - firstObjectCoefficient) * -1
    }deg)`;
  });
};

export const startPositions = () => {
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
};
