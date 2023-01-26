import { startPositions } from './circles';


export const startDropDrag = (isCircleView = false) => {
  const containers = document.querySelectorAll('.circles-main__ceil--content');
  const imgContainers = document.querySelectorAll('.circle__img-container');

  containers.forEach((container) => {
    container.ondragover = (evt) => {
      evt.preventDefault();
    };

    container.ondrop = (evt) => {
      const elementId = evt.dataTransfer.getData('id');
      evt.target.append(imgContainers[elementId]);

      if (isCircleView) {
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

