const openModalButton = document.querySelector(".component-content__link");
const modalElement = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close-button");

// 열리기 class 추가
const modalClose = () => {
  closeModalButton.addEventListener("click", event => {
    event.preventDefault();

    modalElement.classList.remove("modal--open");
  });
};

// 열리기 class 추가
const modalOpen = () => {
  openModalButton.addEventListener("click", event => {
    event.preventDefault();

    modalElement.classList.add("modal--open");
  });
};

const init = () => {
  modalOpen();
  modalClose();
};

init();
