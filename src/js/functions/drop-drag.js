import { startPositions } from './circles';

export const startDropDrag = (isCircleView = false) => {

  const containers = document.querySelectorAll('.circles-main__ceil--content');
  const imgContainers = document.querySelectorAll('.circle__img-container');

  containers.forEach((container) => {
    container.ondragover = (evt) => {
      evt.preventDefault();

    };
    console.log(isCircleView);
    container.ondrop = (evt) => {
      const elementId = evt.dataTransfer.getData('id');
      evt.target.append(imgContainers[elementId]);

      console.log(isCircleView);
      if (isCircleView) {
        console.log('sp');
        startPositions();
      }
    };
  });

  imgContainers.forEach((imgContainer, i) => {
    imgContainer.ondragstart = (evt) => {
      evt.dataTransfer.setData('id', i);

    };
  });


};
