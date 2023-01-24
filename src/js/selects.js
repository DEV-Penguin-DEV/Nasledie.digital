const selectsContainers = document.querySelectorAll('.select-container');

const setButtonText = (option, selectButton) => {
  selectButton.textContent = option.textContent;
};

const closeSelectList = (selectList) => {
  selectList.classList.add('select-list--closed');
  selectList.classList.remove('select-list--opened');
};

export const startSelects = () => {
  selectsContainers.forEach((selectContainer) => {
    const selectButton = selectContainer.querySelector('.select');
    const selectList = selectContainer.querySelector('.select-list');
    const options = selectContainer.querySelectorAll('.option');

    options.forEach((option) => {
      if (option.classList.contains('option--active')) {
        selectButton.textContent = option.textContent;
      }
    });

    selectButton.addEventListener('click', () => {
      if (selectList.classList.contains('select-list--opened')) {
        closeSelectList(selectList);
      } else {
        selectList.classList.remove('select-list--closed');
        selectList.classList.add('select-list--opened');
      }
    });

    options.forEach((option) => {
      option.addEventListener('click', () => {
        options.forEach((optionItem) => {
          optionItem.classList.remove('option--active');
        });
        option.classList.add('option--active');
        setButtonText(option, selectButton);
        closeSelectList(selectList);
      });
    });
  });
};
