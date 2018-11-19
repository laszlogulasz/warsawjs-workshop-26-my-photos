export default class Image {
  constructor(path) {
    this.path = path;
    this.imagesGallery = document.getElementById("images");
    this.imageElement = document.createElement("img");
  }

  show() {
    this.imageElement.setAttribute("src", this.path);
    this.imageElement.addEventListener("click", () => this.toggleFavorite());
    this.imagesGallery.appendChild(this.imageElement);
  }

  toggleFavorite() {
    this.imageElement.classList.toggle("image--favourite");
  }

  isFavorite() {
    return this.imageElement.classList.contains("image--favourite");
  }

  hide() {
    this.imageElement.setAttribute("style", "display: none");
  }
}
