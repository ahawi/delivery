const modalFunc = () => {
  const modalElement = document.querySelector(".cart-modal__overlay");
  const cartButton = document.querySelector("#cart");

  const openModal = () => {
    modalElement.classList.add("open");
  };

  const closeModal = () => {
    modalElement.classList.remove("open");
  };

  cartButton.addEventListener("click", () => {
    openModal();
  });

  modalElement.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header-close")
    ) {
      closeModal();
    }
  });
};

modalFunc();
