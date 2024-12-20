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

const restsFunc = () => {
  const container = document.querySelector(".rests__list");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "1.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <li class="rests__item">
              <a href="./goods.html?id=${card.id}" class="rests__link">
                <img
                  class="rests__item-image"
                  src="./images/rests/${card.image}"
                  alt="${card.title}"
                  width="384"
                  height="250"
                />
                <div class="rests__item-body">
                  <div class="rests__item-header">
                    <h3 class="rests__item-title">${card.title}</h3>
                    <span class="rests__item-time">${card.time} мин</span>
                  </div>

                  <div class="rests__item-description">
                    <span class="rests__item-description-rating">${card.rating}</span>
                    <span class="rests__item-description-price">От ${card.price} ₽</span>
                    <span class="rests__item-description-category">${card.type}</span>
                  </div>
                </div>
              </a>
            </li>
        `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector(".catalog__list");

  const goodsArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "1.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "2.jpg",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      description:
        "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "3.jpg",
    },
    {
      id: 3,
      title: "Цезарь маки хl",
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "4.jpg",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185 г",
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "5.jpg",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      image: "6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderGoods = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <li class="catalog__item">
              <img
                class="catalog__item-image"
                src="./images/goods/${card.image}"
                alt="${card.title}"
                width="384"
                height="213"
                loading="lazy"
              />
              <div class="catalog__item-about">
                <h2 class="catalog__item-title h3">${card.title}</h2>
                <p class="catalog__item-description">
                ${card.description}
                </p>
              </div>
              <div class="catalog__item-footer">
                <button class="catalog__item-button button">
                  В корзину
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4202 9.69424H5.11555L5.58274 8.74268L13.3452 8.72861C13.6077 8.72861 13.8327 8.54111 13.8796 8.28174L14.9546 2.26455C14.9827 2.10674 14.9406 1.94424 14.8374 1.8208C14.7865 1.76005 14.7229 1.71112 14.6511 1.67739C14.5793 1.64366 14.5011 1.62595 14.4218 1.62549L4.5468 1.59268L4.46243 1.1958C4.4093 0.942676 4.18118 0.758301 3.9218 0.758301H1.50774C1.36146 0.758301 1.22116 0.816412 1.11773 0.91985C1.01429 1.02329 0.956177 1.16358 0.956177 1.30986C0.956177 1.45615 1.01429 1.59644 1.11773 1.69988C1.22116 1.80331 1.36146 1.86143 1.50774 1.86143H3.47493L3.84368 3.61455L4.75149 8.00986L3.58274 9.91768C3.52204 9.9996 3.48549 10.0969 3.4772 10.1985C3.46892 10.3001 3.48924 10.402 3.53586 10.4927C3.62961 10.6786 3.81868 10.7958 4.02805 10.7958H5.0093C4.80011 11.0736 4.68712 11.4121 4.68743 11.7599C4.68743 12.6442 5.40618 13.363 6.29055 13.363C7.17493 13.363 7.89368 12.6442 7.89368 11.7599C7.89368 11.4114 7.77805 11.0724 7.5718 10.7958H10.089C9.8798 11.0736 9.76681 11.4121 9.76711 11.7599C9.76711 12.6442 10.4859 13.363 11.3702 13.363C12.2546 13.363 12.9734 12.6442 12.9734 11.7599C12.9734 11.4114 12.8577 11.0724 12.6515 10.7958H14.4218C14.7249 10.7958 14.9734 10.5489 14.9734 10.2442C14.9725 10.0981 14.9138 9.95827 14.8102 9.85523C14.7065 9.75219 14.5664 9.69432 14.4202 9.69424V9.69424ZM4.77649 2.68018L13.7734 2.70986L12.8921 7.64424L5.82493 7.65674L4.77649 2.68018ZM6.29055 12.2536C6.01868 12.2536 5.7968 12.0317 5.7968 11.7599C5.7968 11.488 6.01868 11.2661 6.29055 11.2661C6.56243 11.2661 6.7843 11.488 6.7843 11.7599C6.7843 11.8908 6.73228 12.0164 6.63969 12.109C6.54709 12.2016 6.4215 12.2536 6.29055 12.2536V12.2536ZM11.3702 12.2536C11.0984 12.2536 10.8765 12.0317 10.8765 11.7599C10.8765 11.488 11.0984 11.2661 11.3702 11.2661C11.6421 11.2661 11.864 11.488 11.864 11.7599C11.864 11.8908 11.812 12.0164 11.7194 12.109C11.6268 12.2016 11.5012 12.2536 11.3702 12.2536V12.2536Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <span class="catalog__item-price">${card.price} ₽</span>
              </div>
            </li> `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
