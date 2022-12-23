import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const imageRef = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
    <img class="gallery__image"
    src ='${preview}' 
    alt ='${description}' 
    data-source='${original}'
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", imageRef);
gallery.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`
  );
  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
  });
}

console.log(galleryItems);
