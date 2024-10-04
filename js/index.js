const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".js-gallery");
const galleryItem = document.querySelector(".gallery__item");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImg = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector(".lightbox__button");
const overlay = document.querySelector(".lightbox__overlay");

// 1 Створення розмітки
const imagesMarkup = createImagesContainerMarkup(galleryItems);
gallery.insertAdjacentHTML("afterbegin", imagesMarkup);
gallery.addEventListener("click", createImagesContainerMarkup);

function createImagesContainerMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}">
 <img
      class="gallery__image"
      src="${preview}"
   data-source="${original}"
      alt="${description}"/>
  </a>
</li>`;
    })
    .join("");
}

// 2 Додавання класу з hover на фото
gallery.addEventListener("mouseover", onMouseMove);
gallery.addEventListener("mouseout", onMouseMove);

function onMouseMove(event) {
  const item = event.target.closest(".gallery__item");
  if (!item) return;

  if (event.type === "mouseover" || event.type === "mouseout") {
    item.classList.add("gallery__item__hover");
  }
}

// 3 Відкриття модального вікна при натисканні на фото та додавання фото
gallery.addEventListener("click", onGalleryClick);
function onGalleryClick(event) {
  event.preventDefault();
  lightbox.classList.add("is-open");
  lightboxImg.src = event.target.dataset.source;
}

// Закриття модалки та видалення src з img.lightbox__image
closeBtn.addEventListener("click", onCloseBtn);
function onCloseBtn() {
  lightbox.classList.remove("is-open");
  lightboxImg.src = null;
}

// Закриття модального вікна при натисканні div.lightbox__overlay
overlay.addEventListener("click", onCloseOverlay);
function onCloseOverlay() {
  onCloseBtn();
}

// Закриття модального ікна при натисканні esc
window.addEventListener("keydown", onEscKeyPress);
function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onCloseBtn();
  }
}
